<!--
 * @Description: 
 * @Date: 2024-10-25 10:01:27
 * @LastEditTime: 2024-12-13 09:21:48
-->
<template>
    <PageLayout title="四川经济社会发展情况分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="top">
                <BgBorder title="四川GDP总量" width="500rem" height="285rem">
                    <div class="chart-box">
                        <ChartBar0101 :chart-data="GDPData" />
                    </div>
                </BgBorder>
                <BgBorder title="四川人均GDP" width="500rem" height="285rem">
                    <div class="chart-box">
                        <ChartBar0102 :chart-data="GDPDataPerson" />
                    </div>
                </BgBorder>
                <BgBorder
                    title="主要经济指标增速对比"
                    sub-title="2024上半年"
                    width="500rem"
                    height="285rem"
                >
                    <div class="chart-box">
                        <ChartBar0103 :chart-data="cashRiseRateData" />
                    </div>
                </BgBorder>
                <BgBorder title="四川省人均消费性支出" width="500rem" height="285rem">
                    <div class="chart-box">
                        <ChartBar0104 :chart-data="consumePersonData" />
                    </div>
                </BgBorder>
            </div>
            <div class="map" />
            <div class="bottom">
                <BgBorder
                    size="large"
                    padding-top="20rem"
                    title="全国各省工业化进程测度值"
                    sub-title="2023年"
                    width="910rem"
                    height="285rem"
                >
                    <div class="area-box">
                        <span class="item">后工业化</span><span class="item item-border">工业化后期</span><span class="item">工业化中期</span>
                    </div>
                    <div class="chart-box2">
                        <ChartBar0105 :chart-data="industryProcessData" />
                    </div>
                </BgBorder>
                <BgBorder
                    size="large"
                    padding-top="20rem"
                    title="典型省份工业占GDP的比重"
                    width="910rem"
                    height="285rem"
                >
                    <div class="chart-box">
                        <ChartLine0101 :chart-data="industryGdpRate" />
                    </div>
                </BgBorder>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import BgBorder from "../components/energyCenter/BgBorder.vue"
import ChartBar0101 from "../components/energyCenter/ChartBar0101.vue"
import ChartBar0102 from "../components/energyCenter/ChartBar0102.vue"
import ChartBar0103 from "../components/energyCenter/ChartBar0103.vue"
import ChartBar0104 from "../components/energyCenter/ChartBar0104.vue"
import ChartBar0105 from "../components/energyCenter/ChartBar0105.vue"
import ChartBar0106 from "../components/energyCenter/ChartBar0106.vue"
import ChartLine0101 from "../components/energyCenter/ChartLine0101.vue"
import {
  GDPDATA,
  GDPDATAPERSON,
  CASHRISERATEDATA,
  CONSUMEPERSONDATA,
  INDESTRYPROCESSDATA,
  INDESTRYGDPRATE,
} from "../components/energyCenter/config"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
const GDPData = ref([])
const GDPDataPerson = ref([])
const cashRiseRateData = ref([])
const consumePersonData = ref([])
const industryProcessData = ref([])
const industryGdpRate = ref([])

onMounted(() => {
  setTimeout(() => {
    GDPData.value = [
      {
        name: "四川",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#55FFE0",
        },
        data: GDPDATA.get("四川"),
      },
      {
        name: "全国",
        type: "bar",
        barWidth: 16,
        itemStyle: {
          color: "#327AFF",
        },
        data: GDPDATA.get("全国"),
      },
    ]
    GDPDataPerson.value = GDPDATAPERSON

    cashRiseRateData.value = [
      {
        name: "全国",
        type: "bar",
        barWidth: 12,
        itemStyle: {
          color: "#1FAEFF",
        },
        data: CASHRISERATEDATA.get("全国"),
      },
      {
        name: "四川",
        type: "bar",
        barWidth: 12,
        itemStyle: {
          color: "#55FFE0",
        },
        data: CASHRISERATEDATA.get("四川"),
      },
      {
        name: "河南",
        type: "bar",
        barWidth: 12,
        itemStyle: {
          color: "#FF8E4D",
        },
        data: CASHRISERATEDATA.get("河南"),
      },
      {
        name: "浙江",
        type: "bar",
        barWidth: 12,
        itemStyle: {
          color: "#9572FF",
        },
        data: CASHRISERATEDATA.get("浙江"),
      },
    ]

    consumePersonData.value = CONSUMEPERSONDATA

    industryProcessData.value = INDESTRYPROCESSDATA

    industryGdpRate.value = INDESTRYGDPRATE
  }, 100)
})
</script>
<style lang="scss" scoped>
@mixin border() {
  position: absolute;
  display: block;
  content: "";
  top: 0;
  height: 190rem;
}
.page-content {
  position: relative;
  padding: 20rem 40rem 50rem;
  .top {
    display: grid;
    grid-template-columns: repeat(2, 500rem);
    grid-column-gap: 840rem;
    grid-row-gap: 30rem;
    margin-bottom: 30rem;
  }
  .chart-box {
    margin-top: 10rem;
    height: 230rem;
  }
  .chart-box2 {
    height: 210rem;
  }
  .map {
    position: absolute;
    top: 35rem;
    right: 539rem;
    z-index: -1;
    width: 777rem;
    height: 632rem;
    background: url("@/assets/icons/ec-animate-map.svg") no-repeat;
    background-size: contain;
  }
  .bottom {
    @include flex(row, space-between);
  }
  .area-box {
    width: 90%;
    display: flex;
    height: 24rem;
    align-items: center;
    margin: 0 auto;
    .item {
      display: inline-block;
      color: #fff;
      font-size: 14rem;
      text-align: center;
      &:first-child {
        width: 25.8%;
      }
      &:last-child {
        width: 22.6%;
      }
    }
    .item-border {
      position: relative;
      flex: 1;
      &::before {
        @include border();
        left: 0;
        border-left: 1px dashed #ffc24b;
      }
      &::after {
        @include border();
        right: 0;
        border-right: 1px dashed #ffc24b;
      }
    }
  }
}
</style>
