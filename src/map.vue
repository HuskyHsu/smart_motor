<template>
  <div id="map"></div>
</template>

<script>
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 修正wabpack圖檔引入失敗
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

import get_data from "./api/get_data_test";

export default {
  data() {
    return {
      user: this.$route.params.user,
      map: {},
      controllers: [],
    };
  },
  methods: {
    // 取得控制器
    async getControllers(user) {
      const d = await get_data("controller", {
        user: user
      });

      return d.status === "OK" ? d.controllers : [];
    },
    // 設定控制器圖層
    setControllersLayer(controllers) {
      let that = this;

      let controllers_markers = controllers.map(controller => {
        let icon = L.Marker.prototype.options.icon;
        const length = controller.motor_record.length;
        if (controller.motor_record[length - 1].off == "NA") {
          icon.options.__proto__.className = "on";
        }

        let marker = L.marker([controller.latitude, controller.longitude], {
          id: controller.id,
          icon: icon
        });
        marker.bindPopup(`
            <div>
                <h3>${controller.name}</h3>
                <p>ID：${controller.id}</p>
                <p>座標：${controller.latitude},${controller.longitude}</p>
                <p>狀態：${controller.motor_record[length - 1].off == "NA" ? "開啟": "關閉"}</p>
                <p>資料：<a href="#/user/${that.user}/${controller.id}" target="_blank">查看</a></p>
            </div>
        `);

        return marker;
      });

      return L.featureGroup(controllers_markers);
    },
    to_record(id) {
      this.$router.push({ name: "record", params: { id: id } });
    }
  },
  created() {},
  async mounted() {
    let self = this;

    // 街道圖
    let streets = L.tileLayer(
      "https://mt{s}.google.com/vt/x={x}&y={y}&z={z}&hl=zh-TW",
      {
        subdomains: "012",
        maxZoom: 20,
        attribution: "Map data: &copy; Google",
        fixed: true
      }
    );

    // 地圖物件
    let map = L.map("map", {
      attributionControl: false
    });

    // 控制器
    self.controllers = await this.getControllers(self.user);

    // 資料
    const dataPromises = [
      ...self.controllers.map(async c => {
        return get_data("motor_record", {
          id: c.id
        });
      }),
      ...self.controllers.map(async c => {
        return get_data("water_meter_record", {
          id: c.id
        });
      })
    ];

    for (const [index, value] of dataPromises.entries()) {
      let data = await value;
      if (index < self.controllers.length) {
        self.controllers[index].motor_record = data.records;
      } else {
        self.controllers[index - self.controllers.length].water_meter_record =
          data.records;
      }
    }

    let controllers_layer = this.setControllersLayer(self.controllers);

    map
      .addLayer(streets)
      .addLayer(controllers_layer)
      .fitBounds(controllers_layer.getBounds());

    self.map = map;
  }
};
</script>

<style>
/* .el-main {
  padding: 0;
} */

#map {
  height: calc(100vh - 121px);
  margin: -20px;
}

img.leaflet-marker-icon.on {
  filter: hue-rotate(160deg);
}

.leaflet-popup p {
  margin: 0.5em 0;
}
</style>
