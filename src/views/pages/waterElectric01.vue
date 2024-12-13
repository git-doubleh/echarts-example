<!--
 * @Description: 
 * @Date: 2024-10-17 09:27:32
 * @LastEditTime: 2024-12-05 09:28:51
-->
<template>
    <PageLayout title="四川水电发电能力分析">
        <NavTitle title="研究方法" />
        <div :class="[animatedCss, 'content']">
            <div class="left part-border">
                <SwiperText />
                <div class="sub-title">
                    <PartSubTitle title="主要流域水电装机情况" />
                </div>
                <div class="bar-box">
                    <ChartBar :chart-data="chartData" />
                </div>
            </div>
            <BgMap :img-src="imgSrc" />
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/waterElec/NavTitle.vue"
import SwiperText from "../components/waterElec/SwiperText.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartBar from "../components/waterElec/ChartBar.vue"
import BgMap from "../components/waterElec/BgMap.vue"
import { RIVERSINSTALLEDDATA } from '../components/waterElec/config'
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
let chartData = ref([])
const imgSrc = new URL('../../assets/icons/water3.svg', import.meta.url).href

onMounted(() => {
  setTimeout(() => {
    chartData.value = [
      {
        name: "现状",
        data: RIVERSINSTALLEDDATA.get('现状'),
        itemColor: ["rgba(12, 255, 241, 0.1)", "rgba(13, 253, 239, 1)"],
      },
      {
        name: "2025",
        data: RIVERSINSTALLEDDATA.get('2025'),
        itemColor: ["rgba(29, 190, 255, 0.1)", "rgba(38, 193, 255, 1)"],
      },
      {
        name: "2030",
        data: RIVERSINSTALLEDDATA.get('2030'),
        itemColor: ["rgba(255, 221, 90, 0.1)", "rgba(244, 212, 87, 1)"],
      },
    ]
    
  }, 100)
})
</script>
<style lang="scss" scoped>
.content {
  @include flex();
  margin: 37rem 80rem 0;
  .left {
    width: 804rem;
    height: 780rem;
    padding: 40rem 26rem;
    box-sizing: border-box;
    .sub-title {
      margin: 34rem 0 7rem;
    }
    .bar-box {
      height: 400rem;
      width: 100%;
    }
  }
 
}
</style>
