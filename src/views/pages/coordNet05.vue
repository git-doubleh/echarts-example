<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-12-05 10:25:54
-->
<template>
    <PageLayout title="四川配电网前沿研究与示范工程">
        <NavTitle title="【川东北片区】配网规划研究" />
        <div :class="[animatedCss, 'content']">
            <div class="left" />
            <div class="right part-border">
                <div class="row row1">
                    <div class="title YOUSHE">
                        存在问题
                    </div>
                    <div class="text f-18 f-w500">
                        春节返乡引起的季节性重过载低电压，历史遗留原因导致局部配网薄弱。
                    </div>
                </div>
                <div class="row row2">
                    <div class="title YOUSHE">
                        解决方案/规划
                    </div>
                    <div class="text f-18 f-w500">
                        新型储能解决配变与用户侧低电压问题示范工程项目：选取试点台区开展示范工程建设，在400V末端安装不同功率、容量的储能装置，使其工作在“受控电流源”模式，结合削峰填谷，提升高峰用电时期末端电压，提高配网运营的综合效益。
                    </div>
                </div>
                <img src="@/assets/images/coordNet/part04.png" class="img">
                <img src="@/assets/images/coordNet/chartline.png" class="chart-img">
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
.content {
  display: flex;
  margin: 55rem 80rem 0 100rem;
  .left {
    width: 988rem;
    height: 770rem;
    margin-right: 30rem;
    background: url("@/assets/images/coordNet/map05.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 720rem;
    height: 788rem;
    padding: 37rem 29rem 0;
    box-sizing: border-box;
    .row {
      width: 100%;
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
      padding: 16rem 0 16rem 20rem;
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
      margin: 16rem 0;
      padding: 10rem 0 10rem 20rem;
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
      height: 159rem;
    }
    .chart-img {
      height: 220rem;
      margin-top: 20rem;
    }
  }
}
</style>
