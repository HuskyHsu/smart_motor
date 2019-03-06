<template>
  <el-card class="box-card">
    <div slot="header">
      <span>使用者：{{ user }}(設備數量：{{ controllers.length }})</span>
    </div>
    <el-table :data="controllers" style="width: 100%" :xs="6" :sm="6" :md="6" :lg="12" :xl="12">
      <el-table-column align="center" type="index" width="30"></el-table-column>
      <el-table-column align="center" prop="id" label="ID" width="250"></el-table-column>
      <el-table-column align="center" prop="name" label="名稱"></el-table-column>
      <el-table-column align="center" prop="month_max_h" label="月預期抽水時數"></el-table-column>
      <el-table-column align="center" prop="water_meter_offset" label="水表偏移值"></el-table-column>
      <el-table-column align="center" label="馬達最後啟動時間" width="150">
        <template slot-scope="scope">
          {{scope.row.last_motor_record.on_time.slice(0, 16)}}
          <div
            v-if="(new Date() - new Date(scope.row.last_motor_record.on_time)) < 1000*60*60*24"
          >{{ '(' + parseInt(((new Date() - new Date(scope.row.last_motor_record.on_time))/1000/60/60)) + '小時前)' }}</div>
          <div
            v-else
          >{{ '(' + parseInt(((new Date() - new Date(scope.row.last_motor_record.on_time))/1000/60/60/24)) + '天前)'}}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="狀態" width="100">
        <template slot-scope="scope">
          <el-tag
            v-if="scope.row.last_motor_record.off_time !== 'NA'"
            size="medium"
            type="success"
          >關閉</el-tag>
          <el-tag v-else size="medium" type="danger">啟動</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="水表讀數" width="100">
        <template slot-scope="scope">
          {{scope.row.last_water_meter_record.value}}
          <div>({{(scope.row.last_water_meter_record.value - scope.row.water_meter_offset).toFixed(1)}})</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="數據記錄" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="to_record(scope.row.id)">記錄</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="地圖" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="open_map(scope.row.latitude, scope.row.longitude)">前往</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import get_data from "../api/get_data";

export default {
  created() {
    let self = this;

    Promise.resolve(get_data("controller", { user: self.user })).then(d => {
      if (d.status === "OK") {
        // self.controllers = d.controllers;
        let data = d.controllers.map(c => {
          return get_data("motor_record", {
            id: c.id
          });
        });

        data = [
          ...data,
          ...d.controllers.map(c => {
            return get_data("water_meter_record", {
              id: c.id
            });
          })
        ];

        Promise.all(data).then(r => {
          let len = d.controllers.length;

          r.forEach((data, index) => {
            let controller = d.controllers[index < len ? index : index - len];

            if (index < len) {
              controller.last_motor_record = data.records[data.records.length - 1];
              controller.motor_record = data.records;
            } else {
              controller.last_water_meter_record = data.records[data.records.length - 1];
              controller.water_meter_record = data.records;
            }
          });

          self.controllers = d.controllers;
        });
      }
    });
  },
  data() {
    return {
      user: this.$route.params.user,
      controllers: []
      // record: {}
    };
  },
  components: {},
  computed: {},
  methods: {
    to_record(id) {
      this.$router.push({ name: "record", params: { id: id } });
    },
    open_map(lat, lng) {
      window.open(
        `https://www.google.com.tw/maps/place/${lat},${lng}`,
        "_blank"
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
</style>
