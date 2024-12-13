<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-11-08 11:08:24
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
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
      text: "单位 / WKW",
      textStyle: {
        fontSize: 12,
        color: "rgba(255,255,255,0.85)",
        fontFamily: 'PINGFANG'
      },
      left: 0,
    },
    legend: {
      show: true,
      itemWidth: 10,
      itemHeight: 4,
      textStyle: {
        color: "#E5FBFF",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["0h", "4h", "8h", "12h", "16h", "20h", "24h"],
      axisLabel: {
        color: "#fff",
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
      left: "10%",
      right: "10%",
      bottom: "10%",
    },
    series: [
      {
        name: "四川电网丰大负荷",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#DE4F7A",
        },
        data: props.chartData[0],
      },
      {
        name: "无引导",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#09A4FD",
        },
        data: props.chartData[1],
      },
      {
        name: "电价引导",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#09A4FD",
        },
        lineStyle: {
          type: "dashed",
        },
        data: props.chartData[2],
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}
watch(
  () => props.chartData,
  () => {
    initChart()
  }
)
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
