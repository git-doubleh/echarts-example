<!--
 * @Description: 
 * @Date: 2024-10-17 09:19:13
 * @LastEditTime: 2024-11-28 10:34:05
-->
<template>
    <div class="title">
        <img src="@/assets/icons/magic-dot.svg" class="img">
        <span :class="{ fill: isFill }" class="text f-22 f-w600">{{ title }}</span>
    </div>
</template>
<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "",
  },
  isFill: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
.title {
  @include flex(row, start);
  margin-bottom: 12rem;
  color: #fff;
  line-height: 32rem;
  text-align: left;
  .img {
    width: 32rem;
    height: 30rem;
    margin-right: 8rem;
  }
  .text {
    color: $font-normal;
  }
  .fill {
    @include fillTextColor();
  }
}
</style>
