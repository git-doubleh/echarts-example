<!--
 * @Description: 
 * @Date: 2024-10-29 09:17:30
 * @LastEditTime: 2025-01-15 10:49:58
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="四川规划网架运行示意图" />
        <div :class="[animatedCss, 'main']">
            <div class="left part-border">
                <div class="select">
                    <ASelect v-model="timeSelect" style="width: 265rem" popup-container=".app-container">
                        <AOption :value="0">
                            8点 - 丰午高
                        </AOption>
                        <AOption :value="1">
                            8点 - 丰晚高
                        </AOption>
                        <AOption :value="2">
                            8点 - 枯午高
                        </AOption>
                        <AOption :value="3">
                            8点 - 枯晚高
                        </AOption>
                    </ASelect>
                </div>
                <PartSubTitle title="发电信息" sub-title="兆瓦" is-fill />
                <div class="pie-box">
                    <ChartPie01 :time-select="timeSelect" />
                </div>
                <PartSubTitle title="断面信息" sub-title="兆瓦" is-fill />
                <div class="bar-box">
                    <ChartBar01 :time-select="timeSelect" />
                </div>
            </div>
            <img :src="mapList[timeSelect]" class="right">
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/mainNet/NavTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import ChartPie01 from "../components/mainNet/ChartPie01.vue"
import ChartBar01 from "../components/mainNet/ChartBar01.vue"

import map0 from '@/assets/images/mainNet/map0.png'
import map1 from '@/assets/images/mainNet/map1.png'
import map2 from '@/assets/images/mainNet/map2.png'
import map3 from '@/assets/images/mainNet/map3.png'

defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
const timeSelect = ref<number>(0)
const mapList = ref([map0, map1, map2, map3])

</script>

<style lang="scss">
.arco-select-view-value {
  color: #fff;
}
.arco-select-dropdown,
.arco-select-option {
  border: none !important;
  background: linear-gradient(180deg, #003276 0%, #041e40 100%);
  color: #fff !important;
}
</style>
<style lang="scss" scoped>
:deep(.arco-select-view-single) {
  background: linear-gradient(180deg, #003276 0%, #041e40 100%);
  box-shadow: inset 0px 0px 12px 0px rgba(21, 137, 245, 0.72);
}
.main {
  display: flex;
  margin: 40rem 70rem 0 80rem;
  .left {
    width: 690rem;
    height: 778rem;
    margin-right: 52rem;
    padding: 42rem 32rem 0 30rem;
    .select {
      margin-bottom: 22rem;
      text-align: right;
    }
    .pie-box {
      width: 100%;
      height: 293rem;
      margin-bottom: 20rem;
      background-color: #0A254C;
    }
    .bar-box {
      width: 100%;
      height: 280rem;
    }
  }
  .right {
    width: 1029rem;
    height: 752rem;
    margin-top: 23rem;
  }
}
</style>
