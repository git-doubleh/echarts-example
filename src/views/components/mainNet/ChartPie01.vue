<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-13 15:36:58
-->
<template>
    <div ref="pieRef" class="pie-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef, computed } from "vue"
import { POWERPIEDATA } from "./config"
const props = defineProps({
  timeSelect: {
    type: Number,
    default: 0,
  },
})
const chartData = computed(() => {
  return [
    {
      value: POWERPIEDATA[props.timeSelect][0],
      name: "原火电出力",
      itemStyle: {
        color: "#147EE1",
      },
    },
    {
      value: POWERPIEDATA[props.timeSelect][1],
      name: "新增800万火电出力",
      itemStyle: {
        color: "#29C2FF",
      },
    },
    {
      value: POWERPIEDATA[props.timeSelect][2],
      name: "受端储能充电",
      itemStyle: {
        color: "#9ED241",
      },
    },
    {
      value: POWERPIEDATA[props.timeSelect][3],
      name: "受端储能放电",
      itemStyle: {
        color: "#FFDA00",
      },
    },
    {
      value: POWERPIEDATA[props.timeSelect][4],
      name: "受端净负荷",
      itemStyle: {
        color: "#AA4DD3",
      },
    },
  ]
})

const pie = shallowRef()
const pieRef = shallowRef()

const setOptions = () => {
  const option = {
    title: {
      text: "万千瓦时",
      textStyle: {
        color: "rgba(255,255,255,0.85)",
        fontSize: 16,
        fontFamily: "PINGFANG",
      },
      right: 0,
    },
    legend: {
      orient: "vertical",
      top: "middle",
      right: 20,
      itemWidth: 7,
      itemHeight: 7,
      icon: "circle",
      itemGap: 20,
      textStyle: {
        rich: {
          a: {
            width: 180,
            color: '#fff'
          },
          b: {
            width: 100,
            color: '#0DFDE0'
          }
        }
      },
      formatter: (name) => {
        const num = chartData.value.find((it) => it.name === name)?.value
        return `{a|${name}}{b|${num}}`
      },
    },
    tooltip: {
      show: true,
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    series: [
      {
        name: "发电信息",
        type: "pie",
        radius: [70, 100],
        center: ["30%", "50%"],
        padAngle: 3,
        label: {
          show: false,
        },
        data: chartData.value,
      },
    ],
  }
  pie.value.setOption(option)
}
const initChart = () => {
  pie.value = echarts.init(pieRef.value)
  setOptions()
}
watch(
  () => props.timeSelect,
  () => {
    initChart()
  }
)
onMounted(() => {
  initChart()
})

</script>
<style lang="scss" scoped>
.pie-box {
  width: 100%;
  height: 200rem;
}
</style>
