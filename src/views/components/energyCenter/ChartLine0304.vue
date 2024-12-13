<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-13 15:11:29
-->
<template>
    <div class="container">
        <div ref="lineRef" class="line-box" />
        <span class="text first">电价谷段</span>
        <span class="text second">电价峰段</span>
        <span class="text third">电价平段</span>
        <span class="text fourth">电价峰段</span>
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import { ref, onMounted, defineProps, watch, shallowRef } from "vue"
import { DAYLOADLINEDATA } from "./config"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const line = shallowRef()
const lineRef = shallowRef()

const setOptions = () => {
  const option = {
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
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    xAxis: {
      type: "category",
      data: [
        "0时",
        "1时",
        "2时",
        "3时",
        "4时",
        "5时",
        "6时",
        "7时",
        "8时",
        "9时",
        "10时",
        "11时",
        "12时",
        "13时",
        "14时",
        "15时",
        "16时",
        "17时",
        "18时",
        "19时",
        "20时",
        "21时",
        "22时",
        "23时",
      ],
      axisLabel: {
        color: "#fff",
      },
      axisTick: {
        show: false,
      },
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
      left: "2%",
      right: "5%",
      bottom: 0,
      containLabel: true,
    },
    series: [
      {
        name: "夏天",
        type: "line",
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: "#4BFF8D",
        },
        markArea: {
          data: [
            [
              {
                itemStyle: {
                  color: "rgba(43,52,111,0.24)",
                },
                name: "",
                x: "0%",
              },
              {
                x: "35%",
              },
            ],
            [
              {
                itemStyle: {
                  color: " rgba(255,94,94,0.24)",
                },
                label: {
                  color: "#FF6646",
                },
                name: "",
                x: "35%",
              },
              {
                x: "50%",
              },
            ],
            [
              {
                itemStyle: {
                  color: "rgba(78,240,75,0.24)",
                },
                label: {
                  color: "#FFC24B",
                },
                name: "负荷午高峰",
                x: "50%",
              },
              {
                x: "80%",
              },
            ],
            [
              {
                itemStyle: {
                  color: " rgba(255,94,94,0.24)",
                },
                label: {
                  color: "#FF6646",
                },
                name: "负荷晚高峰",
                x: "80%",
              },
              {
                x: "95%",
              },
            ],
          ],
        },
        markLine: {
          symbol: ["none", "none"],
          label: { show: false },
          data: [
            {
              xAxis: "12时",
              lineStyle: {
                color: "#FFC24B",
                dashOffset: 5,
                type: [5, 5],
              },
            },
            {
              xAxis: "18时",
              lineStyle: {
                color: "#FFC24B",
                dashOffset: 5,
                type: [5, 5],
              },
            },
            {
              xAxis: "21时",
              lineStyle: {
                color: "#FF6646",
                dashOffset: 5,
                type: [5, 5],
              },
            },
            {
              xAxis: "22时",
              lineStyle: {
                color: "#FF6646",
                dashOffset: 5,
                type: [5, 5],
              },
            },
          ],
        },
        data: DAYLOADLINEDATA.get("夏天"),
      },
      {
        name: "冬天",
        type: "line",
        smooth: true,
        showSymbol: false,
        itemStyle: {
          color: "#4980FF",
        },
        data: DAYLOADLINEDATA.get("冬天"),
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
  initChart()
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
  .line-box {
    width: 100%;
    height: 100%;
  }
  .text {
    @include fillTextColor(linear-gradient(180deg, #F5FCFF 0%, #64D3EB 100%));
    position: absolute;
    bottom: 25rem;
    font-size: 14px;
    font-weight: 500;
  }
  .first {
    left: 152rem;
  }
  .second {
    left: 360rem;
  }
  .third {
    right: 280rem;
  }
  .fourth {
    right: 80rem;
  }
}
</style>
