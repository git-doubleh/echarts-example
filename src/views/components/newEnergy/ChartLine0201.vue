<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-11-26 14:04:15
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { TIMERANGE12 } from './config'
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
    legend: {
      show: true,
      itemWidth: 16,
      itemHeight: 4,
      itemGap: 30,
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
      data: TIMERANGE12,
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
      left: "5%",
      right: '5%',
      bottom: "5%",
      containLabel: true
    },
    series: [
      {
        name: "风电",
        type: "line",
        itemStyle: {
          color: "#1AB3F0",
        },
        data: props.chartData[0],
      },
      {
        name: "光伏",
        type: "line",
        itemStyle: {
          color: "#4EE78E",
        },
        data: props.chartData[1],
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
