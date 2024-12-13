<!--
 * @Description: 
 * @Date: 2024-10-29 09:17:30
 * @LastEditTime: 2024-12-13 10:49:14
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="四川规划网架运行示意图" />
        <div :class="[animatedCss, 'main']">
            <div class="left part-border">
                <div class="select">
                    <ASelect v-model="timeSelect" style="width: 265rem" popup-container=".app-container">
                        <AOption :value="0">
                            8点
                        </AOption>
                        <AOption :value="1">
                            11点
                        </AOption>
                        <AOption :value="2">
                            14点
                        </AOption>
                        <AOption :value="3">
                            17点
                        </AOption>
                    </ASelect>
                </div>
                <PartSubTitle title="发电信息" is-fill />
                <div class="pie-box">
                    <ChartPie01 :time-select="timeSelect" />
                </div>
                <PartSubTitle title="断面信息" is-fill />
                <div class="bar-box">
                    <ChartBar01 :time-select="timeSelect" />
                </div>
            </div>
            <div class="right" />
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
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
const timeSelect = ref<number>(0)

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
      height: 313rem;
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
    background: url("@/assets/images/mainNet/map1.png") no-repeat;
    background-size: contain;
  }
}
</style>
