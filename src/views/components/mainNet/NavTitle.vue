<!--
 * @Description: 
 * @Date: 2024-10-29 09:31:25
 * @LastEditTime: 2024-10-30 14:28:43
-->
<template>
    <div class="nav">
        <img src="@/assets/images/mainNet/bg-nav-left.png" class="img">
        <span class="text YOUSHE">{{ title }}</span>
        <img src="@/assets/images/mainNet/bg-nav-right.png" class="img">
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
.nav {
  @include flex(row, center, baseline);
  width: 1780rem;
  margin: 40rem auto 0;
  overflow: hidden;
  .img {
    flex: 1;
    height: 35rem;
  }
  .text {
    margin: 0 40rem;
    font-size: 36rem;
    white-space: nowrap;
    @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
  }
}
</style>
