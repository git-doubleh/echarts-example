<!--
 * @Description: 
 * @Date: 2024-09-19 15:21:23
 * @LastEditTime: 2024-12-17 10:46:40
-->
<template>
    <div class="map-box">
        <span class="name f-16 f-w500">资源量</span>
        <div ref="mapRef" class="echart-map" />
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, defineEmits, watch } from "vue"
import mapSiChuanJson from "@/map/sichuan.json"

echarts.registerMap("sichuan", mapSiChuanJson)

const mapRef = ref()
const map = ref()

const setOptions = () => {
  const options = {
    visualMap: {
      min: 0,
      max: 100,
      seriesIndex: 0,
      calculable: true,
      bottom: 70,
      itemWidth: 10,
      align: "left",
      orient: "horizontal",
      textStyle: {
        color: "rgba(255, 255, 255, 0.85)",
      },
      inRange: {
        color: ["#41B6E2", "#EA9D3D", "#F93536"],
      },
    },
    geo: {
      map: "sichuan",
      zoom: 1.3, //放大缩小
      z: 1,
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: "transparent",
        borderColor: "transparent",
      },
      emphasis: {
        label: {
          show: false
        },
        itemStyle: {
          areaColor: "transparent",
          borderColor: "tranparent",
        }
      },
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "geo",
        pointSize: 20,
        blurSize: 10,
        z: 3,
        data: [
          [98.139929, 32.993127, 100],
          [98.139929, 32.993107, 100],
          [102.518486, 32.370756, 90],
          [99.280562, 31.681117, 60],
          [102.224129, 28.806292, 60],
        ],
      },
    ],
  }
  map.value.setOption(options)
}
const initMap = () => {
  map.value = echarts.init(mapRef.value)
  setOptions()
}

onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.map-box {
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  .name {
    position: absolute;
    bottom: 100rem;
    left: 0;
    color: #fff;
    line-height: 28rem;
  }
  .echart-map {
    width: 100%;
    height: 100%;
  }
}
</style>
