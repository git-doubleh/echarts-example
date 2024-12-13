<!--
 * @Description: 
 * @Date: 2024-10-25 10:01:27
 * @LastEditTime: 2024-12-13 09:21:24
-->
<template>
    <PageLayout title="四川全社会用电情况分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="desc-box">
                <p class="desc f-w500 f-22">
                    截至2023年底，四川全社会用电量3711.26亿千瓦时，同比增长7.67%。从人均用电情况来看，2023年四川人均用电量4435千瓦时（排名第26位），仅为全国平均水平6543千瓦时的68%，未来仍具有较大的增长空间。
                </p>
                <p class="desc f-w500 f-22">
                    2023年，四川能源消费总量约2.46亿吨标准煤，能源消费强度0.3973吨标准煤/万元，排名全国第13位，比全国平均水平低11%。预计2030年四川能源消费强度将下降至0.311吨标准煤/万元。
                </p>
            </div>
            <BgBorder
                title="电能替代率"
                sub-title="2023年"
                width="600rem"
                height="290rem"
            >
                <div class="chart-box chart-guage">
                    <ChartGuage0201 :chart-data="26" area="四川" />
                    <span class="devide" />
                    <ChartGuage0201 :chart-data="29" area="全国" />
                </div>
                >
            </BgBorder>
            <BgBorder title="全社会用电量" width="600rem" height="290rem">
                <div class="chart-box">
                    <ChartLineBar0201 />
                </div>
            </BgBorder>
            <BgBorder
                title="各类别用电量占比"
                sub-title="2023年"
                width="600rem"
                height="290rem"
            >
                <div class="chart-box">
                    <ChartPie0201 />
                </div>
            </BgBorder>
            <BgBorder title="人均用电分析" width="600rem" height="290rem">
                <div class="chart-box">
                    <ChartBar0201 />
                </div>
            </BgBorder>
            <BgBorder title="四川能源消费总量和强度" width="600rem" height="290rem">
                <div class="chart-box">
                    <ChartBar0202 />
                </div>
            </BgBorder>
            <BgBorder
                title="全国各省能源消费强度"
                sub-title="2023年"
                width="600rem"
                height="290rem"
            >
                <div class="chart-box">
                    <ChartBar0203 />
                </div>
            </BgBorder>
            <BgBorder
                title="人均能源消费水平"
                width="600rem"
                height="290rem"
            >
                <div class="chart-box">
                    <ChartBar0204 />
                </div>
            </BgBorder>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import BgBorder from "../components/energyCenter/BgBorder.vue"
import ChartGuage0201 from "../components/energyCenter/ChartGuage0201.vue"
import ChartLineBar0201 from "../components/energyCenter/ChartLineBar0201.vue"
import ChartPie0201 from "../components/energyCenter/ChartPie0201.vue"
import ChartBar0201 from "../components/energyCenter/ChartBar0201.vue"
import ChartBar0202 from "../components/energyCenter/ChartBar0202.vue"
import ChartBar0203 from "../components/energyCenter/ChartBar0203.vue"
import ChartBar0204 from "../components/energyCenter/ChartBar0204.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.page-content {
  padding: 20rem 40rem 50rem;
  display: grid;
  grid-template-rows: repeat(3, 290rem);
  grid-template-columns: repeat(3, 600rem);
  grid-gap: 20rem;
  .desc-box {
    @include borderImg(url("@/assets/images/energyCenter/bg-desc.png"));
    grid-column-start: 1;
    grid-column-end: 3;
    padding: 36rem 46rem;
    .desc {
      color: $font-normal;
      line-height: 40rem;
      &:first-child {
        margin-bottom: 16rem;
      }
    }
  }
  .chart-box {
    margin-top: 10rem;
    height: 230rem;
  }
  .chart-guage {
    display: flex;
    .devide {
      margin-top: 25rem;
      height: 144rem;
      border-left: 2px solid;
      border-image: linear-gradient(
          180deg,
          rgba(255, 244, 38, 0.12),
          rgba(255, 244, 38, 1),
          rgba(255, 244, 38, 0.12)
        )
        2 2;
      transform: rotate(15deg);
    }
  }
}
</style>
