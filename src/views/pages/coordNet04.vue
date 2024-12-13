<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:17:55
-->
<template>
    <PageLayout title="四川配电网前沿研究与示范工程">
        <NavTitle title="【川南片区】配网规划研究" />
        <div :class="[animatedCss, 'content']">
            <div class="left" />
            <div class="right part-border">
                <div class="row row1">
                    <div class="title YOUSHE">
                        存在问题
                    </div>
                    <div class="text f-18 f-w500">
                        多晶硅、锂电等产业发展较快，工业园区负荷需求旺盛，配电网容载比较低，农网地区低电压现象严重。
                    </div>
                </div>
                <div class="row row2">
                    <div class="title YOUSHE">
                        解决方案/规划
                    </div>
                    <div class="text f-18 f-w500">
                        全域全景全链条的低电压分析治理方案：运用神经网络、决策树等AI技术，打破低电压问题分析的传统“盲区”，全景观察低电压问题现状、全局诊断低电压产生成因、全程指导低电压治理方案、全面评价低电压治理成效。
                    </div>
                </div>
                <img src="@/assets/images/coordNet/part03.png" class="img">
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/mainNet/NavTitle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  margin: 55rem 80rem 0 100rem;
  .left {
    width: 988rem;
    height: 770rem;
    margin-right: 30rem;
    background: url("@/assets/images/coordNet/map04.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 720rem;
    height: 788rem;
    padding: 40rem 29rem 0;
    box-sizing: border-box;
    .row {
      width: 100%;
      padding: 18rem 20rem;
      box-sizing: border-box;
      .title {
        margin-bottom: 8rem;
        font-size: 30rem;
        line-height: 35rem;
      }
      .text {
        color: $font-normal;
        line-height: 32rem;
        letter-spacing: 2px;
      }
    }
    .row1 {
      background: linear-gradient(
        90deg,
        rgba(74, 190, 255, 0.2),
        rgba(253, 188, 19, 0.3)
      );
      .title {
        color: #ff9f2e;
      }
    }
    .row2 {
      margin: 20rem 0;
      background: linear-gradient(
        90deg,
        rgba(74, 255, 255, 0.2),
        rgba(139, 120, 255, 0.3)
      );
      .title {
        color: #0dfdef;
      }
    }
    .img {
      width: 664rem;
      height: 305rem;
    }
  }
}
</style>
