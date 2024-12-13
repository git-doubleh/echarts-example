<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-11-21 15:06:42
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { TIMERANGE } from './config'
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
      data: TIMERANGE,
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
      right: '5%',
      bottom: "15%",
    },
    series: [
      {
        name: "大发日曲线",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#1AB3F0",
        },
        data: props.chartData[0],
      },
      {
        name: "平均日曲线",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#4EE78E",
        },
        data: props.chartData[1],
      },
      {
        name: "小发日曲线",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#FFE46C",
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
