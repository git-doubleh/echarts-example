<!--
 * @Description: 
 * @Date: 2024-10-23 13:48:59
 * @LastEditTime: 2025-01-08 11:11:57
-->
<template>
    <PageLayout title="电力电量供需平衡分析">
        <NavTitle title="研究方法" />
        <div :class="[animatedCss, 'page-content']">
            <div class="desc f-22 f-w500">
                随着四川新型电力系统建设，各种<span class="orange">新要素、新业态</span>持续涌现，<span class="orange">电力供给结构、供需平衡模式</span>等将发生深刻变化，传统拉表法难以准确刻画电力供需形势，亟需提升电力电量平衡分析研究深度和广度，采取适用于四川电网源荷特点的8760小时级生产模拟方法开展电力供需平衡分析研究，服务电力保供和能源转型。
            </div>
            <div class="main">
                <div class="part">
                    <div class="bg" />
                    <PartSubTitle title="共同研发供需分析工具" is-fill />
                    <div class="content f-18 f-w500">
                        实验室已掌握HUST-ProS、PSD-PEBL等主流供需分析生产模拟软件，并联合中国电科院共同研发定制化PSD-PEBL生产模拟软件，对水电、储能等关键模块进行更符合四川电网实际的定制研发，供需分析结果更贴合四川实际特性。
                    </div>
                    <div class="tool-list">
                        <div
                            v-for="(item, index) in toolList"
                            :key="index"
                            class="item f-22 f-w500"
                        >
                            {{ item }}
                        </div>
                    </div>
                </div>
                <div class="part">
                    <PartSubTitle title="自主开发供需分析工具" is-fill />
                    <div class="content f-18 f-w500">
                        现有供需分析软件缺乏针对水电为主电力系统的调节能力测算，为此，四川经研院自主开发了一套供需分析程序，自研程序可基于时序生产模拟综合考虑含水电、储能等调节资源的机组组合及出力方式，实现对电网调节能力的综合评估。
                    </div>
                    <img src="@/assets/images/supplyDemand/framework.png" class="img">
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/waterElec/NavTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
const toolList = ref([
  "计及水电运行特性的精细化建模",
  "支持火电定制化开机原则",
  "源侧和网侧储能差异化运行策略",
  "支持人工安排检修方式",
  "供需平衡全结果展示",
])
</script>
<style lang="scss" scoped>
.page-content {
  padding: 24rem 40rem 64rem;
  .desc {
    @include borderImg(url("@/assets/images/newEnergy/bg-border-hor.png"));
    width: 100%;
    height: 146rem;
    padding: 33rem 38rem;
    margin-bottom: 28rem;
    box-sizing: border-box;
    color: $font-normal;
    line-height: 40rem;
    letter-spacing: 2px;
    text-align: left;
  }
  .main {
    @include flex();
    .part {
      position: relative;
      @include borderImg(url('@/assets/images/bg-map-border.png'));
      width: 900rem;
      height: 656rem;
      padding: 24rem 46rem 0 26rem;
      box-sizing: border-box;
      .bg {
        position: absolute;
        width: 900rem;
        height: 480rem;
        left: 0;
        bottom: 0;
        background: url('@/assets/icons/supply-texture.svg') no-repeat;
        background-size: contain;
      }
      .content {
        padding-left: 14rem;
        color: $font-normal;
        line-height: 32rem;
      }
    }
    .tool-list {
      @include flex(column, start, center);
      margin-top: 30rem;
      .item {
        width: 593rem;
        height: 63rem;
        margin-bottom: 24rem;
        text-align: center;
        line-height: 50rem;
        letter-spacing: 2rem;
        color: #fff;
        background: url("@/assets/images/supplyDemand/bg-item.png") no-repeat;
        background-size: contain;
      }
    }
    .img {
      width: 802rem;
      height: 426rem;
      margin-top: 27rem;
    }
  }
}
</style>
