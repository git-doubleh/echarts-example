<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-11-08 11:08:20
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
      right: 20,
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
      data: ['0h', '4h', '8h', '12h', '16h', '20h', '24h'],
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
      right: '10%',
      bottom: "10%",
    },
    series: [
      {
        name: "丰大",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#31E82D",
        },
        data: props.chartData[0],
      },
      {
        name: "枯大",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#66A3FF",
        },
        data: props.chartData[1],
      },
      {
        name: "工作日",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#ED72F8",
        },
        data: props.chartData[2],
      },
      {
        name: "周末",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#FC6E76",
        },
        data: props.chartData[3],
      },
      {
        name: "节假日",
        smooth: true,
        showSymbol: false,
        type: "line",
        itemStyle: {
          color: "#FFB526",
        },
        data: props.chartData[4],
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
