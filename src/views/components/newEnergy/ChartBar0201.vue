<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-11-26 14:03:26
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

const renderMarker = (val) => {
  return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${props.chartData[val].itemColor[1]};"></span>`
}
const setOptions = () => {
  const option = {
    title: {
      text: "亿千瓦时",
      textStyle: {
        fontSize: 14,
        color: "#fff",
        fontFamily: 'PINGFANG'
      },
      left: 0,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: 'rgba(7, 16, 45, 0.70)',
      borderColor: '#165B82',
      textStyle: {
        color: '#fff',
      }
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
      bottom: '10%',
      right: "5%",
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
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
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
