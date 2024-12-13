<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:17:09
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="【成都平原】配网规划研究" />
        <div :class="[animatedCss, 'content']">
            <div class="left" />
            <div class="bg-animate" />
            <div class="right part-border">
                <div class="row row1">
                    <div class="title YOUSHE">
                        存在问题
                    </div>
                    <div class="text f-18 f-w500">
                        负荷水平高且增速快，结构虽坚强但冗余度不够，供电卡口多，产业发展对供电品质要求较高。
                    </div>
                </div>
                <div class="row row2">
                    <div class="title YOUSHE">
                        解决方案/规划
                    </div>
                    <div class="text f-18 f-w500">
                        天府新区天府(红星)柔直示范项目(拟建)：在天府站建设两套±10kV/
                        10MW柔直换流变和一套±10kV/±375V/375V/2MW多端口直流变压
                        器构建±10kV直流母线，增设±375V、375V和48V供电回路。
                    </div>
                </div>
                <img src="@/assets/images/coordNet/part01.png" class="img">
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
  position: relative;
  display: flex;
  margin: 46rem 80rem 0 100rem;
  .left {
    position: relative;
    z-index: 2;
    width: 998rem;
    height: 770rem;
    margin-right: 20rem;
    background: url("@/assets/images/coordNet/map02.png") no-repeat;
    background-size: contain;
  }

  .bg-animate {
    position: absolute;
    bottom: 30rem;
    left: 85rem;
    width: 764rem;
    height: 764rem;
    background: url('@/assets/icons/animate-pie.svg') no-repeat;
    background-size: contain;
    z-index: 1;
  }

  .right {
    width: 720rem;
    height: 788rem;
    padding: 46rem 29rem 0;
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
      margin: 16rem 0;
      background: linear-gradient(90deg, rgba(74, 255, 255, .2), rgba(139, 120, 255, .3));
      .title {
        color: #0dfdef;
      }
    }
    .img {
      width: 666rem;
      height: 372rem;
    }
  }
}
</style>
