<!--
 * @Description: 
 * @Date: 2024-10-24 13:06:51
 * @LastEditTime: 2024-11-29 10:31:16
-->
<template>
    <PageLayout title="源荷规划研究">
        <div :class="[animatedCss, 'page-content']">
            <div class="left">
                <img src="@/assets/images/supplyDemand/map1.png" class="img">
                <PartSubTitle title="2030年电量平衡表（亿千瓦时）" is-fill />
                <span class="tips f-18 f-w500">项目 / 2030年-电量</span>
                <div class="table">
                    <div v-for="(item, index) in tableData" :key="index" class="row">
                        <span class="label f-18 f-w500">{{ item.label }}</span>
                        <span class="value f-22 f-w600">
                            <CountTo
                                :start-val="0"
                                :end-val="item.value"
                                :decimals="0"
                                :duration="2000"
                            />
                        </span>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="box first">
                    <div class="side">
                        <PartSubTitle title="有序推进电源发展" is-fill />
                        <p class="f-18 f-w500 text">
                            根据平衡结果测算，预计2030年全省仍需进一步争取1000万千瓦支撑性煤电，保障电力供应。
                        </p>
                    </div>
                    <img src="@/assets/images/supplyDemand/map2.png" alt="">
                </div>
                <div class="box second">
                    <PartSubTitle title="合理研判负荷措施" is-fill />
                    <p class="text">
                        根据供需形势和源荷特性，研判负荷侧有序用电需求。
                    </p>
                    <div class="chart-box">
                        <ChartLine />
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartLine from "../components/supplyDemand/ChartLine.vue"
import { CountTo } from "vue3-count-to"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
const tableData = ref([
  {
    label: "负荷电量",
    value: "7000",
  },
  {
    label: "电量跨区送出",
    value: "1970",
  },
  {
    label: "电量跨区送入",
    value: "670",
  },
  {
    label: "新能源利用电量",
    value: "1299",
  },
  {
    label: "水电利用电量",
    value: "1936",
  },
  {
    label: "火电发电量",
    value: "1280",
  },
  {
    label: "抽蓄及储能利用电量",
    value: "-13",
  },
  {
    label: "电量不足",
    value: "734",
  },
])
</script>
<style lang="scss" scoped>
.page-content {
  @include flex(row, space-between, flex-start);
  padding: 30rem 40rem 60rem;
  .left {
    position: relative;
    .img {
      margin-left: 57rem;
      margin-bottom: -20rem;
      width: 844rem;
      height: 684rem;
    }
    .tips {
      position: absolute;
      right: 0;
      bottom: 214rem;
      line-height: 32px;
      color: #29cdff;
    }
    .table {
      display: grid;
      grid-template-columns: 460rem 460rem;
      grid-template-rows: repeat(4, 42rem);
      gap: 11rem 10rem;
      .row {
        @include flex(row, space-between, center);
        padding: 0 32rem;
        background: rgba(68, 188, 255, 0.12);
        .label {
          color: #fff;
        }
        .value {
          color: #0dfdef;
        }
      }
    }
  }
  .right {
    padding-top: 10rem;
    .box {
      @include borderImg(url("@/assets/images/bg-map-border.png"));
      width: 862rem;
      height: 440rem;
      padding: 24rem 0 0 24rem;
      box-sizing: border-box;
      .text {
        color: #fff;
        line-height: 32px;
      }
    }
    .first {
      display: flex;
      margin-bottom: 24rem;
      .side {
        width: 33%;
        margin-right: 36rem;
        .text {
          padding: 8rem 0 0 28rem;
        }
      }
      img {
        width: 440rem;
        height: 371rem;
      }
    }
    .second {
      .text {
        padding-top: 8rem;
      }
      .chart-box {
        height: 333rem;
      }
    }
  }
}
</style>
