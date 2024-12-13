<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:28:02
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="支撑陇电、疆电对系统稳定性影响分析" />
        <div :class="animatedCss">
            <div class="desc f-w500 f-22">
                四川电网交直流耦合日益紧密，<span class="orange">陇电、疆电直流故障</span>将导致交流系统电压水平降低。传统的机电暂态仿真分析精度较低，无法在微观时间尺度上观测直流电力电子器件的故障发展衍化进程。<span
                    class="orange"
                >开展电磁暂态建模仿真计算分析</span>，确保多回直流接入负荷中心后系统安全稳定运行。
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
    background: url("@/assets/images/mainNet/bg-part13.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 912rem;
    height: 640rem;
    padding: 320rem 40rem 0;
    box-sizing: border-box;
    background: url("@/assets/images/mainNet/bg-part14.png") no-repeat;
    background-size: contain;
  }
}
</style>
