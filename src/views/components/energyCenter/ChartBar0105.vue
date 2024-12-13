<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-11 13:25:21
-->
<template>
    <div ref="barRef" class="bar" />
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
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
    grid: {
      top: "10%",
      left: "5%",
      bottom: "20%",
      right: "5%",
    },
    xAxis: {
      type: "category",
      axisLabel: {
        interval: 0,
        color: "#fff",
        width: 17,
        overflow: 'break'
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
      data: [
        "上海",
        "北京",
        "天津",
        "浙江",
        "江苏",
        "广东",
        "福建",
        "重庆",
        "山东",
        "湖北",
        "陕西",
        "山西",
        "江西",
        "安徽",
        "辽宁",
        "内蒙",
        "河南",
        "宁夏",
        "湖南",
        "四川",
        "河北",
        "青海",
        "新疆",
        "西藏",
        "吉林",
        "海南",
        "贵州",
        "云南",
        "广西",
        "黑龙江",
        "甘肃",
      ],
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
    },
    series: [
      {
        name: "人均消费性支出",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#1FAEFF",
        },
        data: props.chartData,
        markLine: {
          symbol: ["none", "none"],
          data: [
            {
              yAxis: 0.94,
              name: "全国平均水平0.94",
              label: {
                formatter: "全国平均\n水平{c}",
              },
            },
          ],
          label: {
            position: 'insideEndTop',
            color: "#EF4161",
          },
          lineStyle: {
            color: "#E83232",
          },
        },
      },
    ],
  }
  pie.value.setOption(option, true)
}
const initPie = () => {
  pie.value = echarts.init(barRef.value)
  setOptions()
}
watch(
  () => props.chartData,
  () => {
    initPie()
  }
)
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 100%;
}
</style>
