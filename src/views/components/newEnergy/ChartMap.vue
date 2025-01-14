<!--
 * @Description: 
 * @Date: 2024-09-19 15:21:23
 * @LastEditTime: 2025-01-13 10:59:45
-->
<template>
    <div class="map-box">
        <span class="name f-16 f-w500">资源量</span>
        <div ref="mapRef" class="echart-map" />
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, defineEmits, watch, computed } from "vue"
import mapSiChuanJson from "@/map/sichuan.json"
import { NEWENERGYMAPDATA } from "./config"

echarts.registerMap("sichuan", mapSiChuanJson)

const props = defineProps({
  tabSelectedIdx: {
    type: Number,
    default: 0,
  },
})
// 经纬度
const coords = [
  [102.995946, 32.065358],
  [100.987883, 32.27207],
  [102.973812, 33.583897],
  [101.713606, 32.909191],
  [102.550324, 32.796606],
  [102.232476, 31.900958],
  [103.598242, 31.483006],
  [103.598242, 31.483006],
  [103.858436, 31.687792],
  [103.6123, 32.661796],
  [104.253573, 33.257591],
  [102.372873, 31.003198],
  [102.067735, 31.480036],
  [101.962984, 30.005408],
  [102.242007, 29.920402],
  [101.897013, 30.885265],
  [101.513418, 29.007443],
  [101.02165, 30.03657],
  [100.680096, 31.396019],
  [100.000358, 31.631909],
  [101.133265, 30.98285],
  [98.108903, 32.983034],
  [99.11788, 30.012162],
  [100.276721, 29.999531],
  [98.587979, 31.812106],
  [98.830521, 31.214821],
  [100.318978, 30.945964],
  [99.291262, 28.71878],
  [100.301586, 29.045143],
  [99.805057, 28.937746],
  [100.338839, 32.273354],
  [102.27033, 27.901347],
  [102.418991, 28.314745],
  [102.512747, 28.646842],
  [102.253161, 26.660167],
  [102.182018, 27.407479],
  [102.586184, 26.639791],
  [103.58015, 28.269969],
  [102.759818, 27.065198],
  [102.780326, 28.964823],
  [102.849998, 28.018975],
  [103.139738, 28.333003],
  [102.819052, 27.714687],
  [103.256275, 27.699585],
  [102.547745, 27.380455],
  [101.516006, 27.426104],
  [101.276051, 27.93511],
  [102.185872, 28.555802],
  [101.722669, 26.588551],
]

const mapRef = ref()
const map = ref()

const targetData = computed(() => {
  return NEWENERGYMAPDATA.get(props.tabSelectedIdx.toString())
})
const getData = () => {
  return targetData.value.map(
    (it, idx) => {
      return coords[idx].concat(Math.sqrt(it).toFixed(2))
    }
  )
}

const setOptions = () => {
  const options = {
    visualMap: {
      min: 0,
      // max: 200,
      max: Math.max(...targetData.value.map(it => parseInt(Math.sqrt(it)))),
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
        // color: ["#41B6E2", "#EA9D3D", "#F93536"],
        color: ["#EA9D3D", "#F93536"],
      },
    },
    geo: {
      map: "sichuan",
      zoom: 1.3, //放大缩小
      // z: 1,
      label: {
        show: false,
      },
      itemStyle: {
        areaColor: "transparent",
        borderColor: "transparent",
      },
      emphasis: {
        label: {
          show: false,
        },
        itemStyle: {
          areaColor: "transparent",
          borderColor: "tranparent",
        },
      },
    },
    series: [
      {
        type: "heatmap",
        coordinateSystem: "geo",
        pointSize: 30,
        blurSize: 10,
        // z: 3,
        data: getData(),
      },
    ],
  }
  map.value.setOption(options)
}
const initMap = () => {
  map.value = echarts.init(mapRef.value)
  setOptions()
}

watch(
  () => props.tabSelectedIdx,
  () => {
    initMap()
  }
)

onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.map-box {
  position: absolute;
  z-index: 1;
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
