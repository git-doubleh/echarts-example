<!--
 * @Description: 
 * @Date: 2024-10-18 13:41:59
 * @LastEditTime: 2025-01-15 14:55:14
-->
<template>
    <PageLayout title="四川新能源出力特性分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc">
                <DescTitle title="研究方法" />
                <div class="desc-content f-22 f-w500">
                    基于全省已投产风电、光伏历史出力数据，构建包括<span
                        class="orange f-w500"
                    >利用小时、保证出力率、有效容量系数</span>等新能源电力、电量特性分析指标体系，对多时空尺度和多运行场景下新能源出力统计特性开展量化分析。
                </div>
            </div>
            <div class="main">
                <div class="left part-pd">
                    <PartSubTitle title="装机容量（万千瓦）" is-fill />
                    <div class="chart-box">
                        <ChartLineBar01 :chart-data="chartLineBarData" />
                    </div>
                    <PartSubTitle title="典型出力曲线-风电" is-fill />
                    <div class="chart-box">
                        <ChartLine0101 :chart-data="chartLineData" />
                    </div>
                    <PartSubTitle title="典型出力曲线-光伏" is-fill />
                    <div class="chart-box2">
                        <ChartLine0102 :chart-data="chartLineData2" />
                    </div>
                </div>
                <div class="middle">
                    <ChartMap :tab-selected-idx="tabSelectedIdx" />
                    <div class="tabs-box">
                        <TabsBtn
                            :tabs="tabs"
                            :tab-selected-idx="tabSelectedIdx"
                            @tab-cb="handleTabClick"
                        />
                    </div>
                    <img src="@/assets/images/newEnergy/bg-map.png" class="bg">
                    <img :src="imgsTab[tabSelectedIdx]" class="img">
                    <div class="text-content">
                        <span class="f-16 f-w500">已开发量
                            <span class="PANGMEN num f-24">
                                <CountTo
                                    :start-val="0"
                                    :end-val="1344"
                                    :decimals="0"
                                    :duration="3000"
                                /> </span></span>
                        <span class="f-16 f-w500">待开发量
                            <span class="PANGMEN num f-24">
                                <CountTo
                                    :start-val="0"
                                    :end-val="26294.9"
                                    :decimals="1"
                                    :duration="3000"
                                /> </span></span>
                    </div>
                </div>
                <div class="right" />
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import DescTitle from "../components/descTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartLineBar01 from "../components/newEnergy/ChartLineBar01.vue"
import ChartLine0101 from "../components/newEnergy/ChartLine0101.vue"
import ChartLine0102 from "../components/newEnergy/ChartLine0102.vue"
import ChartMap from "../components/newEnergy/ChartMap.vue"
import { CountTo } from "vue3-count-to"
import TabsBtn from "../components/TabsBtn.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})

const chartLineBarData = ref()
const chartLineData = ref()
const chartLineData2 = ref()

const tabs = ref(["整体", "光伏", "风电"])
const tabSelectedIdx = ref(0)

const imgsTab = ref([
  new URL("../../assets/images/newEnergy/map-allin.png", import.meta.url).href,
  new URL("../../assets/images/newEnergy/map-light.png", import.meta.url).href,
  new URL("../../assets/images/newEnergy/map-wind.png", import.meta.url).href,
])

const handleTabClick = (idx) => {
  if (idx === tabSelectedIdx.value) return
  tabSelectedIdx.value = idx
}
onMounted(() => {
  setTimeout(() => {
    // 真实数据
    chartLineBarData.value = [
      [134.7, 180.8, 187.5, 191.1, 195.9, 206.2, 573.6],
      [210.5, 252.8, 302.8, 425.9, 527.3, 597, 770.1],
      [345.2, 433.6, 490.3, 617, 723.2, 803.2, 1343.7],
      [3.55, 4.41, 4.95, 6.11, 6.32, 6.26, 10.04],
    ]

    // 典型出力曲线-风电
    chartLineData.value = [
      [
        338.07, 329.34, 326.99, 326.73, 329.73, 335.39, 348.92, 343.32, 349.68,
        338.19, 327.96, 342.44, 333.51, 327.46, 333.33, 343.07, 353.91, 371.09,
        379.06, 385.4, 399.21, 400.16, 414.49, 423.17,
      ],
      [
        428.13, 420.62, 433.94, 422.23, 414.43, 405.35, 386.84, 325.42, 303.46,
        261.11, 239.99, 206.11, 172.24, 159.71, 191.17, 216.11, 245.73, 280.42,
        312.18, 343.45, 363.83, 337.96, 356.72, 358.56,
      ],
      [
        78.41, 75.8, 82.59, 88.1, 51.48, 40.31, 53.18, 49.23, 24.63, 11.46,
        8.98, 6.82, 7.03, 9.33, 14.96, 19, 24.72, 13.79, 8.79, 14.94, 20.36,
        25.1, 25.67, 28.22,
      ],
    ]

    // 典型出力曲线-光伏
    chartLineData2.value = [
      [
        0, 0, 0, 0, 0, 0, 0, 0.44, 29.3, 82.58, 123.95, 150.93, 151.22, 152.56,
        148.61, 139.44, 125.76, 102.27, 60.24, 10.27, 0.09, 0.04, 0.01, 0,
      ],
      [
        0.04, 0, 0, 0, 0, 0, 0, 3.52, 36.55, 78.25, 123.92, 151.89, 152.89,
        158.99, 122.1, 123.01, 101.75, 78.43, 46.43, 12.44, 0.37, 0.37, 0.37,
        0.37,
      ],
      [
        1.23, 1.23, 1.23, 1.23, 1.23, 1.23, 1.23, 1.23, 8.55, 22.21, 37.97,
        52.07, 51.27, 57.72, 54.84, 50.13, 48.76, 34, 14.46, 1.27, 0.24, 0.24,
        0.24, 0.24,
      ],
    ]
  }, 100)
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 30rem 40rem 64rem;
  .desc {
    @include borderImg(url("../../assets/images/newEnergy/bg-border-hor.png"));
    width: 100%;
    height: 190rem;
    padding: 16rem 32rem;
    margin-bottom: 18rem;
    box-sizing: border-box;
    .desc-content {
      margin-top: 16rem;
      color: $font-normal;
      line-height: 44rem;
      letter-spacing: 2px;
      text-align: left;
    }
  }
  .main {
    display: flex;
    .left {
      width: 494rem;
      height: 725rem;
      background: url("@/assets/images/newEnergy/bg-border-ver.png") no-repeat;
      background-size: contain;
      .chart-box {
        height: 200rem;
      }
      .chart-box2 {
        height: 160rem;
      }
    }
    .middle {
      flex: 1;
      position: relative;
      margin: 0 33rem;
      .tabs-box {
        position: absolute;
        top: 16rem;
        right: 0;
        z-index: 4;
      }
      .bg {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
      }
      .img {
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
      }
      .text-content {
        @include flex(column, start, start);
        position: absolute;
        bottom: 0;
        left: 0;
        color: #fff;
        line-height: 28rem;
        z-index: 4;
        &:first-child {
          margin-bottom: 6rem;
        }
        .num {
          margin-left: 22rem;
          @include fillTextColor(
            linear-gradient(180deg, #0dfde0 0%, #1665ff 100%)
          );
        }
      }
    }
    .right {
      width: 494rem;
      height: 725rem;
      background: url("@/assets/images/newEnergy/wind-tree.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
