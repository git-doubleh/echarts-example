<!--
 * @Description: 
 * @Date: 2024-09-23 15:34:24
 * @LastEditTime: 2024-12-06 09:20:11
-->
<template>
    <div ref="lineRef" class="line-box" />
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
const line = shallowRef()
const lineRef = shallowRef()

const setOptions = () => {
  const option = {
    title: {
      text: "万千瓦",
      textStyle: {
        color: "rgba(255, 255, 255, 0.85)",
        fontSize: 14,
        fontFamily: "PINGFANG",
      },
      left: -5,
    },
    legend: {
      show: true,
      itemWidth: 10,
      itemHeight: 4,
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
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
      boundaryGap: false,
      data: [
        "0:00",
        "1:00",
        "2:00",
        "3:00",
        "4:00",
        "5:00",
        "6:00",
        "7:00",
        "8:00",
        "9:00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
        "23:00",
      ],
      axisLabel: {
        color: "#fff",
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
      right: "3%",
      left: "8%",
      bottom: "10%",
    },
    series: [
      {
        name: "抽蓄储能",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#419DDA",
        },
        itemStyle: {
          color: "#419DDA",
        },
        data: [
          170.6, 7.3, 1.3, -0.4, -0.4, -0.5, -0.5, -65.2, -498.6, -415.4,
          -1050.8, -10.9, -67.7, -76.3, -3.3, -46.5, -13.3, -0.5, 0.7, 3.1,
          32.2, 661.2, 610.8, 271.7,
        ],
      },
      {
        name: "水电基荷",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#A5A5A5",
        },
        itemStyle: {
          color: "#A5A5A5",
        },
        data: [
          8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9,
          8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9,
          8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9, 8775.9,
        ],
      },
      {
        name: "煤电基荷",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#FFBD00",
        },
        itemStyle: {
          color: "#FFBD00",
        },
        data: [
          2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2,
          2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2,
          2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2, 2213.2,
        ],
      },
      {
        name: "气电基荷",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#3373CA",
        },
        itemStyle: {
          color: "#3373CA",
        },
        data: [
          360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3,
          360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3, 360.3,
          360.3, 360.3, 360.3, 360.3,
        ],
      },
      {
        name: "煤电调峰",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#5DAF31",
        },
        itemStyle: {
          color: "#5DAF31",
        },
        data: [
          782.5, 718.3, 669.8, 497.7, 384.2, 286.7, 262.6, 68.4, 0, 135.1, 287,
          293.7, 323.8, 497.9, 454.9, 495.5, 484.7, 651, 886.2, 859.8, 926.8,
          978.7, 977.6, 973,
        ],
      },
      {
        name: "气电调峰",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#006095",
        },
        itemStyle: {
          color: "#006095",
        },
        data: [
          373.8, 293.6, 248.9, 198.6, 168.9, 130.4, 120.1, 39.9, 0, 84.9, 137.5,
          140.3, 146.5, 217.4, 205.8, 204.8, 223.3, 326.6, 420.4, 468.7, 530.2,
          530.9, 518, 562,
        ],
      },
      {
        name: "水电调峰",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#D88921",
        },
        itemStyle: {
          color: "#D88921",
        },
        data: [
          1380.5, 1211.5, 1086.5, 827.6, 673.9, 523.1, 439.7, 149.2, 36.1, 0,
          211.4, 278.4, 291.3, 482, 497.4, 371.4, 656.1, 1071.9, 1413.9, 1425.1,
          1569.9, 1689.3, 1702.6, 1663.9,
        ],
      },
      {
        name: "光热调峰",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#626263",
        },
        itemStyle: {
          color: "#626263",
        },
        data: [
          0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
          0,
        ],
      },
      {
        name: "风电",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#9F7100",
        },
        itemStyle: {
          color: "#9F7100",
        },
        data: [
          669.7, 476.3, 148.1, 348.5, 184.7, 100.1, 131, 112.7, 75, 75.9, 33.4,
          17.8, 15.7, 16.3, 16, 18.1, 20.5, 21.8, 25, 42.5, 73.1, 68.9, 61.6,
          59.8,
        ],
      },
      {
        name: "光伏",
        type: "line",
        stack: "Total",
        showSymbol: false,
        lineStyle: {
          opacity: 0,
        },
        areaStyle: {
          color: "#1A457C",
        },
        itemStyle: {
          color: "#1A457C",
        },
        data: [
          0.1, 0.1, 0.1, 0, 0, 0.1, 0.1, 618.2, 1909.5, 3192.6, 4037.4, 3411.1,
          3697.7, 3729.5, 3335.5, 3546.9, 2878.6, 1907.8, 830.3, 317.3, 0.4,
          0.4, 0.4, 0.4,
        ],
      },
      {
        name: "负荷需求",
        type: "line",
        stack: "Total",
        showSymbol: false,
        // areaStyle: {
        //   color: "#88F258",
        // },
        itemStyle: {
          color: "#88F258",
        },
        data: [
          14731.7, 14055.5, 13503.4, 13012.5, 12665, 12380.5, 12293.7, 12263.8,
          12850.9, 14211.4, 14336.9, 15117.8, 15296.2, 15760.4, 15704.3,
          15519.9, 15345.7, 15325.6, 14925.8, 14521.9, 14559.2, 15394.5,
          15345.4, 14949.1,
        ],
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
.line-box {
  width: 100%;
  height: 100%;
}
</style>
