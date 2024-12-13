<!--
 * @Description: 
 * @Date: 2024-11-26 16:01:19
 * @LastEditTime: 2024-12-05 10:15:56
-->
<template>
    <div class="tag-box">
        <img
            :class="[isSpecial ? 'spe-img' : 'normal-img', 'img']"
            src="@/assets/images/waterElec/river-line.png"
        >
        <div class="tag">
            <p class="f-14 f-w500">
                年发电量
            </p>
            <p class="f-w500">
                <span class="num f-w500 f-16">{{ parseInt(num) }}</span>万千瓦时
            </p>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
  num: {
    type: Number,
    default: 0,
  },
  isSpecial: {
    type: Boolean,
    default: false,
  },
})
</script>
<style lang="scss" scoped>
.tag-box {
  position: relative;
  width: 120rem;
  height: 56rem;
  padding: 6rem 10rem;
  box-sizing: border-box;
  background: url('@/assets/images/waterElec/bg-river-tag.png') no-repeat;
  background-size: contain;
  .img {
    position: absolute;
    width: 37rem;
    height: 25rem;
    bottom: 7rem;
  }
  .normal-img {
    left: -37rem;
  }
  .spe-img {
    right: -37rem;
    transform: rotateY(180deg);
  }
  .tag {
    p {
      color: rgba(255, 255, 255, 0.85);
      &:first-child {
        margin-bottom: 4rem;
        line-height: 16rem;
      }
      &:last-child {
        color: $font-normal;
        font-size: 12rem;
        vertical-align: bottom;
        white-space: nowrap;
      }
      .num {
        @include fillTextColor(
          linear-gradient(180deg, #0dfde0 0%, #1665ff 100%)
        );
        font-size: 16rem;
        margin-right: 4rem;
        line-height: 19rem;
      }
    }
  }
}
</style>
