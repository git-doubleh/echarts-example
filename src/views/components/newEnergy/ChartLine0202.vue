<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2025-01-13 14:28:44
-->
<template>
    <div ref="lineRef" class="line-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { OUTDATEDATA } from './config'
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
  markData: {
    type: Number,
    default: 0,
  },
})
const line = shallowRef()
const lineRef = shallowRef()

const xDate = ref()

const setOptions = () => {
  const option = {
    title: {
      left: 0,
      text: "出力/装机容量",
      textStyle: {
        color: "#fff",
        fontSize: 12,
        fontFamily: "PINGFANG",
      },
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
    xAxis: {
      type: "category",
      boundaryGap: true,
      axisLabel: {
        color: "#fff",
      },
      data: OUTDATEDATA,
    },
    yAxis: {
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
    grid: {
      top: "15%",
      left: "10%",
      right: "5%",
      bottom: "10%",
    },
    dataZoom: [
      
    ],
    series: [
      {
        name: "新能源8760实际出力",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "#18A4BC",
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "#18A4BC",
            },
            {
              offset: 1,
              color: "#18A4BC",
            },
          ]),
        },
        markLine: {
          symbol: ['none', 'none'],
          data: [
            {
              yAxis: props.markData,
              name: "95%有效容量系数：0.66",
              label: {
                formatter: "95%有效容量系数：{c}%",
              },
            }
          ],
          label: {
            color: "#FFC24B",
            position: "middle",
          },
          lineStyle: {
            color: "#FF2C2C",
          },
        },
        data: props.chartData,
      },
    ],
  }
  line.value.setOption(option)
}
const initChart = () => {
  line.value = echarts.init(lineRef.value)
  setOptions()
}

// 补0
const expandFuc = (num: number) => {
  return num < 10 ? `0${num}` : num
}
// 填充x轴数据
const renderDate = () => {
  let base = +new Date(2023, 0, 1)
  let oneDay = 24 * 3600 * 1000
  let date = []
  // 每天24h
  let j = 0
  for (let i = 1; i < 8760; i++) {
    let now = new Date(base)
    if (j > 23) {
      now = new Date((base += oneDay))
      j = 0
    }
    date.push(
      [
        now.getFullYear(),
        expandFuc(now.getMonth() + 1),
        expandFuc(now.getDate()),
        expandFuc(j),
      ].join("")
    )
    j++
  }
  xDate.value = date
}

watch(
  () => props.chartData,
  () => {
    // renderDate()
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
