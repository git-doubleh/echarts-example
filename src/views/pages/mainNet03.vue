<!--
 * @Description: 
 * @Date: 2024-10-29 13:31:54
 * @LastEditTime: 2024-11-29 10:23:49
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="支撑成都立体双环潮流分析" />
        <div :class="animatedCss">
            <div class="desc f-w500 f-24">
                基于主网规划先进仿真技术手段，开展<span class="orange">500千伏目标网架研究</span>。创新性地提出了<span class="orange">“立体双环网”网架结构</span>并成功应用于成都电网，为解决四川电网负荷中心供电能力受限、中长期短路电流超标等难题提供了发展方向。
            </div>
            <div class="content">
                <div class="left" />
                <div class="right" />
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
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
.desc {
  width: 1760rem;
  height: 124rem;
  margin: 30rem auto 0;
  padding: 22rem 32rem;
  box-sizing: border-box;
  line-height: 40px;
  letter-spacing: 3px;
  color: $font-normal;
  background: url("@/assets/images/mainNet/bg-desc2.png") no-repeat;
  background-size: contain;
  .orange {
    color: #ffc24b;
  }
}
.content {
  display: flex;
  align-items: end;
  margin: 29rem 80rem 0;
  .left {
    width: 912rem;
    height: 641rem;
    margin-right:  40rem;
    background: url("@/assets/images/mainNet/bg-part5.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 808rem;
    height: 630rem;
    background: url("@/assets/images/mainNet/bg-part6.png") no-repeat;
    background-size: contain;
  }
}
</style>
