<!--
 * @Description: 
 * @Date: 2024-10-25 09:29:34
 * @LastEditTime: 2024-11-29 10:31:31
-->
<template>
    <PageLayout title="网储规划研究">
        <div :class="[animatedCss, 'page-content']">
            <div class="left">
                <div class="box">
                    <div class="side">
                        <PartSubTitle title="科学谋划网架加强" is-fill />
                        <p class="f-18 f-w500 text">
                            研判通道输送需求，提出通道加强时序需求，适时加强网架送出及承载能力，发挥电网平台作用。
                        </p>
                    </div>
                    <img src="@/assets/images/supplyDemand/map3.png" alt="">
                </div>
                <div class="box">
                    <div class="side">
                        <PartSubTitle title="合理分析储能布局" is-fill />
                        <p class="f-18 f-w500 text">
                            分析抽蓄、储能等调节性电源应用场景及利用水平，科学指导送受端抽蓄、储能电源布局。
                        </p>
                    </div>
                    <img src="@/assets/images/supplyDemand/map4.png" alt="">
                </div>
            </div>
            <div class="right">
                <img src="@/assets/images/supplyDemand/map5.png" alt="">
                <PartSubTitle title="2030年新能源消纳情况" is-fill />
                <div class="box">
                    <div
                        v-for="(item, index) in rowData"
                        :key="index"
                        :class="[index < 4 ? 'th-item' : 'tr-item', 'item f-18']"
                    >
                        {{ item }}
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
const rowData = ref([
  "/",
  "阿坝",
  "甘孜",
  "攀西",
  "弃电量",
  "6923",
  "5682",
  "6794",
  "新能源消纳率",
  "2.3%",
  "2.3%",
  "2.3%",
])
</script>
<style lang="scss" scoped>
.page-content {
  @include flex(row, space-between);
  padding: 40rem;
  .left {
    .box {
      display: flex;
      @include borderImg(url("@/assets/images/bg-map-border.png"));
      width: 862rem;
      height: 440rem;
      padding: 24rem 0 0 24rem;
      box-sizing: border-box;
      &:first-child {
        margin-bottom: 24rem;
      }
      .side {
        width: 28%;
        margin-right: 85rem;
        .text {
          color: #fff;
          line-height: 32px;
          padding: 8rem 0 0 28rem;
        }
      }
      img {
        width: 456rem;
        height: 391rem;
      }
    }
  }
  .right {
    img {
      width: 844rem;
      height: 684rem;
      margin-left: 35rem;
    }
    .box {
      padding-top: 8rem;
      display: grid;
      grid-template-columns: repeat(4, 225rem);
      grid-template-rows: repeat(3, 44rem);
      grid-gap: 10rem 12rem;
      .item {
        line-height: 44rem;
        text-align: center;
        color: #fff;
      }
      .th-item {
        background: linear-gradient( 180deg,  #12BCEF 0%, #003A78 100%);
      }
      .tr-item {
        background: rgba(68, 188, 255, 0.12);
      }
    }
  }
}
</style>
