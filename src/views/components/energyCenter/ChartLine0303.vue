<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2025-01-06 14:39:25
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { MONTHLOADUSEDPOWER } from "./config"
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
      itemGap: 40,
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
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: [
      {
        type: "value",
        min: 0,
        max: 8000,
        interval: 1600,
        axisLabel: {
          color: "#fff",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "RGBA(255, 255, 255, .2)",
          },
        },
      },
      {
        type: "value",
        min: 0, 
        max: 250,
        interval: 50,
        axisLabel: {
          color: "#fff",
        },
        splitLine: {
          lineStyle: {
            type: "dashed",
            color: "RGBA(255, 255, 255, .2)",
          },
        },
      },
    ],
    grid: {
      top: "15%",
      left: "5%",
      right: "5%",
      bottom: 0,
      containLabel: true,
    },
    series: [
      {
        name: "最大负荷",
        type: "line",
        itemStyle: {
          color: "#FF8A36",
        },
        markArea: {
          data: [
            [
              {
                itemStyle: {
                  color: " rgba(255,94,94,0.24)",
                },
                label: {
                  color: "#FF6646",
                },
                name: "冬高峰",
                xAxis: "1月",
              },
              {
                xAxis: "2月",
              },
            ],
            [
              {
                itemStyle: {
                  color: "rgba(78,240,75,0.24)",
                },
                label: {
                  color: "#44FFB1",
                },
                name: "夏高峰",
                xAxis: "8月",
              },
              {
                xAxis: "9月",
              },
            ],
            [
              {
                itemStyle: {
                  color: " rgba(255,94,94,0.24)",
                },
                label: {
                  color: "#FF6646",
                },
                name: "冬高峰",
                xAxis: "11月",
              },
              {
                xAxis: "12月",
              },
            ],
          ],
        },
        data: MONTHLOADUSEDPOWER.get("最大负荷"),
      },
      {
        name: "用电量",
        type: "line",
        yAxisIndex: 1,
        itemStyle: {
          color: "#44BCFF",
        },
        data: MONTHLOADUSEDPOWER.get("用电量"),
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}
// watch(
//   () => props.chartData,
//   () => {
//     initChart()
//   }
// )
onMounted(() => {
  initChart()
})
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
