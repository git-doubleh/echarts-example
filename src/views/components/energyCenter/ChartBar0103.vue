<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-09 13:22:19
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
      formatter: (params) => {
        let str = ''
        for(let v of params) {
            str += `${v.marker} ${v.seriesName} &nbsp;&nbsp;&nbsp;&nbsp;${v.value}%<br/>`
        }
        return `${params[0].name}<br/>${str}`
      }
    },
    legend: {
      show: true,
      itemHeight: 4,
      itemWidth: 10,
      itemGap: 30,
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      top: "20%",
      left: "8%",
      bottom: "15%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      axisLabel: {
        interval: 0,
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
      data: ["国民生产总值", "投资", "消费", "进出口", "规上工业增加值"],
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      },
      axisLabel: {
        color: "#CEF1F6",
        formatter:(value, index)=>{
          return value >= 0 ? `{a|${value}%}` : `{b|${value}%}`
        },
        rich: {
          a: {
            color: '#CEF1F6'
          },
          b: {
            color: '#EF4161'
          }
        }
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
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
