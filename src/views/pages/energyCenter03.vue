<!--
 * @Description: 
 * @Date: 2024-10-25 10:01:27
 * @LastEditTime: 2025-01-06 14:08:21
-->
<template>
    <PageLayout title="四川用电负荷特性分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc-box f-w500 f-22">
                2023年，四川全社会最大用电负荷6107万千瓦，近五年用电负荷年均增速超过10%，电网最大峰谷差1985万千瓦，95%尖峰负荷持续时间超过100小时且逐年增加。年内和日内负荷均具有“双高峰”特性。年内方面，四川电网最大负荷与气温呈高度相关性，丰枯期用电量水平基本相当（5:5）。日内方面，用电高峰负荷平台化特征显著，午高峰持续时间12时~18时，负荷和电价峰谷时段不匹配。
            </div>
            <div class="middle">
                <BgBorder title="最大最小负荷" width="600rem" height="313rem">
                    <div class="part-box">
                        <div class="part-left">
                            <p class="text f-16 f-w500">
                                最大用电负荷
                            </p>
                            <p class="text f-16 f-w500">
                                年均增速
                            </p>
                            <div class="pie-box">
                                <ChartGuage0301 :chart-data="8.80" />
                            </div>
                        </div>
                        <div class="part-chart">
                            <ChartLine0301 />
                        </div>
                    </div>
                </BgBorder>
                <BgBorder title="尖峰负荷持续时间" width="600rem" height="313rem">
                    <div class="chart-box">
                        <ChartLine0302 />
                    </div>
                </BgBorder>
                <BgBorder title="最大峰谷差" width="600rem" height="313rem">
                    <div class="chart-box">
                        <ChartBar0301 />
                    </div>
                </BgBorder>
            </div>
            <div class="bottom">
                <BgBorder
                    title="分月最大负荷及用电量示意图"
                    size="large"
                    width="910rem"
                    height="365rem"
                    padding-top="30rem"
                >
                    <div class="chart-box">
                        <ChartLine0303 />
                    </div>
                </BgBorder>
                <BgBorder
                    title="最大负荷日负荷曲线示意图"
                    size="large"
                    width="910rem"
                    height="365rem"
                    padding-top="30rem"
                >
                    <div class="chart-box">
                        <ChartLine0304 />
                    </div>
                </BgBorder>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import BgBorder from "../components/energyCenter/BgBorder.vue"
import ChartGuage0301 from "../components/energyCenter/ChartGuage0301.vue"
import ChartLine0301 from "../components/energyCenter/ChartLine0301.vue"
import ChartLine0302 from "../components/energyCenter/ChartLine0302.vue"
import ChartBar0301 from "../components/energyCenter/ChartBar0301.vue"
import ChartLine0303 from "../components/energyCenter/ChartLine0303.vue"
import ChartLine0304 from "../components/energyCenter/ChartLine0304.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 28rem 40rem 50rem;
  .desc-box {
    @include borderImg(url("@/assets/images/energyCenter/bg-desc.png"));
    width: 100%;
    height: 203rem;
    padding: 36rem 52rem 36rem 58rem;
    color: $font-normal;
    line-height: 44rem;
    box-sizing: border-box;
  }
  .middle {
    margin: 25rem 0 20rem;
    @include flex(row, space-between);
    .part-box {
      display: flex;
      padding: 26rem 0 0 16rem;
      box-sizing: border-box;
      .part-left {
        width: 147rem;
        height: 205rem;
        padding-top: 23rem;
        box-sizing: border-box;
        background: url("@/assets/images/energyCenter/bg-border1.png") no-repeat;
        background-size: contain;
        .text {
          @include fillTextColor(
            linear-gradient(227deg, #0dfde0 0%, #16c1ff 100%)
          );
          line-height: 28px;
          text-align: center;
        }
        .pie-box {
          height: 100rem;
          margin-top: 10rem;
        }
      }
      .part-chart {
        flex: 1;
        height: 220rem;
      }
    }
  }
  .bottom {
    @include flex(row, space-between);
  }

  .chart-box {
    margin-top: 20rem;
    width: 100%;
    height: 80%;
  }
}
</style>
