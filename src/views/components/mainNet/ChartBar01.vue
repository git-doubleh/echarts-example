<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-20 13:25:38
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { SECTIONBARDATA } from "./config"
const props = defineProps({
  timeSelect: {
    type: Number,
    default: 0,
  },
})
const barRef = shallowRef()
const pie = shallowRef()

// 计算当前显示范围内的最大值
const getMax = () => {
  let startIndex = option.dataZoom ? option.dataZoom[0]?.startValue : 0
  let endIndex = option.dataZoom ? option.dataZoom[0]?.endValue : tag.value
  return parseInt(Math.max(...SECTIONBARDATA[props.timeSelect].slice(startIndex, endIndex + 1)))
}

const datayAxis = shallowRef([
  "攀枝花",
  "攀西南环",
  "攀西2",
  "溪向留川",
  "茂县",
  "川渝",
  "康定",
  "攀西北环",
  "木里水洛",
  "川送藏",
  "川藏",
  "金上留电",
])

const tag = ref(5)
let option = {}
let timer: any = null

const autoHighlight = () => {
  clearInterval(timer)
  if (SECTIONBARDATA[props.timeSelect].length <= tag.value) {
    return false
  }
  timer = setInterval(function () {
    if (
      option.dataZoom[0].endValue ===
      SECTIONBARDATA[props.timeSelect].length - 1
    ) {
      option.dataZoom[0].endValue = tag.value - 1
      option.dataZoom[0].startValue = 0
    } else {
      option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1
      option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1
    }
    // 设置Y轴的最大值
    option.xAxis.max = getMax()
    pie.value.setOption(option)
  }, 3000)
}

const setOptions = () => {
  option = {
    title: {
      text: "兆瓦",
      textStyle: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 16,
        fontFamily: "PINGFANG",
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
    },
    grid: {
      top: "10%",
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
        orient: "vertical",
        startValue: 0,
        endValue: tag.value - 1, // 初始显示index
        filterMode: "empty",
      },
    ],
    xAxis: {
      type: "value",
      axisLabel: {
        color: "#fff",
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        lineStyle: {
          color: "transparent", // 虚线颜色
        },
      },
      max: getMax()
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
    series: [
      {
        type: "bar",
        name: "信息",
        barWidth: 20,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#0DFDE0" },
            { offset: 0.2, color: "#0DFDE0" },
            { offset: 1, color: "#1665FF" },
          ]),
        },
        data: SECTIONBARDATA[props.timeSelect],
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
watch(
  () => props.timeSelect,
  () => {
    initPie()
  }
)

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
