<!--
 * @Description: 
 * @Date: 2024-10-22 16:01:52
 * @LastEditTime: 2025-01-14 17:27:28
-->
<template>
    <PageLayout title="电动汽车发展分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="part-one">
                <div class="left part">
                    <div class="text f-18 f-w500">
                        调研收集全省各类电动汽车充电桩的基础档案和充电负荷曲线，研究电动汽车<span
                            class="orange f-w500"
                        >充电负荷特性</span>及<span class="orange f-w500">大规模接入</span>对配电网的影响，并探索<span
                            class="orange f-w500"
                        >有序充电、V2G</span>等模式的应用潜力，为电动汽车产业高质量发展提供支撑。
                    </div>
                    <div class="svg" />
                </div>
                <div class="right part">
                    <span class="part-title YOUSHE f-24">电动汽车保有量变化趋势</span>
                    <div class="text f-18 f-w500">
                        到2030年四川省电动替代水平大幅提升，新能源汽车市场渗透率达到全国平均水平，预计
                        2030 年全省电动汽车保有量将突破450万辆，预计 2030
                        年成都市电动汽车保有量达190万辆。
                    </div>
                    <span class="tag right-tag">四川省</span>
                    <div class="chart-bar">
                        <ChartBar01 :chart-data="chartBarData" />
                    </div>
                </div>
            </div>
            <div class="middle part">
                <span class="part-title YOUSHE f-24">充电负荷曲线</span>
                <div class="main">
                    <div class="text-box f-16 f-w500">
                        <div class="text">
                            公用充电桩在各种场景下充电负荷呈较为规律的波浪型,专用桩充电负荷总体趋势呈“W”型,私家车主要集中在晚上23
                            点至次日6点,充电负荷总体趋势呈白低晚高的“U”型。
                        </div>
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">公用桩</span>
                        <img src="@/assets/images/assignNet/charge-public.png" class="chart-main">
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">专用桩</span>
                        <img src="@/assets/images/assignNet/charge-only.png" class="chart-main">
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">私用桩</span>
                        <img src="@/assets/images/assignNet/charge-private.png" class="chart-main">
                    </div>
                </div>
            </div>
            <div class="bottom part">
                <span class="part-title YOUSHE f-24">丰大四川电网负荷变化情况</span>
                <div class="main">
                    <div class="text-box f-16 f-w500">
                        <div class="text">
                            在无序充电情况下，电网的利用效率会降低:在电价引导、有序充电、V2G
                            三类引导场景下，电网的利用效率会明显提升。
                        </div>
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">电价引导场景</span>
                        <img src="@/assets/images/assignNet/v2g.png" class="chart-main">
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">有序充电场景</span>
                        <img src="@/assets/images/assignNet/v2g.png" class="chart-main">
                    </div>
                    <div class="chart-box">
                        <span class="tag chart-tag">V2G场景</span>
                        <img src="@/assets/images/assignNet/v2g.png" class="chart-main">
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartBar01 from "../components/assignNetwork/ChartBar01.vue"
import ChartLine01 from "../components/assignNetwork/ChartLine01.vue"
import ChartLine02 from "../components/assignNetwork/ChartLine02.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
// 堆叠柱状图数据
const chartBarData = ref([
  {
    name: "社会专用车",
    type: "bar",
    stack: "car",
    emphasis: {
      focus: "series",
    },
    itemStyle: {
      color: "#B8E82D",
    },
    data: [20, 20, 20, 25, 27, 29, 31, 40, 42, 50, 60, 70, 78, 88, 95, 110],
  },
  {
    name: "私家车",
    type: "bar",
    stack: "car",
    emphasis: {
      focus: "series",
    },
    itemStyle: {
      color: "#26D8FF",
    },
    data: [
      20, 24, 33, 33, 42, 45, 58, 82, 90, 98, 130, 180, 200, 218, 260, 290,
    ],
  },
  {
    name: "公用车",
    type: "bar",
    stack: "car",
    emphasis: {
      focus: "series",
    },
    itemStyle: {
      color: "#2376F2",
    },
    data: [
      20, 30, 34, 42, 48, 58, 82, 110, 130, 150, 190, 250, 280, 310, 400, 480,
    ],
  },
])
</script>
<style lang="scss" scoped>
.page-content {
  padding: 24rem 40rem 40rem;

  .tag {
    width: 158rem;
    height: 28rem;
    line-height: 28rem;
    text-align: center;
    color: $font-normal;
    background: url("@/assets/images/assignNet/bg-tag.png") no-repeat;
    background-size: contain;
  }
  .part {
    padding: 22rem 29rem 0;
    box-sizing: border-box;
    .part-title {
      @include fillTextColor();
      line-height: 28rem;
      padding-left: 13rem;
    }
  }
  .part-one {
    @include flex();
    margin-bottom: 15rem;
    .left {
      width: 618rem;
      height: 309rem;
      margin-right: 24rem;
      padding-right: 20rem;
      background: url("@/assets/images/assignNet/bg-car-desc.png") no-repeat;
      background-size: contain;
      color: #fff;
      .text {
        margin-top: 37rem;
        line-height: 28rem;
        letter-spacing: 2px;
      }
      .svg {
        width: 492rem;
        height: 115rem;
        background: url("@/assets/icons/assignnet-car-desc.svg") no-repeat;
        background-size: contain;
        margin: 0 auto;
      }
    }
    .right {
      position: relative;
      flex: 1;
      height: 309rem;
      background: url("@/assets/images/assignNet/bg-part-1198.png") no-repeat;
      background-size: contain;
      .text {
        position: absolute;
        top: 120rem;
        left: 60rem;
        width: 467rem;
        color: #62fffc;
        letter-spacing: 2px;
        line-height: 32rem;
      }
      .right-tag {
        position: absolute;
        top: 39rem;
        right: 236rem;
      }
      .chart-bar {
        position: absolute;
        right: 40rem;
        bottom: 10rem;
        width: 560rem;
        height: 200rem;
      }
    }
  }
  .middle {
    height: 305rem;
    margin-bottom: 16rem;
    background: url("@/assets/images/assignNet/bg-part-1840.png") no-repeat;
    background-size: contain;
  }
  .main {
    @include flex();
    height: 240rem;
    .text-box {
      flex: 1;
      height: 100%;
      @include flex(row, center, center);
      .text {
        width: 368rem;
        padding-top: 20rem;
        color: #62fffc;
        line-height: 32rem;
        letter-spacing: 2px;
      }
    }
    .chart-box {
      position: relative;
      flex: 1;
      padding-top: 30rem;
      height: 100%;
      box-sizing: border-box;
      .chart-tag {
        position: absolute;
        top: -20rem;
        left: 50%;
        transform: translateX(-50%);
      }
      .chart-main {
        width: 100%;
        height: 100%;
      }
    }
  }
  .bottom {
    height: 305rem;
    background: url("@/assets/images/assignNet/bg-part-1840-s.png") no-repeat;
    background-size: contain;
    .text {
      padding-top: 0 !important;
    }
  }
}
</style>
