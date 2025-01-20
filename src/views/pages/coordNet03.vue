<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2025-01-20 16:43:27
-->
<template>
    <PageLayout title="四川配电网前沿研究与示范工程">
        <NavTitle title="【川西片区】配网规划研究" />
        <div :class="[animatedCss, 'content']">
            <div class="left part-border">
                <div class="row row1">
                    <div class="title YOUSHE">
                        区域特点
                    </div>
                    <div class="text f-18 f-w500">
                        配电网网架结构薄弱，供电距离较长，供电可靠性较低，负荷发展水平较低，投资效益差。
                    </div>
                </div>
                <div class="row row2">
                    <div class="title YOUSHE">
                        示范工程
                    </div>
                    <div class="text f-18 f-w500">
                        甘孜北部“构网型储能+新能源”示范项目（拟建）：针对甘孜北部大电网延伸困难的高原地区面临的供电能力不足、供电可靠性偏低的等问题，运用构网型储能技术，提升高原电网电力普遍服务水平。
                    </div>
                </div>
                <img src="@/assets/images/coordNet/part02.png" class="img">
            </div>
            <div class="right" />
            <MapDot
                :posi="{
                    right: '626rem',
                    bottom: '407rem'
                }"
            />
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/mainNet/NavTitle.vue"
import MapDot from "../components/CoordNet/MapDot.vue"
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
  margin: 50rem 100rem 0 80rem;
  .right {
    width: 993rem;
    height: 770rem;
    margin-left: 20rem;
    background: url("@/assets/images/coordNet/map03.png") no-repeat;
    background-size: contain;
  }
  .left {
    width: 720rem;
    height: 788rem;
    padding: 46rem 26rem 0;
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
      background: linear-gradient(90deg, rgba(74, 190, 255, .2), rgba(253, 188, 19, .3));
      .title {
        color: #ff9f2e;
      }
    }
    .row2 {
      margin: 20rem 0 26rem;
      background: linear-gradient(90deg, rgba(74, 255, 255, .2), rgba(139, 120, 255, .3));
      .title {
        color: #0dfdef;
      }
    }
    .img {
      width: 668rem;
      height: 339rem;
    }
  }
}
</style>
