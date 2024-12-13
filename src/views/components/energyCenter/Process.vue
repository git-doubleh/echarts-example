<!--
 * @Description: 
 * @Date: 2024-12-12 10:00:41
 * @LastEditTime: 2024-12-12 10:22:19
-->
<template>
    <div class="process-box">
        <div class="title f-w500 f-18">
            {{ title }}
        </div>
        <div class="bar-container">
            <div class="bar" :style="styleSheet" />
            <span class="text f-22 PANGMEN">
                <CountTo
                    :start-val="0"
                    :decimals="1"
                    :end-val="num"
                    :duration="3000"
                />%</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { CountTo } from "vue3-count-to"
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  num: {
    type: Number,
    default: 0,
  },
})
const styleSheet = reactive({
  width: `${props.num}%`,
  left: `-${props.num}%`,
})

onMounted(() => {
  styleSheet.left = 0
})
</script>
<style lang="scss" scoped>
.process-box {
  .title {
    margin-bottom: 6rem;
    line-height: 32rem;
    @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
  }
  .bar-container {
    position: relative;
    height: 30rem;
    width: 100%;
    background: rgba(210, 229, 255, 0.08);
    border-radius: 34rem;
    overflow: hidden;
    .bar {
      position: absolute;
      top: 0;
      height: 100%;
      border-radius: 34rem;
      background: linear-gradient(90deg, #448cff 0%, #6dc2ff 100%);
      transition: all 3s;
    }
    .text {
      position: absolute;
      right: 20rem;
      bottom: 1rem;
      z-index: 2;
      line-height: 28px;
      color: #0dfdef;
    }
  }
}
</style>
