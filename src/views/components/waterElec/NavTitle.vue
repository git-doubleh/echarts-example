<template>
    <div class="nav">
        <img src="@/assets/images/waterElec/bg-nav-left.png" class="img">
        <span class="text YOUSHE">{{ title }}</span>
        <img src="@/assets/images/waterElec/bg-nav-right.png" class="img">
    </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.nav {
  @include flex(row, center, baseline);
  width: 1793rem;
  margin: 40rem auto 0;
  .img {
    flex: 1;
      // width: 740rem;
      height: 35rem;
  }
  .text {
    margin: 0 40rem;
    font-size: 36rem;
    word-break: keep-all;
    @include fillTextColor(linear-gradient(180deg, #0DFDE0 0%, #1665FF 100%));
  }
}
</style>
