<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-10 14:02:38
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { SOCIETYUSEDPOWERDATA } from './config'
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const line = shallowRef()
const lineRef = shallowRef()
const yearList = ref(["2016" ,"2017", "2018", "2019", "2020", "2021", "2022", '2023'])

const setOptions = () => {
  const option = {
    title: {
      text: "亿千瓦时",
      textStyle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
        fontFamily: "PINGFANG",
      },
      right: 16,
    },
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
      top: "20%",
      left: '5%',
      right: '5%',
      bottom: "5%",
      containLabel: true,
    },
    series: [
      {
        name: "全社会用电量",
        type: "bar",
        data: SOCIETYUSEDPOWERDATA.get('社会'),
        itemStyle: {
          color: "#4DC1FF",
        },
        barWidth: 24,
      },
      {
        name: "增速",
        type: "line",
        yAxisIndex: 1,
        tooltip: {
          valueFormatter: function (value) {
            return value + "%"
          },
        },
        itemStyle: {
          color: "#FFF426",
        },
        data: SOCIETYUSEDPOWERDATA.get('增速'),
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
  setTimeout(() => {
    initChart()
  }, 200)
})
</script>
<style lang="scss" scoped>
.line-box {
  width: 100%;
  height: 100%;
}
</style>
