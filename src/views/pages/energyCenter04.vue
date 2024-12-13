<!--
 * @Description: 
 * @Date: 2024-10-25 10:01:27
 * @LastEditTime: 2024-12-13 09:17:54
-->
<template>
    <PageLayout title="四川绿色低碳产业发展">
        <div :class="[animatedCss, 'page-content']">
            <div class="main">
                <img
                    src="@/assets/images/energyCenter/bg-text1.png"
                    class="header-img"
                >
                <div class="arrow" />
                <img
                    src="@/assets/images/energyCenter/bg-text2.png"
                    class="middle-img"
                >
                <!-- <img src="@/assets/images/energyCenter/map02.png" alt=""> -->
                <div class="map02" />
            </div>
            <div class="aside">
                <BgBorder title="四川晶硅产能发展情况" width="600rem" height="334rem" padding-top="28rem">
                    <div class="chart-box">
                        <ChartBar0401 />
                    </div>
                </BgBorder>
                <BgBorder title="四川锂资源占比情况" width="600rem" height="288rem" padding-top="23rem">
                    <div class="process-container">
                        <div class="process-item">
                            <Process title="世界资源占比" :num="6.1" />
                        </div>
                        <div class="process-item">
                            <Process title="全国资源占比" :num="90.2" />
                        </div>
                    </div>
                </BgBorder>
                <BgBorder
                    title="四川数据中心发展规模情况"
                    width="600rem"
                    height="268rem"
                    padding-top="20rem"
                >
                    <GridArea />
                </BgBorder>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import BgBorder from "../components/energyCenter/BgBorder.vue"
import ChartBar0401 from "../components/energyCenter/ChartBar0401.vue"
import Process from '../components/energyCenter/Process.vue'
import GridArea from "../components/energyCenter/GridArea.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.page-content {
  @include flex(row, space-between, initial);
  padding: 30rem 40rem 0;
  .main {
    position: relative;
    @include borderImg(url("@/assets/images/bg-map-border.png"));
    @include flex(column, center, center);
    width: 1220rem;
    height: 930rem;
    padding: 48rem 0 84rem;
    .header-img {
      margin-bottom: 73rem;
    }
    .arrow {
      position: absolute;
      left: 288rem;
      top: 140rem;
      width: 708rem;
      height: 32rem;
      background: url('@/assets/icons/ec-arrow.svg') no-repeat;
      background-size: contain;
    }
    .middle-img {
      margin-bottom: 72rem;
    }
    .map02 {
      width: 1075rem;
      height: 420rem;
      background: url('@/assets/icons/ec-animate-map2.svg') no-repeat;
      background-size: contain;
    }
  }
  .aside {
    @include flex(column, space-between);
    .chart-box {
      margin-top: 20rem;
      width: 100%;
      height: 80%;
    }
    .process-container {
      padding: 30rem 32rem 0;
      .process-item {
        &:first-child {
          margin-bottom: 28rem;
        }
      }
    }
  }
}
</style>
