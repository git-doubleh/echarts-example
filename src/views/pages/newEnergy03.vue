<!--
 * @Description: 
 * @Date: 2024-10-21 14:07:42
 * @LastEditTime: 2025-01-15 10:12:02
-->
<template>
    <PageLayout title="四川新能源出力特性分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc">
                <DescTitle title="新能源电力特性分析" />
                <div class="desc-content f-22 f-w500">
                    电力方面，风电、光伏全年90%保证出力分别为5.26%，0.01%，远低于常规电源；风电、光伏出力丰枯差异较大，丰期风电、光伏平均出力系数分别为0.1973和0.1626，枯期分别为0.3756和0.1973；丰期负荷午高峰时段，风电、光伏平均出力系数为0.1578和0.4816；枯期负荷晚高峰时段，风电、光伏平均出力系数为0.4431和0.0055。
                </div>
            </div>
            <div class="main">
                <div class="left part-pd">
                    <PartSubTitle title="保证出力率" is-fill />
                    <div class="rate-container">
                        <OutPutRate
                            label="风电"
                            color="#29CDFF"
                            :chart-data="[
                                {
                                    value: '5.26',
                                    name: '90%保证出力率',
                                },
                            ]"
                        />
                        <OutPutRate
                            label="光伏"
                            color="#4EE78E"
                            :chart-data="[
                                {
                                    value: '0.01',
                                    name: '90%保证出力率',
                                },
                            ]"
                        />
                    </div>
                    <PartSubTitle title="四川省新能源出力统计特性" is-fill />
                    <OutPutTable />
                </div>

                <div class="right part-pd">
                    <div class="right-nav f-24 YOUSHE">
                        典型场景出力系数
                    </div>
                    <div class="tabs-box">
                        <TabsBtn
                            :tabs="['风电', '光伏']"
                            :tab-selected-idx="tabSelectedIdx"
                            @tab-cb="handleTabClick"
                        />
                    </div>
                    <div class="middle">
                        <div class="side">
                            <PartSubTitle title="最大负荷时刻出力系数" is-fill />
                            <LoadOutPut :result="maxLoadOutPutRender" />
                        </div>
                        <div class="side">
                            <PartSubTitle title="平均负荷时刻出力系数" is-fill />
                            <LoadOutPut :result="averagyLoadOutPutRender" />
                        </div>
                    </div>
                    <PartSubTitle title="峰谷时段出力系数" is-fill />
                    <div class="chart-container">
                        <div class="chart-part chart-full">
                            <div class="chart-title f-18">
                                丰水期
                            </div>
                            <div class="chart-box">
                                <ChartBar0301 :chart-data="periodFullBarDataRender" />
                            </div>
                        </div>
                        <div class="chart-part chart-lack">
                            <div class="chart-title f-18">
                                枯水期
                            </div>
                            <div class="chart-box">
                                <ChartBar0301 :chart-data="periodLackBarDataRender" />
                            </div>
                        </div>
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
import DescTitle from "../components/descTitle.vue"
import OutPutRate from "../components/newEnergy/OutPutRate.vue"
import OutPutTable from "../components/newEnergy/OutPutTable.vue"
import LoadOutPut from "../components/newEnergy/LoadOutPut.vue"
import ChartBar0301 from "../components/newEnergy/ChartBar0301.vue"
import { CountTo } from "vue3-count-to"
import TabsBtn from "../components/TabsBtn.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
const tabSelectedIdx = ref(0)

// 切换tab
const handleTabClick = (idx) => {
  if (idx === tabSelectedIdx.value) return
  tabSelectedIdx.value = idx
}
// 最大负荷时刻出力系数
const maxLoadOutPutList = new Map([
  [
    "wind",
    [
      [
        { name: "最大出力系数", value: 0.31 },
        { name: "最小出力系数", value: 0.01 },
        { name: "平均出力系数", value: 0.19 },
        { name: "10%保证出力系数", value: 0.30 },
        { name: "90%保证出力系数", value: 0.01 },
      ],
      [
        { name: "最大出力系数", value: 0.0 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.0 },
        { name: "10%保证出力系数", value: 0.0 },
        { name: "90%保证出力系数", value: 0.0 },
      ],
    ],
  ],
  [
    "light",
    [
      [
        { name: "最大出力系数", value: 0.67 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.31 },
        { name: "10%保证出力系数", value: 0.61 },
        { name: "90%保证出力系数", value: 0.0 },
      ],
      [
        { name: "最大出力系数", value: 0.0 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.0 },
        { name: "10%保证出力系数", value: 0.0 },
        { name: "90%保证出力系数", value: 0.0 },
      ],
    ],
  ],
])
const maxLoadOutPutRender = computed(() => {
  let tag = tabSelectedIdx.value === 0 ? "wind" : "light"
  return maxLoadOutPutList.get(tag)
})
// 平均负荷时刻出力系数
const averageLoadOutPutList = new Map([
  [
    "wind",
    [
      [
        { name: "最大出力系数", value: 0.65 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.19 },
        { name: "10%保证出力系数", value: 0.38 },
        { name: "90%保证出力系数", value: 0.05 },
      ],
      [
        { name: "最大出力系数", value: 0.76 },
        { name: "最小出力系数", value: 0.01 },
        { name: "平均出力系数", value: 0.38 },
        { name: "10%保证出力系数", value: 0.63 },
        { name: "90%保证出力系数", value: 0.10 },
      ],
    ],
  ],
  [
    "light",
    [
      [
        { name: "最大出力系数", value: 0.73 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.24 },
        { name: "10%保证出力系数", value: 0.50 },
        { name: "90%保证出力系数", value: 0.0 },
      ],
      [
        { name: "最大出力系数", value: 0.86 },
        { name: "最小出力系数", value: 0.0 },
        { name: "平均出力系数", value: 0.41 },
        { name: "10%保证出力系数", value: 0.73 },
        { name: "90%保证出力系数", value: 0.04 },
      ],
    ],
  ],
])
const averagyLoadOutPutRender = computed(() => {
  let tag = tabSelectedIdx.value === 0 ? "wind" : "light"
  return averageLoadOutPutList.get(tag)
})

const periodFullBarData = new Map([
  [
    "wind",
    [
      {
        name: "最大出力系数",
        type: "bar",
        itemStyle: {
          color: "#FFBE28",
        },
        data: [0.54, 0.61, 0.64],
      },
      {
        name: "平均出力系数",
        type: "bar",
        itemStyle: {
          color: "#2390F6",
        },
        data: [0.16, 0.21, 0.22],
      },
      {
        name: "最小出力系数",
        type: "bar",
        itemStyle: {
          color: "#82F01A",
        },
        data: [0.00, 0.01, 0.01],
      },
      {
        name: "10%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#36CCFA",
        },
        data: [0.36, 0.41, 0.43],
      },
      {
        name: "90%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#F0F01A",
        },
        data: [0.02, 0.05, 0.05],
      },
    ],
  ],
  [
    "light",
    [
      {
        name: "最大出力系数",
        type: "bar",
        itemStyle: {
          color: "#FFBE28",
        },
        data: [0.81, 0.11, 0.0],
      },
      {
        name: "平均出力系数",
        type: "bar",
        itemStyle: {
          color: "#2390F6",
        },
        data: [0.48, 0.01, 0.0],
      },
      {
        name: "最小出力系数",
        type: "bar",
        itemStyle: {
          color: "#82F01A",
        },
        data: [0.18, 0.0, 0.0],
      },
      {
        name: "10%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#36CCFA",
        },
        data: [0.66, 0.06, 0.0],
      },
      {
        name: "90%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#F0F01A",
        },
        data: [0.31, 0.0, 0.0],
      },
    ],
  ],
])
const periodFullBarDataRender = computed(() => {
  let tag = tabSelectedIdx.value === 0 ? "wind" : "light"
  return periodFullBarData.get(tag)
})
const periodLackBarData = new Map([
  [
    "wind",
    [
      {
        name: "最大出力系数",
        type: "bar",
        itemStyle: {
          color: "#FFBE28",
        },
        data: [0.72, 0.77, 0.72],
      },
      {
        name: "平均出力系数",
        type: "bar",
        itemStyle: {
          color: "#2390F6",
        },
        data: [0.31, 0.44, 0.39],
      },
      {
        name: "最小出力系数",
        type: "bar",
        itemStyle: {
          color: "#82F01A",
        },
        data: [0.0, 0.04, 0.03],
      },
      {
        name: "10%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#36CCFA",
        },
        data: [0.56, 0.68, 0.63],
      },
      {
        name: "90%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#F0F01A",
        },
        data: [0.06, 0.17, 0.12],
      },
    ],
  ],
  [
    "light",
    [
      {
        name: "最大出力系数",
        type: "bar",
        itemStyle: {
          color: "#FFBE28",
        },
        data: [0.86, 0.09, 0.0],
      },
      {
        name: "平均出力系数",
        type: "bar",
        itemStyle: {
          color: "#2390F6",
        },
        data: [0.62, 0.01, 0.0],
      },
      {
        name: "最小出力系数",
        type: "bar",
        itemStyle: {
          color: "#82F01A",
        },
        data: [0.17, 0.0, 0.0],
      },
      {
        name: "10%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#36CCFA",
        },
        data: [0.76, 0.22, 0.0],
      },
      {
        name: "90%保证出力系数",
        type: "bar",
        itemStyle: {
          color: "#F0F01A",
        },
        data: [0.45, 0.0, 0.0],
      },
    ],
  ],
])
const periodLackBarDataRender = computed(() => {
  let tag = tabSelectedIdx.value === 0 ? "wind" : "light"
  return periodLackBarData.get(tag)
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 40rem 40rem 64rem;
  .desc {
    @include borderImg(url("../../assets/images/newEnergy/bg-border-hor.png"));
    width: 100%;
    height: 205rem;
    padding: 16rem 32rem;
    margin-bottom: 23rem;
    box-sizing: border-box;
    .desc-content {
      margin-top: 13rem;
      letter-spacing: 2px;
      color: $font-normal;
      line-height: 36rem;
      text-align: left;
    }
  }
  .main {
    @include flex(row, space-between);
    .left {
      @include borderImg(
        url("../../assets/images/newEnergy/bg-border-ver.png")
      );
      width: 628rem;
      height: 682rem;
      .rate-container {
        @include flex(row, center);
        position: relative;
        &::after{
          display: block;
          content: '';
          position: absolute;
          left: 50%;
          width: 0;
          height: 194rem;
          border-left: 1px dashed #36A6DA;
        }
      }
    }
    .right {
      @include borderImg(
        url("../../assets/images/newEnergy/bg-border-ver-large.png")
      );
      position: relative;
      width: 1182rem;
      height: 682rem;
      .right-nav {
        width: 396rem;
        height: 63rem;
        margin: 0 auto 16rem;
        line-height: 50rem;
        text-align: center;
        color: $font-normal;
        letter-spacing: 2px;
        background: url("@/assets/images/newEnergy/bg-nav.png") no-repeat;
        background-size: contain;
      }
      .tabs-box {
        position: absolute;
        right: 24rem;
        top: 32rem;
      }
      .middle {
        @include flex();
        margin-bottom: 24rem;
        .side {
          width: 556rem;
        }
      }
      .chart-container {
        @include flex();
        .chart-part {
          width: 48%;
          .chart-title {
            width: 188rem;
            height: 34rem;
            margin: 0 auto 10rem;
            text-align: center;
            line-height: 34rem;
            background: linear-gradient(
              90deg,
              rgba(17, 73, 185, 0) 0%,
              #1149b9 48%,
              rgba(17, 73, 185, 0) 100%
            );
            color: #fff;
          }
          .chart-box {
            width: 100%;
            height: 210rem;
          }
        }
      }
    }
  }
}
</style>
