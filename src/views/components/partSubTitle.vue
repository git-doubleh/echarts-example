<!--
 * @Description: 
 * @Date: 2024-10-17 09:19:13
 * @LastEditTime: 2025-01-08 14:09:37
-->
<template>
    <div class="title">
        <div class="right-box">
            <img src="@/assets/icons/magic-dot.svg" class="img">
            <span :class="{ fill: isFill }" class="text f-22 f-w600">{{
                title
            }}</span>
        </div>
        <span class="sub-title f-16">{{ subTitle }}</span>
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
  subTitle: {
    type: String,
    default: "",
  },
})
</script>
<style lang="scss" scoped>
.title {
  @include flex(row, space-between);
  margin-bottom: 12rem;
  color: #fff;
  text-align: left;
  .right-box {
    @include flex(row, start);
    line-height: 32rem;
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
  .sub-title {
    line-height: 32rem;
  }
}
</style>
