<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2025-01-06 10:33:41
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { ENERGYUSEDTOTAL } from "./config"
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
      data: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
    },
    yAxis: [
      {
        name: '万吨标准煤',
        nameTextStyle: {
          color: 'rgba(255,255,255,0.85)'
        },
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
      {
        name: '吨标准煤/万元',
        nameTextStyle: {
          color: 'rgba(255,255,255,0.85)'
        },
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
    ],
    series: [
      {
        name: "能源消费总量",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#4DC1FF",
        },
        data: ENERGYUSEDTOTAL.get("总量"),
      },
      {
        name: "能源消费强度",
        type: "bar",
        barWidth: 16,
        yAxisIndex: 1,
        itemStyle: {
          color: "#FFB54D",
        },
        data: ENERGYUSEDTOTAL.get("强度"),
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
