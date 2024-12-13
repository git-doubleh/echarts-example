<!--
 * @Description: 
 * @Date: 2024-10-15 15:20:38
 * @LastEditTime: 2024-11-28 14:12:29
-->
<template>
    <div class="title YOUSHE">
        <img :src="getImgSrc" alt="title">
        <span :class="[isLetter, 'text']">{{ title }}</span>
    </div>
</template>
<script lang="ts" setup>
import { computed, defineProps } from "vue"
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
})

const getImgSrc = `images/animate-page-title.svg?${new Date().getTime()}`

const isLetter = computed(() => {
  const len = props.title.length
  if (len <= 8) {
    return "letter-7"
  } else if (len <= 12) {
    return "letter-5"
  } else {
    return ""
  }
})
</script>

<style lang="scss" scoped>
.title {
  position: relative;
  width: 1920rem;
  height: 76rem;
  padding-top: 9rem;
  text-align: center;
  img {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .text {
    font-size: 44rem;
    line-height: 52rem;
    @include fillTextColor(linear-gradient(180deg, #ffffff 50%, #6ac9ff 70%));
  }
  .letter-7 {
    letter-spacing: 7px;
  }
  .letter-5 {
    letter-spacing: 5px;
  }
  .letter-3 {
    letter-spacing: 3px;
  }
}
</style>
