<template>
  <el-form :inline="true" :model="form" class="demo-form-inline">
    <el-form-item label="使用者">
      <el-input v-model="form.user"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查詢</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        user: "0921824910",
      }
    };
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "controllers", params: { user: this.form.user } });
    }
  }
};
</script>

<style scoped>
.el-form {
    width: 460px;
}
</style>
