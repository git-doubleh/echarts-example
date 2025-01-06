<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2025-01-06 14:10:29
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { LOADDRUATIONTIMEDATA } from "./config"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const line = shallowRef()
const lineRef = shallowRef()

const setOptions = () => {
  const option = {
    title: {
      text: "小时",
      textStyle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
        fontFamily: "PINGFANG",
      },
      right: 20,
    },
    legend: {
      show: true,
      itemWidth: 10,
      itemHeight: 4,
      itemGap: 20,
      textStyle: {
        color: "#E5FBFF",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "RGBA(255, 255, 255, .2)",
        },
      },
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: 0,
      containLabel: true,
    },
    series: [
      {
        name: "97%",
        type: "line",
        itemStyle: {
          color: "#7621F6",
        },
        data: LOADDRUATIONTIMEDATA.get("97"),
      },
      {
        name: "95%",
        type: "line",
        itemStyle: {
          color: "#FFC24B",
        },
        data: LOADDRUATIONTIMEDATA.get("95"),
      },
      {
        name: "92%",
        type: "line",
        itemStyle: {
          color: "#A1F621",
        },
        data: LOADDRUATIONTIMEDATA.get("92"),
      },
      {
        name: "90%",
        type: "line",
        itemStyle: {
          color: "#26AFFF",
        },
        data: LOADDRUATIONTIMEDATA.get("90"),
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}
// watch(
//   () => props.chartData,
//   () => {
//     initChart()
//   }
// )
onMounted(() => {
  initChart()
})
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
