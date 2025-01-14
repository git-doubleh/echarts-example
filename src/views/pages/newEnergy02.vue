<!--
 * @Description: 
 * @Date: 2024-10-21 14:07:42
 * @LastEditTime: 2025-01-13 14:32:47
-->
<template>
    <PageLayout title="四川新能源出力特性分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc">
                <DescTitle title="新能源电量特性分析" />
                <div class="desc-content f-22 f-w500">
                    电量方面，对风电、光伏年/月利用小时、有效容量系数等开展特性分析。根据2023年全省实际发电数据分析，我省<span
                        class="orange f-w500"
                    >全年风电年利用小时明显高于光伏</span>，全省新能源发电受季节和气候条件影响较大，风电、光伏发电量呈现<span
                        class="orange f-w500"
                    >丰小枯大</span>的特点，且风电发电量丰枯差异大于光伏发电。研究结果有助于指导全省新能源优化布局。
                </div>
            </div>
            <div class="main">
                <div class="left part-pd">
                    <PartSubTitle title="年利用小时" is-fill />
                    <div class="left-hour">
                        <div class="hour first">
                            <div class="label f-18 f-w500">
                                风电年利用小时
                            </div>
                            <div class="num PANGMEN f-28 f-w500">
                                <CountTo :start-val="0" :end-val="2578" :duration="3000" />
                            </div>
                        </div>
                        <div class="hour second">
                            <div class="label f-18 f-w500">
                                光伏年利用小时
                            </div>
                            <div class="num PANGMEN f-28 f-w500">
                                <CountTo :start-val="0" :end-val="1999" :duration="3000" />
                            </div>
                        </div>
                    </div>
                    <PartSubTitle title="月利用小时" is-fill />
                    <div class="chart-box">
                        <ChartLine0201 :chart-data="chartLineData" />
                    </div>
                </div>

                <div class="right">
                    <div class="part part-pd part-one">
                        <div class="item">
                            <PartSubTitle title="风电8760出力曲线" is-fill />
                            <div class="chart-box3">
                                <ChartLine0202 :chart-data="windData" :mark-data="0.66" />
                            </div>
                            <!-- <img
                                src="@/assets/images/newEnergy/wind-multiline.png"
                                class="chart-box3"
                            > -->
                        </div>
                        <div class="item">
                            <PartSubTitle title="光伏8760出力曲线" is-fill />
                            <!-- <img
                                src="@/assets/images/newEnergy/light-multiline.png"
                                class="chart-box3"
                            > -->
                            <div class="chart-box3">
                                <ChartLine0202 :chart-data="lightData" :mark-data="0.99" />
                            </div>
                        </div>
                    </div>
                    <div class="part part-pd">
                        <PartSubTitle title="2023年新能源月发电量" is-fill />
                        <div class="chart-box2">
                            <ChartBar0201 :chart-data="chartBarData" />
                        </div>

                        <span class="tips tips-wind f-w500 f-16">风电丰枯平发电量占比：0.28:0.18:0.54</span>
                        <span class="tips tips-light f-w500 f-16">光伏丰枯平发电量占比：0.37:0.18:0.45</span>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import DescTitle from "../components/descTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import { CountTo } from "vue3-count-to"
import ChartLine0201 from "../components/newEnergy/ChartLine0201.vue"
import ChartBar0201 from "../components/newEnergy/ChartBar0201.vue"
import ChartLine0202 from "../components/newEnergy/ChartLine0202.vue"
import { OUTWINDDATA, OUTLIGHTDATA } from '../components/newEnergy/config'
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
const chartLineData = ref([])
const chartBarData = ref([])
const windData = ref([])
const lightData = ref([])
onMounted(() => {
  setTimeout(() => {
    // 月利用小时数据
    chartLineData.value = [
      [
        267.11, 292.68, 267.68, 287.74, 254.14, 143.34, 154.85, 76.85, 151.25,
        200.44, 214.93, 267.68,
      ],
      [
        193.7, 169.23, 207.27, 216.31, 199.61, 159.07, 156.4, 141.3, 147.05,
        97.26, 157.24, 155.44,
      ],
    ]

    // 风电出力数据
    windData.value = OUTWINDDATA
    lightData.value = OUTLIGHTDATA
    // 真实数据
    chartBarData.value = [
      {
        name: "风电",
        type: "bar",
        barWidth: 20,
        itemStyle: {
          color: "#1AB3F0",
        },
        data: [
          15.1386821, 16.5854537, 14.9460296, 15.9931547, 13.9871573, 7.7505054,
          8.5044182, 3.8989787, 8.1753343, 10.6904568, 11.5964969, 14.6556754,
        ],
      },
      {
        name: "光伏",
        type: "bar",
        barWidth: 20,
        itemStyle: {
          color: "#4EE78E",
        },
        data: [
          2.1028756, 1.8261527, 2.1340235, 2.0902527, 2.1452382, 1.6704016,
          1.7079114, 1.5438535, 1.7110576, 1.5740294, 1.805804, 1.6967788,
        ],
      },
    ]
  }, 100)
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 40rem 40rem 64rem;
  .desc {
    @include borderImg(url("../../assets/images/newEnergy/bg-border-hor.png"));
    width: 100%;
    height: 192rem;
    padding: 16rem 32rem;
    margin-bottom: 23rem;
    box-sizing: border-box;
    .desc-content {
      margin-top: 13rem;
      color: $font-normal;
      letter-spacing: 2px;
      line-height: 44rem;
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
      .left-hour {
        @include flex();
        margin: 8rem 0 36rem;
        .hour {
          width: 278rem;
          height: 110rem;
          padding: 22rem 0 0 86rem;
          box-sizing: border-box;
          text-align: left;
          .label {
            color: $font-normal;
            line-height: 32rem;
          }
          .num {
            @include fillTextColor();
          }
        }
        .first {
          background: url("@/assets/images/newEnergy/bg-wind.png") no-repeat;
          background-size: contain;
          margin-right: 20rem;
        }
        .second {
          background: url("@/assets/images/newEnergy/bg-light.png") no-repeat;
          background-size: contain;
        }
      }
      .chart-box {
        height: 430rem;
      }
    }
    .right {
      .part {
        @include borderImg(
          url("../../assets/images/newEnergy/bg-border-ver-large.png")
        );
        position: relative;
        width: 1182rem;
        height: 328rem;
        &:first-child {
          margin-bottom: 28rem;
        }
        .chart-box2 {
          height: 238rem;
        }
        .tips {
          position: absolute;
          right: 38rem;
          color: #fff;
          line-height: 28rem;
          letter-spacing: 1px;
        }
        .tips-wind {
          top: 30rem;
        }
        .tips-light {
          top: 60rem;
        }
      }
      .part-one {
        @include flex();
        .item {
          width: 49%;
          .chart-box3 {
            width: 100%;
            height: 250rem;
          }
        }
      }
    }
  }
}
</style>
