<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-13 15:14:01
-->
<template>
    <div ref="pieRef" class="pie-box" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const pie = shallowRef()
const pieRef = shallowRef()

const setOptions = () => {
  const option = {
    title: {
      text: props.chartData.reduce((o, n) =>  o + +n.value, 0),
      textStyle: {
        color: "rgba(255, 255, 255, 0.85)",
        fontSize: 28,
        fontFamily: 'PINGFANG'
      },
      left: '25%',
      top: '43%'
    },
    legend: {
      show: true,
      orient: 'vertical',
      top: 'middle',
      right: 100,
      itemWidth: 14,
      itemHeight: 6,
      itemGap: 20,
      textStyle: {
        color: "#fff",
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
        name: "双江口投产前",
        type: "pie",
        radius: [50, 70],
        center: ["30%", "50%"],
        label: {
            textStyle: {
                color: '#fff'
            },
            formatter: (parmas) => {
              return `${parmas.percent}%`
            }
        },
        data: props.chartData
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
  () => props.chartData,
  () => {
    initChart()
  }
)
</script>
<style lang="scss" scoped>
.pie-box {
  width: 100%;
  height: 200rem;
}
</style>
