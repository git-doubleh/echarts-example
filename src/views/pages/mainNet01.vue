<!--
 * @Description: 
 * @Date: 2024-10-28 09:16:55
 * @LastEditTime: 2025-01-14 17:24:47
-->
<template>
    <PageLayout title="主网发展规划技术">
        <div :class="[animatedCss, 'content']">
            <div class="desc f-w500 f-26">
                依托<span class="orange">先进仿真规划技术</span>，开展规划方案研究，从<span class="orange">运行方式安排与调试、短路电流与短路比计算、系统安全稳定方面</span>多角度校核电网规划方案，为四川电网主网架规划提供重要技术支撑。
            </div>
            <div class="box">
                <div class="item item1">
                    <div class="title YOUSHE">
                        运行方式安排与调试
                    </div>
                    <div class="text f-20 f-w500">
                        对网架结构、负荷水平、电源出力、无功补偿进行安排与调试，并对计算结果展示与分析。
                    </div>
                </div>
                <div class="item item2">
                    <div class="title YOUSHE">
                        短路电流与短路比计算
                    </div>
                    <div class="text f-20 f-w500">
                        采用国标算法，考虑马达负荷、风机、光伏发电单元、柔性直流换流器，进行短路电流、多馈入直流短路比、新能源多场站短路比计算。
                    </div>
                </div>
                <div class="item item3">
                    <div class="title YOUSHE">
                        机电暂态仿真计算
                    </div>
                    <div class="text f-20 f-w500">
                        采用机电暂态仿真技术，对新能源并网近区、大型电源送出线路以及负荷中心电压稳定开展扫描分析，形成计算状态、判稳结论、重要提示信息等。
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import BgBorder from "../components/energyCenter/BgBorder.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.content {
  padding: 40rem 40rem 0;
  .desc {
    width: 100%;
    height: 192rem;
    padding: 40rem 55rem;
    margin-bottom: 30rem;
    box-sizing: border-box;
    background: url("@/assets/images/mainNet/bg-desc1.png") no-repeat;
    background-size: contain;
    line-height: 56rem;
    color: $font-normal;
    letter-spacing: 5rem;
  }
  .box {
    display: grid;
    grid-template-columns: 564rem 564rem 652rem;
    grid-template-rows: repeat(3, 664rem);
    column-gap: 30rem;
    .item {
      padding: 20rem 29rem 0 32rem;
      .title {
        @include fillTextColor();
        padding-left: 14rem;
        font-size: 32rem;
        line-height: 54rem;
        letter-spacing: 4rem;
      }
      .text {
        width: 100%;
        // height: 152rem;
        padding: 22rem 20rem;
        margin-top: 33rem;
        border: 1px solid #2377a2;
        line-height: 40rem;
        color: #fff;
        box-sizing: border-box;
        background: #083052;
      }
    }
    .item1 {
      background: url("@/assets/images/mainNet/bg-part1.png") no-repeat;
      background-size: contain;
    }
    .item2 {
      background: url("@/assets/images/mainNet/bg-part2.png") no-repeat;
      background-size: contain;
    }
    .item3 {
      background: url("@/assets/images/mainNet/bg-part3.png") no-repeat;
      background-size: contain;
    }
  }
}
</style>
