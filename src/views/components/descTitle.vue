<!--
 * @Description: 
 * @Date: 2024-11-26 14:12:56
 * @LastEditTime: 2024-11-26 14:27:11
-->
<template>
    <div class="box">
        <span class="dot" />
        <span class="title YOUSHE"> {{ title }}</span>
        <span class="dot" />
    </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.box {
  @include flex(row, center, center);
  width: fit-content;
  padding: 0 122rem;
  margin: 0 auto;
  height: 48rem;
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
    display: inline-block;
    margin: 0 10rem;
    font-size: 26rem;
    color: #fff;
    letter-spacing: 3rem;
  }
}
</style>
