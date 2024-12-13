<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-10 11:01:38
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import dayjs from "dayjs"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const line = shallowRef()
const lineRef = shallowRef()
const yearList = ref(["2017", "2018", "2019", "2020", "2021", "2022", '2023'])

const setOptions = () => {
  const option = {
    legend: {
      show: true,
      itemWidth: 10,
      itemHeight: 4,
      textStyle: {
        color: "#E5FBFF",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999",
        },
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: yearList.value,
      axisLabel: {
        color: "#fff",
      },
    },
    yAxis: [
      {
        type: "value",
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
    grid: {
      top: "15%",
      left: 0,
      right: '5%',
      bottom: "10%",
      containLabel: true,
    },
    series: [
      {
        name: "光伏装机",
        type: "bar",
        data: props.chartData[0],
        itemStyle: {
          color: "#26C1FF",
        },
        barWidth: 10,
      },
      {
        name: "风电装机",
        type: "bar",
        data: props.chartData[1],
        itemStyle: {
          color: "#47BC78",
        },
        barWidth: 10,
      },
      {
        name: "新能源装机",
        type: "bar",
        data: props.chartData[2],
        itemStyle: {
          color: "#F4D457",
        },
        barWidth: 10,
      },
      {
        name: "新能源占比",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + "%"
          },
        },
        itemStyle: {
          color: "#FFB526",
        },
        data: props.chartData[3],
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
