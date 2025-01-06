<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2025-01-06 14:27:11
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { JINGGUIDATA } from "./config"

const barRef = shallowRef()
const pie = shallowRef()

const setOptions = () => {
  const option = {
    title: {
      text: "万吨",
      textStyle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
        fontFamily: "PINGFANG",
      },
      right: 20,
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
    grid: {
      top: "15%",
      left: "5%",
      bottom: 0,
      right: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      axisLabel: {
        color: "#fff",
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "transparent", // 虚线颜色
        },
      },
      data: [2019, 2020, 2021, 2022, 2023, 2024],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#CEF1F6",
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "rgba(255,255,255,0.24)", // 虚线颜色
        },
      },
    },
    series: [
      {
        name: "最大峰谷差",
        type: "bar",
        barWidth: 24,
        itemStyle: {
          color: "#4DC1FF",
        },
        markLine: {
          label: {
            show: false,
          },
          lineStyle: {
            type: "dashed",
            color: "#FFC24B",
          },
          data: [[{ type: "min" }, { type: "max" }]],
        },
        data: JINGGUIDATA,
      },
    ],
  }
  pie.value.setOption(option, true)
}
const initPie = () => {
  pie.value = echarts.init(barRef.value)
  setOptions()
}

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
