<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-13 10:52:42
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { SECTIONBARDATA } from "./config"
const props = defineProps({
  timeSelect: {
    type: Number,
    default: 0,
  },
})
const barRef = shallowRef()
const pie = shallowRef()

const datayAxis = shallowRef(["攀西", "甘孜", "阿坝", "隆电", "疆电"])

const setOptions = () => {
  const option = {
    title: {
      text: "万千瓦时",
      textStyle: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 16,
        fontFamily: "PINGFANG",
      },
      right: 0,
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
          color: "transparent", // 虚线颜色
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
      splitLine: {
        lineStyle: {
          color: "transparent", // 虚线颜色
        },
      },
    },
    series: [
      {
        type: "bar",
        name: "断面信息",
        barWidth: 20,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#0DFDE0" },
            { offset: 0.2, color: "#0DFDE0" },
            { offset: 1, color: "#1665FF" },
          ]),
        },
        data: SECTIONBARDATA[props.timeSelect],
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
  () => props.timeSelect,
  () => {
    initPie()
  }
)

onMounted(() => {
  initPie()
})
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>
