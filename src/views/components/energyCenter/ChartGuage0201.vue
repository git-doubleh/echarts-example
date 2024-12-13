<!--
 * @Description: 
 * @Date: 2024-09-20 13:25:58
 * @LastEditTime: 2024-12-11 13:13:31
-->
<template>
    <div class="guage-box">
        <img src="@/assets/images/energyCenter/bg-guage.png" alt="仪表盘">
        <div ref="barRef" class="bar" />
        <span class="detail PANGMEN">
            <CountTo :start-val="0" :end-val="chartData" :duration="3000" />%</span>
        <span v-if="area" class="area f-w500 f-22">{{ area }}</span>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, computed, shallowRef } from "vue"
import { CountTo } from "vue3-count-to"
const props = defineProps({
  chartData: {
    type: Number,
    default: 0,
  },
  area: {
    type: String,
    default: "",
  },
})
const barRef = shallowRef()
const pie = shallowRef()

const setOptions = () => {
  const option = {
    series: [
      {
        type: "gauge",
        center: ["50%", "60%"],
        startAngle: 200,
        endAngle: -20,
        radius: "90%",
        itemStyle: {
          color: "#23DCFF",
        },
        progress: {
          show: true,
          width: 8,
          roundCap: true,
        },
        pointer: {
          show: false,
        },
        axisLine: {
          show: true,
          roundCap: true,
          lineStyle: {
            width: 8,
            color: [[1, "#072C5B"]],
            opacity: 0.6,
          },
        },
        axisTick: {
          show: true,
          distance: -22,
          length: 8,
          lineStyle: {
            color: "#3872C4",
          },
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          show: false,
        },
        data: [
          {
            value: props.chartData,
          },
        ],
      },
    ],
  }
  pie.value.setOption(option, true)
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
  setTimeout(() => {
    initPie()
  }, 100)
})
</script>
<style lang="scss" scoped>
.guage-box {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  img,
  .detail {
    position: absolute;
    left: 50%;
    top: 43%;
    transform: translate(-50%, -50%);
  }
  .bar {
    width: 100%;
    height: 70%;
  }
  .detail {
    @include fillTextColor(linear-gradient(180deg, #f5fcff 0%, #64d3eb 100%));
    font-size: 36rem;
  }
  .area {
    display: inline-block;
    padding: 0 42rem;
    height: 40rem;
    line-height: 40rem;
    margin: 4rem auto 0;
    color: #fff;
    text-align: center;
    background: linear-gradient(
      90deg,
      rgba(17, 73, 185, 0) 0%,
      #1149b9 48%,
      rgba(17, 73, 185, 0) 100%
    );
  }
}
</style>
