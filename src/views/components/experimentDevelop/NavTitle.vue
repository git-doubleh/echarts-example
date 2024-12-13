<!--
 * @Description: 
 * @Date: 2024-11-05 10:48:04
 * @LastEditTime: 2024-11-05 10:56:55
-->
<template>
    <div class="nav-box">
        <span class="dot" />
        <span class="title YOUSHE f-26">
            {{ title }}
        </span>
        <span class="dot" />
    </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue"
defineProps({
  title: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.nav-box {
  @include flex(row, center, center);
  width: 525rem;
  height: 48rem;
  margin: 0 auto;
  background: linear-gradient(
    90deg,
    rgba(17, 73, 185, 0) 0%,
    #1149b9 48%,
    rgba(17, 73, 185, 0) 100%
  );
  .dot {
    display: inline-block;
    width: 7rem;
    height: 7rem;
    background: #229ce3;
    border: 1px solid #42fffc;
    transform: rotateZ(45deg);
  }
  .title {
    margin: 0 10rem;
    color: #fff;
    font-size: 26rem;
  }
}
</style>
