<template>
  <el-card class="box-card">
    <div slot="header">
      <span>馬達起閉紀錄({{ id }})</span>
    </div>
    <el-table :data="data.slice((page - 1)*10, page*10)" style="width: 100%">
      <el-table-column align="center" type="index" :index="indexMethod" width="50"></el-table-column>
      <el-table-column align="center" prop="on_time" label="開啟時間"></el-table-column>
      <el-table-column align="center" prop="off_time" label="關閉時間"></el-table-column>
      <el-table-column align="center" label="開啟時間">
        <template slot-scope="scope">
          <div
            v-if="scope.row.total >= 3600"
          >{{ parseInt(scope.row.total/3600) }}小時 {{ parseInt((scope.row.total - parseInt(scope.row.total/3600)*3600)/60) }}分鐘</div>
          <div
            v-else
          >{{ parseInt(scope.row.total/60) }}分鐘 {{ (scope.row.total - parseInt(scope.row.total/60)*60) }}秒</div>
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
  }
};
</script>

<style scoped>
</style>