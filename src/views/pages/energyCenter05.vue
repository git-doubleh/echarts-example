<!--
 * @Description: 
 * @Date: 2024-10-25 10:01:27
 * @LastEditTime: 2024-12-13 10:38:00
-->
<template>
    <PageLayout title="四川经济社会发展情况分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc-box f-w500 f-22">
                2023年，四川省用电量前6位的重点行业依次是:化学原料及化学制品制造业、黑色金属冶炼及压延加工业、电气机械和器材制造业、有色金属冶炼及压延加工业、非金属矿物制品业、计算机/通信和其他电子设备制造业。六大行业用电量合计115.25亿千瓦时，同比增长18.97%。
            </div>
            <div class="grid-box">
                <BgBorder
                    padding-top="28rem"
                    title="全省黑金属行业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 5],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="blackData" />
                    </div>
                </BgBorder>
                <BgBorder
                    padding-top="28rem"
                    title="全省电器机械和器材制造业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 11],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="mechanicalData" />
                    </div>
                </BgBorder>
                <BgBorder
                    padding-top="28rem"
                    title="全省化工行业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 4],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="chemicalData" />
                    </div>
                </BgBorder>
                <BgBorder
                    padding-top="28rem"
                    title="全省有色金属行业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 6],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="colorData" />
                    </div>
                </BgBorder>
                <BgBorder
                    padding-top="28rem"
                    title="全省非金属行业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 5],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="noneData" />
                    </div>
                </BgBorder>
                <BgBorder
                    padding-top="28rem"
                    title="全省计算机/通信和其他电子设备制造业用电量走势"
                    width="600rem"
                    height="343rem"
                    :custom-style="{
                        color: '#FFC24B',
                        slice: [2, 15],
                    }"
                >
                    <div class="chart-box">
                        <ChartLineBar0501 :chart-data="communicateData" />
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
import ChartLineBar0501 from "../components/energyCenter/ChartLineBar0501.vue"
import {
  BLACKMETALDATA,
  MECHANICALDATA,
  CHEMICALDATA,
  COLORMETALDATA,
  NONEMETALDATA,
  COMMUNICATEDATA,
} from "../components/energyCenter/config"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})

const blackData = ref({})
const mechanicalData = ref({})
const chemicalData = ref({})
const colorData = ref({})
const noneData = ref({})
const communicateData = ref({})

onMounted(() => {
  blackData.value = {
    color: ["#4DC1FF", "rgba(77, 193, 255, 0)"],
    data: [BLACKMETALDATA.get("用电量"), BLACKMETALDATA.get("增速")],
  }
  mechanicalData.value = {
    color: ["rgba(77, 255, 246, 1)", "rgba(77, 255, 246, 0)"],
    data: [MECHANICALDATA.get("用电量"), MECHANICALDATA.get("增速")],
  }
  chemicalData.value = {
    color: ["rgba(77, 193, 255, 1)", "rgba(77, 193, 255, 0)"],
    data: [CHEMICALDATA.get("用电量"), CHEMICALDATA.get("增速")],
  }
  colorData.value = {
    color: ["rgba(77, 193, 255, 1)", "rgba(77, 193, 255, 0)"],
    data: [COLORMETALDATA.get("用电量"), COLORMETALDATA.get("增速")],
  }
  noneData.value = {
    color: ["rgba(77, 193, 255, 1)", "rgba(77, 193, 255, 0)"],
    data: [NONEMETALDATA.get("用电量"), NONEMETALDATA.get("增速")],
  }
  communicateData.value = {
    color: ["rgba(77, 124, 255, 1)", "rgba(77, 124, 255, 0)"],
    data: [COMMUNICATEDATA.get("用电量"), COMMUNICATEDATA.get("增速")],
  }
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 28rem 40rem 0;
  .desc-box {
    @include borderImg(url("@/assets/images/energyCenter/bg-desc.png"));
    width: 100%;
    height: 180rem;
    padding: 51rem 62rem;
    color: $font-normal;
    line-height: 44rem;
  }
  .grid-box {
    margin-top: 30rem;
    display: grid;
    grid-template-columns: repeat(3, 600rem);
    grid-template-rows: repeat(2, 343rem);
    grid-gap: 20rem;
    .chart-box {
      margin-top: 20rem;
      width: 100%;
      height: 80%;
    }
  }
}
</style>
