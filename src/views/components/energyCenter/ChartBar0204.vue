<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2025-01-06 11:05:53
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { PERSONUSEDRATE } from "./config"
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
      text: "吨标煤/万元",
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
      top: "15%",
      left: "5%",
      bottom: "5%",
      right: "5%",
      containLabel: true
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
      data: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
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
        name: "全国",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#4DC1FF",
        },
        data: PERSONUSEDRATE.get("全国"),
      },
      {
        name: "四川",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#4DFFE4",
        },
        data: PERSONUSEDRATE.get("四川"),
      },
    ],
  }
  pie.value.setOption(option, true)
}
const initPie = () => {
  pie.value = echarts.init(barRef.value)
  setOptions()
}
// watch(
//   () => props.chartData,
//   () => {
//     initPie()
//   }
// )
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
