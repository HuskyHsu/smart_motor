<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <chart
          id="chart"
          title="趨勢圖"
          chart_title="馬達與水表紀錄"
          :series="series_time"
          :xAxis="{type: 'time', max: new Date().toISOString().slice(0, 10)}"
          :yAxis="[
          {name:'每日開關秒數', type:'value'}, 
          {name:'水表數值', type:'value'}, 
          {name:'水表數值差', type:'value',position: 'right', offset: 50}]"
          :legend="{
              x: 'left',
              data:['每日開關秒數', '水表數值', '水表數值差'],
              selected: {'水表數值差': false},
          }"
          :dataZoom="true"
        ></chart>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <chart
          id="chart-2"
          title="相關圖"
          chart_title="馬達時間與水表紀錄"
          :series="series_time_value"
          :xAxis="{name:'馬達啟動時間(小時)', type:'value', nameLocation: 'middle', nameGap: 25}"
          :yAxis="[{name:'每日抽水量(m³/day)', type:'value', nameLocation: 'middle', nameGap: 35}]"
        ></chart>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <chart
          id="chart-3"
          title="相關圖"
          chart_title="馬達時間與水表紀錄"
          :series="series_time_prediction"
          :xAxis="{name:'每日抽水量_觀測(m³/day)', type:'value', nameLocation: 'middle', nameGap: 25}"
          :yAxis="[{name:'每日抽水量_推估(m³/day)', type:'value', nameLocation: 'middle', nameGap: 35}]"
          :legend="{
              x: 'left',
              data:['斜率', '斜率推估回歸', '平均', '平均推估回歸'],
          }"
        ></chart>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <record-table :id="id" :data="record_merge"></record-table>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <motor-record :id="id" :data="motor_record"></motor-record>
      </el-col>
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
        <water-meter-record :id="id" :data="water_meter_record"></water-meter-record>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>
import * as ecStat from "echarts-stat";

import get_data from "../api/get_data";
import record_table from "./record_table.vue";
import chart from "./chart.vue";
// import motor_record from "./motor_record.vue";
// import water_meter_record from "./water_meter_record.vue";

export default {
  props: {
    name: String
  },
  data() {
    return {
      user: this.$route.params.user,
      id: this.$route.params.id,
      motor_record: [],
      water_meter_record: [],
      record_merge: [],
      unit_time_output: 0,
      unit_time_output_2: 0,
      min_time: "2000-01-01"
    };
  },
  created() {
    this.refresh();
  },
  updated() {},
  components: {
    // "motor-record": motor_record,
    // "water-meter-record": water_meter_record,
    "record-table": record_table,
    chart: chart
  },
  methods: {
    refresh() {
      let self = this;

      Promise.all([
        get_data("motor_record", {
          id: self.id
        }),
        get_data("water_meter_record", { id: self.id })
      ]).then(d => {
        if (d[0].status === "OK") {
          self.motor_record = d[0].records.reverse();
        }

        if (d[1].status === "OK") {
          self.water_meter_record = d[1].records
            .reverse()
            .filter(d => d.value != "0");
        }

        if (d[0].status === "OK" && d[1].status === "OK") {
          self.record_merge = self.merge_record(
            self.motor_record,
            self.water_meter_record
          );

          let total = 0;
          let diff = 0;

          let data = this.record_merge
            .filter(item => {
              return (
                typeof item.onoff_total !== "undefined" &&
                typeof item.value_diff !== "undefined"
              );
            })
            .map(item => {
              total += item.onoff_total;
              diff += item.value_diff;
              return [item.onoff_total, item.value_diff];
            });

          let myRegression = ecStat.regression("linear", data);
          self.unit_time_output = myRegression.parameter.gradient;

          self.unit_time_output_2 = diff / total;
        }
      });
    },
    transform_motor_record(data) {
      // 轉換起閉紀錄
      return [...data].reverse().reduce((acc, it) => {
        return [
          ...acc,
          ...[
            [it.on_time, 0],
            [it.on_time, 1],
            [it.off_time, 1],
            [it.off_time, 0]
          ]
        ];
      }, []);
    },
    transform_motor_record_daily(data) {
      // 每日累積開關時間
      return Object.entries(
        [...data].reverse().reduce((acc, it) => {
          acc[it.on_time.slice(0, 10)] =
            (acc[it.on_time.slice(0, 10)] || 0) + it.total;
          return acc;
        }, {})
      );
    },
    transform_water_meter_record(data) {
      // 轉換水表紀錄
      return [...data].reverse().reduce((acc, it) => {
        return [...acc, [it.date, it.value]];
      }, []);
    },
    merge_record(motor_data, water_meter_data) {
      // let dates = Array.from(new Set([motor_data.map(i => i.on_time.slice(0, 10)), water_meter_data.map(i => i.date)])).sort();

      water_meter_data = [...water_meter_data].reverse();

      let motor_data_obj = motor_data.reduce((acc, it) => {
        if (it.off_time !== "NA") {
          let date = it.on_time.slice(0, 10);
          let motor_data = acc[date] ? acc[date].motor_data : [];
          acc[date] = {
            motor_data: [...motor_data, ...[it]]
          };
        }
        return acc;
      }, {});

      let data_obj = water_meter_data.reduce((acc, it, index) => {
        acc[it.date] = acc[it.date] || {};
        it.value_diff = Number(
          (
            (water_meter_data[index + 1]
              ? water_meter_data[index + 1].value
              : it.value) - it.value
          ).toFixed(2)
        );

        acc[it.date].water_meter_data = it;
        return acc;
      }, motor_data_obj);

      let data = Object.entries(data_obj);

      data = data.map(d => {
        let onoff = d[1].motor_data || [];
        let obj = {
          date: d[0],
          onoff: onoff,
          onoff_total: onoff.reduce((acc, it) => {
            return acc + it.total;
          }, 0),
          value: d[1].water_meter_data
            ? d[1].water_meter_data.value
            : undefined,
          value_diff: d[1].water_meter_data
            ? d[1].water_meter_data.value_diff
            : undefined
        };

        return obj;
      });

      return data.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        }
        if (a.date < b.date) {
          return 1;
        }
        return 0;
      });
    }
  },
  computed: {
    series_time: function() {
      return [
        {
          name: "每日開關秒數",
          type: "bar",
          animation: false,
          yAxisIndex: 0,
          data: this.record_merge.map(item => [item.date, item.onoff_total])
        },
        {
          name: "水表數值",
          type: "line",
          animation: false,
          showSymbol: false,
          yAxisIndex: 1,
          lineStyle: { width: 1 },
          data: this.record_merge.map(item => [item.date, item.value])
        },
        {
          name: "水表數值差",
          show: false,
          type: "bar",
          animation: false,
          yAxisIndex: 2,
          data: this.record_merge.map(item => [item.date, item.value_diff])
        }
      ];
    },
    series_time_value: function() {
      let data = this.record_merge
        .filter(item => {
          return (
            typeof item.onoff_total !== "undefined" &&
            typeof item.value_diff !== "undefined"
          );
        })
        .map(item => [item.onoff_total / 3600, item.value_diff]);

      let myRegression = ecStat.regression("linear", data);

      myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
      });

      return [
        {
          symbolSize: 10,
          data: data,
          type: "scatter"
        },
        {
          name: "line",
          type: "line",
          showSymbol: false,
          data: myRegression.points,
          markPoint: {
            itemStyle: {
              normal: {
                color: "transparent"
              }
            },
            label: {
              normal: {
                show: true,
                position: "left",
                formatter: myRegression.expression,
                textStyle: {
                  color: "#333",
                  fontSize: 14
                }
              }
            },
            data: [
              {
                coord: myRegression.points[myRegression.points.length - 2]
              }
            ]
          }
        }
      ];
    },
    series_time_prediction: function() {
      let data = this.record_merge.filter(item => {
        return (
          typeof item.onoff_total !== "undefined" &&
          typeof item.value_diff !== "undefined"
        );
      });

      let data_tr = data.map(item => [
        item.value_diff,
        item.onoff_total * this.unit_time_output
      ]);
      let data_tr_2 = data.map(item => [
        item.value_diff,
        item.onoff_total * this.unit_time_output_2
      ]);

      let myRegression = ecStat.regression("linear", data_tr);

      myRegression.points.sort(function(a, b) {
        return a[0] - b[0];
      });

      let myRegression_2 = ecStat.regression("linear", data_tr_2);

      myRegression_2.points.sort(function(a, b) {
        return a[0] - b[0];
      });

      return [
        {
          name: "斜率",
          symbolSize: 5,
          data: data_tr,
          type: "scatter"
        },
        {
          name: "平均",
          symbolSize: 5,
          data: data_tr_2,
          type: "scatter"
        },
        {
          name: "斜率推估回歸",
          type: "line",
          showSymbol: false,
          data: myRegression.points,
          lineStyle: {
            width: 1,
            color: "#c23531"
          },
          itemStyle: {
            color: "#c23531"
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: "transparent"
              }
            },
            label: {
              normal: {
                show: true,
                position: "left",
                formatter: myRegression.expression,
                textStyle: {
                  color: "#c23531",
                  fontSize: 14
                }
              }
            },
            data: [
              {
                coord: myRegression.points[myRegression.points.length - 2]
              }
            ]
          }
        },
        {
          name: "平均推估回歸",
          type: "line",
          showSymbol: false,
          data: myRegression_2.points,
          lineStyle: {
            width: 1,
            color: "#2f4554"
          },
          itemStyle: {
            color: "#2f4554"
          },
          markPoint: {
            itemStyle: {
              normal: {
                color: "transparent"
              }
            },
            label: {
              normal: {
                show: true,
                position: "left",
                formatter: myRegression_2.expression,
                textStyle: {
                  color: "#2f4554",
                  fontSize: 14
                }
              }
            },
            data: [
              {
                coord: myRegression_2.points[myRegression_2.points.length - 1]
              }
            ]
          }
        }
      ];
    }
  }
};
</script>

<style scoped>
/* .el-row {
  margin-bottom: 20px;
} */

.el-col {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
</style>