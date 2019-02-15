<template>
  <el-card class="box-card">
    <div slot="header">
      <span>{{title}}</span>
    </div>
    <div>
      <div :id="id" style="height:500px"></div>
    </div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";

export default {
  props: {
    id: String,
    title: String,
    chart_title: String,
    series: Array,
    xAxis: Object,
    yAxis: Array,
    legend: Object,
    dataZoom: Boolean
  },
  data() {
    return {
      myChart: {},
      chart_option: {}
    };
  },
  created() {
    this.chart_option = {
      title: {
        text: this.$props.chart_title,
        x: "center"
      },
      grid: {
        top: 80,
        bottom: 80,
        left: 90,
        right: 90
      },
      toolbox: {
        showTitle: false,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          restore: {},
          saveAsImage: {}
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross"
        }
      },
      legend: this.$props.legend,
      dataZoom: [
        {
          show: this.$props.dataZoom || false,
          realtime: true
        }
      ],
      xAxis: this.$props.xAxis,
      yAxis: this.$props.yAxis,
      series: this.$props.series
    };
  },
  mounted() {
    this.myChart = echarts.init(document.getElementById(this.$props.id));
    this.myChart.setOption(this.chart_option);
  },
  updated() {},
  watch: {
    series: function() {
      this.myChart.setOption({
        series: this.$props.series
      });
    }
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
#main {
  height: 500px;
}
</style>
