<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2025-01-09 17:45:31
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
const props = defineProps({
  chartData: {
    type: Object,
    default: () => {
      return {
        name: "",
        Value: 0,
      }
    },
  },
  color: {
    type: String,
    default: "",
  },
})
const line = shallowRef()
const lineRef = shallowRef()

const setOptions = () => {
  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        radius: "68%",
        progress: {
          show: true,
          width: 14,
          itemStyle: {
            color: props.color,
          },
        },
        axisLine: {
          lineStyle: {
            width: 14,
            color: [[1, "#072B57"]],
          },
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        pointer: {
          show: false,
        },
        title: {
          show: true,
          fontSize: 16,
          offsetCenter: [0, "130%"],
          color: "#fff",
        },
        detail: {
          color: props.color,
          valueAnimation: true,
          fontSize: 20,
          offsetCenter: [0, 0],
          formatter: (name) => {
            return `${name}%`
          },
        },
        data: [props.chartData],
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}
onMounted(() => {
  initChart()
})
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
