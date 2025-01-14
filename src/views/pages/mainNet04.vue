<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2025-01-08 11:14:54
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="支撑成都构网SVG电压稳定特性分析" />
        <div :class="animatedCss">
            <div class="desc f-w500 f-22">
                基于经典的<span class="orange">机电暂态仿真技术</span>，研究分析成都电网存在的电压稳定问题，<span class="orange">重点研究成都电网电压失稳和德宝直流换相失败的机理模型</span>，<span class="orange">对比分析分布式调相机、常规型SVG和构网型SVG</span>动态无功补偿装置三种设备的无功响应特性。研究成果可有效提升德宝直流受入能力100万千瓦，并可<span class="orange">支撑成都构网型SVG系统方案论证</span>。
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
  @include borderImg(url("@/assets/images/mainNet/bg-desc2.png"));
  width: 1760rem;
  height: 159rem;
  margin: 30rem auto 25rem;
  padding: 20rem 32rem;
  box-sizing: border-box;
  line-height: 40px;
  letter-spacing: 3px;
  color: $font-normal;
  .orange {
    color: #ffc24b;
  }
}
.content {
  display: flex;
  margin: 0 80rem;
  .left {
    width: 808rem;
    height: 630rem;
    margin: 10rem 40rem 0 0;
    background: url("@/assets/images/mainNet/bg-part7.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 912rem;
    height: 640rem;
    background: url("@/assets/images/mainNet/bg-part8.png") no-repeat;
    background-size: contain;
  }
}
</style>
