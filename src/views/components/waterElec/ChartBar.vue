<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-11-25 09:40:58
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

const datayAxis = shallowRef(["嘉陵江", "岷江", "大渡河", "雅蓉江", "金沙江"])
const seriesData = computed(() => {
  return props.chartData.map((it) => {
    return {
      name: it.name,
      type: "bar",
      barWidth: "12",
      itemStyle: {
        borderRadius: 8,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: it.itemColor[0], opacity: 0 },
          { offset: 0.1, color: it.itemColor[0] },
          { offset: 1, color: it.itemColor[1] },
        ]),
      },
      label: {
        show: true,
        position: "right",
        valueAnimation: true,
        color: "#fff",
      },
      data: [...it.data],
    }
  })
})

const renderMarker = (val) => {
    return `<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:${
          props.chartData[val].itemColor[1]
        };"></span>`
}
const setOptions = () => {
  const option = {
    title: {
      text: "万千瓦",
      textStyle: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 16,
        fontFamily: 'PINGFANG'
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
      formatter: (params) => {
        let str = ''
        for(let v of params) {
            str += `${renderMarker(v.seriesIndex)} ${v.seriesName} ${v.value}<br/>`
        }
        return `${params[0].name}<br/>${str}`
      },
    },
    legend: {
      show: true,
      itemHeight: 6,
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
