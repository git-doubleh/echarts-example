<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-11 11:01:29
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { MAXMINLOADDATA } from "./config"
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
      text: "亿千瓦时",
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
      data: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023],
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
        name: "最大负荷",
        type: "line",
        itemStyle: {
          color: "#FF8A36",
        },
        data: MAXMINLOADDATA.get("最大负荷"),
      },
      {
        name: "最小负荷",
        type: "line",
        itemStyle: {
          color: "#53B651",
        },
        data: MAXMINLOADDATA.get("最小负荷"),
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
