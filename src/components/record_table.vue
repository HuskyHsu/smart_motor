<template>
  <el-card class="box-card">
    <div slot="header">
      <span>紀錄({{ id }})</span>
    </div>
    <el-table
      :data="data.slice((page - 1)*10, page*10)"
      :row-class-name="onoff_status"
      style="width: 100%"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <p>馬達起閉紀錄</p>
          <el-table :data="props.row.onoff" style="width: 100%" v-if="props.row.onoff.length > 0">
            <!-- <el-table-column align="center" type="index" :index="indexMethod" width="50" label="##"></el-table-column> -->
            <el-table-column align="center" prop="on_time" label="開啟時間"></el-table-column>
            <el-table-column align="center" prop="off_time" label="關閉時間"></el-table-column>
            <el-table-column align="center" label="開啟時間">
              <template slot-scope="scope">
                <div
                  v-if="scope.row.total >= 3600"
                >{{ parseInt(scope.row.total/3600) }}小時 {{ parseInt((scope.row.total - parseInt(scope.row.total/3600)*3600)/60) }}分鐘({{scope.row.total}}秒)</div>
                <div
                  v-else
                >{{ parseInt(scope.row.total/60) }}分鐘 {{ (scope.row.total - parseInt(scope.row.total/60)*60) }}秒({{scope.row.total}}秒)</div>
              </template>
            </el-table-column>
          </el-table>
          <p v-else>無</p>
        </template>
      </el-table-column>
      <el-table-column align="center" type="index" :index="indexMethod" width="50"></el-table-column>
      <el-table-column align="center" prop="date" label="日期"></el-table-column>
      <el-table-column align="center" prop="value" label="累積水表數(m³, 00:00時)"></el-table-column>
      <el-table-column align="center" prop="value_diff" label="水表紀錄(m³/day)">
      </el-table-column>
      <el-table-column align="center" label="馬達啟用時間(1/day)">
        <template slot-scope="scope">
          <div
            v-if="scope.row.onoff_total >= 3600"
          >{{ parseInt(scope.row.onoff_total/3600) }}小時 {{ parseInt((scope.row.onoff_total - parseInt(scope.row.onoff_total/3600)*3600)/60) }}分鐘({{scope.row.onoff.length}}回, {{scope.row.onoff_total}}秒)</div>
          <div
            v-else-if="scope.row.onoff_total > 0"
          >{{ parseInt(scope.row.onoff_total/60) }}分鐘 {{ (scope.row.onoff_total - parseInt(scope.row.onoff_total/60)*60) }}秒({{scope.row.onoff.length}}回)</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="單位時間出水量(L/s)">
        <template slot-scope="scope">
          {{(scope.row.onoff_total !== 0 && typeof scope.row.value_diff !== 'undefined') ? (scope.row.value_diff*1000 / (scope.row.onoff_total)).toFixed(2) : ''}}
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="10"
      :pager-count="5"
      layout="prev, pager, next"
      :current-page="page"
      :total="data.length"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </el-card>
</template>

<script>
export default {
  props: {
    data: Array,
    id: String
  },
  data() {
    return {
      page: 1
    };
  },
  created() {},
  updated() {},
  components: {},
  methods: {
    handleCurrentChange(val) {
      this.page = val;
    },
    indexMethod(index) {
      return (this.page - 1) * 10 + index + 1;
    },
    onoff_status({ row }) {
      if (row.onoff.length > 0) {
        return "warning-row";
      } else {
        return "";
      }
    },
  }
};
</script>

<style>
/* .table-expand label {
  width: 90px;
  color: #99a9bf;
} */

.el-table .warning-row {
  background: oldlace;
}
</style>