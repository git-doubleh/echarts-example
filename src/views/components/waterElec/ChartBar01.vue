<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-05 10:13:30
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

const dataxAxis = shallowRef(["金沙江", "雅蓉江", "大渡河", "岷江", "嘉陵江"])
const seriesData = computed(() => {
  return props.chartData.map((it) => {
    return {
      name: it.name,
      type: "bar",
      barWidth: "20",
      itemStyle: {
        color: it.color,
      },
      data: [...it.data],
    }
  })
})

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
      top: "10%",
      left: "5%",
      bottom: "5%",
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
        show: true,
      },
      splitLine: {
        lineStyle: {
          color: "transparent", // 虚线颜色
        },
      },
      data: dataxAxis.value,
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
          color: "transparent", // 虚线颜色
        },
      },
    },
    series: [...seriesData.value],
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
