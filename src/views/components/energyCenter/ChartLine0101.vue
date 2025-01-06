<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2025-01-06 14:41:24
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { TIMERANGE } from "./config"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const line = shallowRef()
const lineRef = shallowRef()

const setOptions = () => {
  const option = {
    legend: {
      show: true,
      itemWidth: 10,
      itemHeight: 4,
      itemGap: 20,
      textStyle: {
        color: "#E5FBFF",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: [
        1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008,
        2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020,
        2021, 2022, 2023,
      ],
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 60,
      interval: 20,
      axisLabel: {
        color: "#fff",
        formatter: (value) => {
          return `${value}%`
        },
      },
      splitLine: {
        lineStyle: {
          type: "dashed",
          color: "RGBA(255, 255, 255, .2)",
        },
      },
    },
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: "15%",
    },
    series: [
      {
        name: "全国",
        type: "line",
        itemStyle: {
          color: "#55FFE0",
        },
        data: props.chartData.get("全国"),
      },
      {
        name: "江苏",
        type: "line",
        itemStyle: {
          color: "#FFF426",
        },
        data: props.chartData.get("江苏"),
      },
      {
        name: "浙江",
        type: "line",
        itemStyle: {
          color: "#4888FF",
        },
        data: props.chartData.get("浙江"),
      },
      {
        name: "山东",
        type: "line",
        itemStyle: {
          color: "#26FF47",
        },
        data: props.chartData.get("山东"),
      },
      {
        name: "广东",
        type: "line",
        itemStyle: {
          color: "#FFB526",
        },
        data: props.chartData.get("广东"),
      },
      {
        name: "四川",
        type: "line",
        itemStyle: {
          color: "#55FFE0",
        },
        data: props.chartData.get("四川"),
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}
watch(
  () => props.chartData,
  () => {
    initChart()
  }
)
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
