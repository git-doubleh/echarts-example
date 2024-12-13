<template>
    <div class="pie-box">
        <img src="@/assets/images/energyCenter/bg-chartpie.png" alt="">
        <div ref="pieRef" class="pie-content" />
        <div class="bg one" />
        <div class="bg two" />
        <div class="bg three" />
        <div class="bg four" />
    </div>
</template>
<script lang="ts" setup>
import * as echarts from "echarts"
import "echarts-gl"
import { ref, onMounted, watch, defineProps, reactive } from "vue"
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
})
const pieRef = ref()
const pie = ref()
const option = ref()

const optionData = reactive([
  {
    name: "第一产业",
    value: 10,
    itemStyle: {
      color: "#0783FA",
    },
  },
  {
    name: "第二产业",
    value: 20,
    itemStyle: {
      color: "#07D2FA",
    },
  },
  {
    name: "第三产业",
    value: 20,
    itemStyle: {
      color: "#20E6A4",
    },
  },
  {
    name: "城乡居民生活",
    value: 30,
    itemStyle: {
      color: "#FFD15C",
    },
  },
])

const fomatFloat = (num, n) => {
  let f = parseFloat(num)
  if (isNaN(f)) {
    return false
  }
  f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n) // n 幂
  let s = f.toString()
  let rs = s.indexOf(".")
  //判定如果是整数，增加小数点再补0
  if (rs < 0) {
    rs = s.length
    s += "."
  }
  while (s.length <= rs + n) {
    s += "0"
  }
  return s
}

//获取3d丙图的最高扇区的高度
const getHeight3D = (series, height) => {
  series.sort((a, b) => {
    return b.pieData.value - a.pieData.value
  })
  return (height * 25) / series[0].pieData.value
}

const getPie3D = (pieData, internalDiameterRatio) => {
  //internalDiameterRatio:透明的空心占比
  let series = []
  let sumValue = 0
  let startValue = 0
  let endValue = 0
  let legendData = []
  let k = 1 - internalDiameterRatio
  pieData.sort((a, b) => {
    return b.value - a.value
  })
  // 为每一个饼图数据，生成一个 series-surface 配置
  for (let i = 0; i < pieData.length; i++) {
    sumValue += pieData[i].value
    let seriesItem = {
      name:
        typeof pieData[i].name === "undefined" ? `series${i}` : pieData[i].name,
      type: "surface",
      parametric: true,
      wireframe: {
        show: false,
      },
      pieData: pieData[i],
      pieStatus: {
        selected: false,
        hovered: false,
        k: k,
      },
    }

    if (typeof pieData[i].itemStyle != "undefined") {
      let itemStyle = {}
      typeof pieData[i].itemStyle.color != "undefined"
        ? (itemStyle.color = pieData[i].itemStyle.color)
        : null
      typeof pieData[i].itemStyle.opacity != "undefined"
        ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
        : null
      seriesItem.itemStyle = itemStyle
    }
    series.push(seriesItem)
  }

  // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
  // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
  legendData = []
  for (let i = 0; i < series.length; i++) {
    endValue = startValue + series[i].pieData.value
    series[i].pieData.startRatio = startValue / sumValue
    series[i].pieData.endRatio = endValue / sumValue
    series[i].parametricEquation = getParametricEquation(
      series[i].pieData.startRatio,
      series[i].pieData.endRatio,
      false,
      false,
      k,
      series[i].pieData.value
    )
    startValue = endValue
    let bfb = fomatFloat(series[i].pieData.value / sumValue, 4)
    legendData.push({
      name: series[i].name,
      total: series[i].pieData.value,
      value: bfb,
    })
  }
  let boxHeight = getHeight3D(series, 15) //通过传参设定3d饼/环的高度，26代表26px
  // 准备待返回的配置项，把准备好的 legendData、series 传入。
  series.push({
    name: "pie2d",
    type: "pie",
    label: {
      opacity: 1,
      position: "outside",
      fontSize: 20,
      formatter: (parmas) => {
        let arr = new Map([
          [0, "a"],
          [1, "b"],
          [2, "c"],
          [3, "d"],
        ])
        let idx = optionData.findIndex((it) => it.name === parmas.name)
        return `{${arr.get(idx)}|${parmas.percent}%}`
      },
      rich: {
        a: {
          color: optionData[0].itemStyle.color,
        },
        b: {
          color: optionData[1].itemStyle.color,
        },
        c: {
          color: optionData[2].itemStyle.color,
        },
        d: {
          color: optionData[3].itemStyle.color,
        },
      },
    },
    labelLine: {
      show: false,
    },
    minAngle: 10,
    startAngle: -50, // 起始角度，支持范围[0, 360]。
    clockwise: false, // 饼图的扇区是否是顺时针排布。上述这两项配置主要是为了对齐3d的样式
    center: ["33%", "60%"],
    data: optionData.map((item) => {
      item.itemStyle.opacity = 0
      return item
    }),
  })
  let option = {
    title: {
      text: "亿千瓦时",
      textStyle: {
        fontSize: 14,
        color: "rgba(255,255,255,0.85)",
        fontFamily: "PINGFANG",
      },
      right: 24,
    },
    tooltip: {
      formatter: (params) => {
        if (
          params.seriesName !== "mouseoutSeries" &&
          params.seriesName !== "pie2d"
        ) {
          let bfb = (
            (option.series[params.seriesIndex].pieData.endRatio -
              option.series[params.seriesIndex].pieData.startRatio) *
            100
          ).toFixed(2)
          return (
            `${params.seriesName}<br/>` +
            `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
            `${option.series[params.seriesIndex].pieData.value}/${bfb}%`
          )
        }
      },
      axisPointer: {
        type: "shadow",
      },
      backgroundColor: "rgba(7, 16, 45, 0.70)",
      borderColor: "#165B82",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      orient: "vertical",
      bottom: "10%",
      right: "10%",
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 30,
      textStyle: {
        color: "#E5FBFF",
      },
      formatter: (name) => {
        const val = optionData.find(it => it.name === name).value
        let str = name.indexOf('生活') > -1 ? '     ' : '          '
        return  `${name}${str}${val}`
      }
    },
    labelLine: {
      show: false,
    },
    label: {
      formatter: "{d}%",
      fontSize: 20,
    },
    xAxis3D: {
      min: -1,
      max: 1,
    },
    yAxis3D: {
      min: -1,
      max: 1,
    },
    zAxis3D: {
      min: -1,
      max: 1,
    },
    grid3D: {
      show: false,
      boxHeight: boxHeight, //圆环的高度
      left: "-20%",
      bottom: 50,
      viewControl: {
        //3d效果可以放大、旋转等，请自己去查看官方配置
        alpha: 25, //角度
        distance: 500, //调整视角到主体的距离，类似调整zoom
        rotateSensitivity: 0, //设置为0无法旋转
        zoomSensitivity: 0, //设置为0无法缩放
        panSensitivity: 0, //设置为0无法平移
        autoRotate: false, //自动旋转
      },
    },
    series: series,
  }

  return option
}

// 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
const getParametricEquation = (
  startRatio,
  endRatio,
  isSelected,
  isHovered,
  k,
  h
) => {
  // 计算
  let midRatio = (startRatio + endRatio) / 2
  let startRadian = startRatio * Math.PI * 2
  let endRadian = endRatio * Math.PI * 2
  let midRadian = midRatio * Math.PI * 2
  // 如果只有一个扇形，则不实现选中效果。
  if (startRatio === 0 && endRatio === 1) {
    isSelected = false
  }
  // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
  k = typeof k !== "undefined" ? k : 1 / 6
  // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
  let offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0
  let offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0
  // 计算高亮效果的放大比例（未高亮，则比例为 1）
  let hoverRate = isHovered ? 1.5 : 1.8
  // 返回曲面参数方程
  return {
    u: {
      min: -Math.PI,
      max: Math.PI * 3,
      step: Math.PI / 32,
    },
    v: {
      min: 0,
      max: Math.PI * 2,
      step: Math.PI / 20,
    },
    x: function (u, v) {
      if (u < startRadian) {
        return (
          offsetX + Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        )
      }
      if (u > endRadian) {
        return (
          offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        )
      }
      return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate
    },
    y: function (u, v) {
      if (u < startRadian) {
        return (
          offsetY + Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
        )
      }
      if (u > endRadian) {
        return (
          offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
        )
      }
      return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate
    },
    z: function (u, v) {
      if (u < -Math.PI * 0.5) {
        return Math.sin(u)
      }
      if (u > Math.PI * 2.5) {
        return Math.sin(u) * h * 0.1
      }
      return Math.sin(v) > 0 ? 1 * h * 0.1 : -1
    },
  }
}

const setOptions = () => {
  option.value = getPie3D(optionData, 0)
  pie.value.setOption(option.value)
}
const initPie = () => {
  if (pieRef.value) {
    pie.value = echarts.init(pieRef.value)
    setOptions()
  }
}
// watch(
//   () => props.chartData,
//   () => {
//     props.chartData.forEach((it, idx) => {
//       optionData[idx].value = +it.value
//     })
//     initPie()
//   }
// )
onMounted(() => {
  setTimeout(() => {
    initPie()
  }, 1200)
})
</script>
<style lang="scss" scoped>
.pie-box {
  position: relative;
  height: 100%;
  img {
    position: absolute;
    left: 7%;
    top: 30%;
    transform: scale(1.2);
  }
  .pie-content {
    height: 100%;
  }
  .bg {
    position: absolute;
    right: 24rem;
    width: 200rem;
    height: 36rem;
    background: linear-gradient(
      0,
      rgba(68, 188, 255, 0.32) 0%,
      rgba(68, 188, 255, 0) 59%
    );
    border-radius: 19rem;
    border-image: linear-gradient(
        360deg,
        rgba(73, 118, 252, 1),
        rgba(73, 118, 252, 0)
      )
      1 1;
  }
  .one {
    bottom: 146rem;
  }
  .two {
    bottom: 105rem;
  }
  .three {
    bottom: 63rem;
  }
  .four {
    bottom: 20rem;
  }
}
</style>
