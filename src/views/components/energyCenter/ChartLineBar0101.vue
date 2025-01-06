<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2025-01-06 09:21:40
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

const setOptions = () => {
  const option = {
    title: {
      text: "万亿",
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
    legend: {
      show: true,
      itemHeight: 4,
      itemWidth: 10,
      itemGap: 40,
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      top: "20%",
      left: "5%",
      bottom: "15%",
      right: "15%",
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
      data: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
    },
    yAxis: [
      {
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
            color: "rgba(255,255,255,0.14)", // 虚线颜色
          },
        },
      },
      {
        type: "value",
        axisLabel: {
          color: "#fff",
          formatter: "{value} %",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "RGBA(255, 255, 255, .2)",
          },
        },
      },
    ],
    series: [...props.chartData],
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
