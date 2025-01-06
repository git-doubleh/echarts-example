<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2025-01-06 11:02:55
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { ENERYUSEDDEPTH } from "./config"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const barRef = shallowRef()
const pie = shallowRef()
const xAxis = shallowRef([
  "北京",
  "上海",
  "重庆",
  "广东",
  "江苏",
  "福建",
  "湖南",
  "江西",
  "湖北",
  "安徽",
  "海南",
  "浙江",
  "四川",
  "河南",
  "云南",
  "陕西",
  "天津",
  "广西",
  "吉林",
  "贵州",
  "山东",
  "黑龙江",
  "河北",
  "甘肃",
  "山西",
  "辽宁",
  "新疆",
  "内蒙",
  "青海",
  "宁夏",
])

const tag = ref(10)
let option = {}
let timer: any = null

// 计算当前显示范围内的最大值
const getMax = () => {
  let startIndex = option.dataZoom ? option.dataZoom[0]?.startValue : 0
  let endIndex = option.dataZoom ? option.dataZoom[0]?.endValue : tag.value
  let arr = Math.max(
    ...ENERYUSEDDEPTH.map((it) => {
      if (typeof it === "number") {
        return it.toFixed(1)
      }
      return it.value.toFixed(1)
    }).slice(startIndex, endIndex + 1)
  )
  return arr
}

const autoHighlight = () => {
  clearInterval(timer)
  if (ENERYUSEDDEPTH.length <= tag.value) {
    return false
  }
  timer = setInterval(function () {
    if (option.dataZoom[0].endValue === ENERYUSEDDEPTH.length - 1) {
      option.dataZoom[0].endValue = tag.value - 1
      option.dataZoom[0].startValue = 0
    } else {
      option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1
      option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1
    }
    // 设置Y轴的最大值
    option.yAxis.max = getMax()

    pie.value.setOption(option)
  }, 3000)
}
const setOptions = () => {
  option = {
    title: {
      text: "吨标准煤/万元",
      textStyle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
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
    grid: {
      top: "20%",
      left: "5%",
      bottom: "5%",
      right: "5%",
      containLabel: true,
    },
    dataZoom: [
      {
        type: "slider",
        show: false,
        realtime: true,
        // orient: "vertical",
        startValue: 0,
        endValue: tag.value - 1, // 初始显示index
        filterMode: "empty",
      },
    ],
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
      data: xAxis.value,
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
          type: "dashed",
          color: "rgba(255,255,255,0.24)", // 虚线颜色
        },
      },
      max: getMax(),
    },
    series: [
      {
        name: "全国各省能源消费强度",
        type: "bar",
        barWidth: 24,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#44BCFF" },
            { offset: 0.8, color: "#3250E4" },
            { offset: 1, color: "#3250E4" },
          ]),
        },
        data: ENERYUSEDDEPTH,
      },
    ],
  }
  pie.value.setOption(option, true)
  autoHighlight()
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
