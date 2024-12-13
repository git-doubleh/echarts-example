<!--
 * @Description: 
 * @Date: 2024-10-17 09:27:32
 * @LastEditTime: 2024-12-05 10:10:23
-->
<template>
    <PageLayout title="四川水电发电能力分析">
        <div :class="animatedCss">
            <div class="nav">
                <PageSubTitle title="不同来水情况对水电发电能力的影响" />
            </div>
            <div class="content">
                <div class="left part-border">
                    <div class="desc f-w500 f-20">
                        以年为计算周期，月为计算时段，构建四川梯级水电联合优化模型，挖掘四川电网统调水电站出力耦合关系，评估丰、平、枯、特枯不同来水情况对水电供应能力的影响，形成考虑补偿调节的水电出力特性曲线。
                    </div>
                    <div class="sub-title">
                        <PartSubTitle title="各大流域全年发电能力分析" />
                    </div>
                    <div class="bar-box">
                        <ChartBar :chart-data="chartData" />
                    </div>
                </div>
                <BgMap :img-src="imgSrc" />
            </div>
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PageSubTitle from "../components/pageSubTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartBar from "../components/waterElec/ChartBar01.vue"
import BgMap from "../components/waterElec/BgMap.vue"
import { RIVIERSYEARPOWERDATA } from '../components/waterElec/config'
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
        name: "特枯年",
        data: RIVIERSYEARPOWERDATA[0],
        itemColor: '#FF3E3E',
      },
      {
        name: "枯水年",
        data: RIVIERSYEARPOWERDATA[1],
        itemColor: '#FF9D26',
      },
      {
        name: "水平年",
        data: RIVIERSYEARPOWERDATA[2],
        itemColor: '#7EF457',
      },
      {
        name: "丰水年",
        data: RIVIERSYEARPOWERDATA[3],
        itemColor: '#57F4E2',
      },
    ]
  }, 100)
})
</script>
<style lang="scss" scoped>
.nav {
  margin: 40rem 0 0 80rem;
}
.content {
  @include flex();
  margin: 37rem 80rem 0;
  .left {
    width: 804rem;
    height: 780rem;
    padding: 40rem 26rem;
    box-sizing: border-box;
    .desc {
      @include borderImg(url('@/assets/images/waterElec/bg-text.png'));
      width: 750rem;
      height: 156rem;
      padding: 24rem 20rem;
      box-sizing: border-box;
      line-height: 40rem;
      letter-spacing: 2px;
      text-align: left;
      color: $font-normal;
    }
    .sub-title {
      margin: 34rem 0 7rem;
    }
    .bar-box {
      height: 480rem;
      width: 100%;
    }
  }
}
</style>
