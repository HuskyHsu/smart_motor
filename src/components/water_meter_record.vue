<template>
  <el-card class="box-card">
    <div slot="header">
      <span>水表紀錄({{ id }})</span>
    </div>
    <el-table :data="data.slice((page - 1)*10, page*10)" style="width: 100%">
      <el-table-column align="center" type="index" :index="indexMethod" width="50"></el-table-column>
      <el-table-column align="center" prop="date" label="時間"></el-table-column>
      <el-table-column align="center" prop="value" label="累積抽用量(m³)"></el-table-column>
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