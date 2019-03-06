<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#004b7c"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="home" @click="to_home()" id="home">
          <img src="cover.png" style="height:55px">
        </el-menu-item>
        <el-menu-item index="controllers" @click="to_user()">控制器資訊</el-menu-item>
        <el-menu-item index="map" @click="to_map()">空間資訊</el-menu-item>
        <el-submenu index="5">
          <template slot="title">統計分析</template>
          <el-menu-item index="2-1">抽水量轉換</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Copyright © 2019 業興環境科技股份有限公司. All rights reserved.</el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.name
    };
  },
  methods: {
    to_user() {
      if (typeof this.$route.params.user !== "undefined") {
        this.$router.push({
          name: "controllers",
          params: { user: this.$route.params.user }
        });
      } else {
        this.$router.push({ name: "home" });
      }
    },
    to_home() {
      this.$router.push({ name: "home" });
    },
    to_map() {
      this.$router.push({ name: "map" });
    }
  },
  watch: {
    $route(to) {
      this.activeIndex = to.name;
    }
  }
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  min-height: calc(100vh - 121px);
}
</style>
