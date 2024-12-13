<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:26:51
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="支撑攀西特近区新能源接入稳定性分析" />
        <div :class="animatedCss">
            <div class="desc f-w500 f-22">
                新能源<span class="orange">装机规模</span>不断增大，<span class="orange">传统稳定问题与新形态稳定问题</span>叠加，暂态过电压引发的<span class="orange">新能源机组连锁脱网风险</span>加剧，开展机端短路比计算分析、电压频率稳定校核，确保新能源接入电力系统后的安全稳定运行。
            </div>
            <div class="content">
                <div class="left" />
                <div class="right" />
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
.desc {
  width: 1760rem;
  height: 124rem;
  margin: 30rem auto 40rem;
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
  margin: 0 80rem;
  .left {
    width: 808rem;
    height: 630rem;
    margin: 10rem 40rem 0 0;
    background: url("@/assets/images/mainNet/bg-part11.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 912rem;
    height: 640rem;
    padding: 320rem 40rem 0;
    box-sizing: border-box;
    background: url("@/assets/images/mainNet/bg-part12.png") no-repeat;
    background-size: contain;
  }
}
</style>
