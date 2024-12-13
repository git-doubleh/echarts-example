<!--
 * @Description: 
 * @Date: 2024-10-22 09:46:20
 * @LastEditTime: 2024-11-21 15:27:18
-->
<template>
    <div class="rate-box">
        <div class="label f-18 f-w500">
            {{ label }}
        </div>
        <div class="chart-item">
            <ChartGauge0301 :chart-data="chartData[0]" :color="color" />
        </div>
        <div class="chart-item">
            <ChartGauge0301 :chart-data="chartData[1]" :color="color" />
        </div>
    </div>
</template>
<script setup lang="ts">
import ChartGauge0301 from "./ChartGauge0301.vue"
defineProps({
  label: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  chartData: {
    type: Array,
    default: () => [],
  },
})
</script>
<style lang="scss" scoped>
.rate-box {
    @include flex();
    height: 150rem;
    margin: -20rem 0 20rem;
    .label {
        width: 132rem;
        height: 40rem;
        text-align: center;
        line-height: 40rem;
        color: #fff;
        background: url('@/assets/images/newEnergy/bg-item.png') no-repeat;
        background-size: contain;
    }
    .chart-item {
        width: 140rem;
        height: 100%;
    }
}
</style>
