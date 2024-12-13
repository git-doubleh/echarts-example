<!--
 * @Description: 
 * @Date: 2024-11-05 11:14:24
 * @LastEditTime: 2024-11-05 11:29:39
-->
<template>
    <div class="part-container">
        <span class="num f-w500 f-16">{{ num }}</span>
        <span class="text f-w500 f-18">{{ text }}</span>
        <span class="date f-w500 f-18">{{ date }}</span>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue"
defineProps({
  num: {
    type: Number,
    default: 1,
  },
  text: {
    type: String,
    default: "",
  },
  date: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.part-container {
  @include flex(row, start, center);
  position: relative;
  width: 715rem;
  height: 72rem;
  padding: 0 40rem 0 20rem;
  box-sizing: border-box;
  background: linear-gradient(
    90deg,
    rgba(11, 109, 220, 0.3) 0%,
    rgba(65, 220, 240, 0) 100%
  );
  color: #fff;
  .num {
    margin-right: 20rem;
    line-height: 28rem;
  }
  .text {
    width: 70%;
    word-break: break-all;
    line-height: 24rem;
    letter-spacing: 2px;
    text-align: left;
}
.date {
    flex: 1;
    color: #FFC24B;
    text-align: right;
    letter-spacing: 2px;
  }
  &::before {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    content: "";
    width: 4px;
    height: 46rem;
    background: #4470ff;
    filter: blur(2px);
  }
}
</style>
