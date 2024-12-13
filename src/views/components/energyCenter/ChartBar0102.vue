<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-09 11:21:03
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const barRef = shallowRef()
const pie = shallowRef()

const datayAxis = shallowRef([2019, 2020, 2021, 2022, 2023])

const renderMarker = (val) => {
  return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${props.chartData[val].itemColor[1]};"></span>`
}
const setOptions = () => {
  const option = {
    title: {
      text: "万元",
      textStyle: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 16,
        fontFamily: "PINGFANG",
      },
      right: 20,
    },
    tooltip: {
      show: true,
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
    grid: {
      top: "10%",
      left: "5%",
      bottom: "5%",
      right: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value",
      axisLabel: {
        color: "#fff",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: "rgba(255,255,255,0.24)", // 虚线颜色
        },
      },
    },
    yAxis: {
      type: "category",
      axisLine: {
        show: true,
      },
      data: datayAxis.value,
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#CEF1F6",
      },
    },
    series: [
      {
        name: "人均GDP",
        type: "bar",
        barWidth: "16",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#0DFDE0", opacity: 0 },
            { offset: 0.1, color: "#0DFDE0" },
            { offset: 1, color: "#1665FF" },
          ]),
        },
        data: [...props.chartData],
      },
    ],
  }
  pie.value.setOption(option, true)
}
const initPie = () => {
  pie.value = echarts.init(barRef.value)
  setOptions()
}
watch(
  () => props.chartData,
  () => {
    initPie()
  }
)
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>
