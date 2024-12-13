<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-13 15:18:40
-->
<template>
    <div class="pie-box">
        <div class="mask">
            <span class="tag tag1 f-w500 f-16">双江口投产前</span>
            <span class="tag tag2 f-w500 f-16">双江口投产后</span>
            <span class="num num1 f-w500">{{
                props.chartData.length && props.chartData[0].reduce((o, n) => o + +n.value, 0)
            }}</span>
            <span class="num num2 f-w500">{{
                props.chartData.length && props.chartData[1].reduce((o, n) => o + +n.value, 0)
            }}</span>
        </div>
        <div ref="pieRef" class="pie" />
    </div>
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
    legend: {
      show: true,
      top: "bottom",
      itemWidth: 14,
      itemHeight: 6,
      itemGap: 30,
      textStyle: {
        color: "#fff",
      },
    },
    grid: {
      bottom: 0,
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
        center: ["25%", "50%"],
        // roseType: "area",
        label: {
          textStyle: {
            color: "#fff",
          },
          formatter: (parmas) => {
            return `${parmas.percent}%`
          },
        },
        data: props.chartData[0],
      },
      {
        name: "双江口投产后",
        type: "pie",
        radius: [50, 70],
        center: ["75%", "50%"],
        // roseType: "area",
        label: {
          textStyle: {
            color: "#fff",
          },
          formatter: (parmas) => {
            return `${parmas.percent}%`
          },
        },
        data: props.chartData[1],
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
  position: relative;
  width: 100%;
  height: 230rem;
  .pie {
    width: 100%;
    height: 100%;
  }
  .mask {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    .tag {
      position: absolute;
      top: 0;
      width: 138rem;
      height: 36rem;
      line-height: 36rem;
      text-align: center;
      color: $font-normal;
    }
    .tag1 {
      left: 115rem;
      background: #173f70;
    }
    .tag2 {
      right: 120rem;
      background: linear-gradient(119deg, #f3ad25 0%, #99422d 100%);
    }
    .num {
      color: #fff;
      font-size: 28rem;
    }
    .num1 {
      position: absolute;
      top: 45%;
      left: 155rem;
    }
    .num2 {
      position: absolute;
      top: 45%;
      right: 141rem;
    }
  }
}
</style>
