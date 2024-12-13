<!--
 * @Description: 
 * @Date: 2024-11-26 15:02:19
 * @LastEditTime: 2024-11-26 15:41:57
-->

<template>
    <div class="bg-map">
        <div class="img" :style="bgStyle" />
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
const props = defineProps({
  imgSrc: {
    type: String,
    default: "",
  },
})

const bgStyle = ref({
  background: `url(${props.imgSrc}) no-repeat`,
  backgroundSize: "contain",
})
</script>
<style lang="scss" scoped>
.bg-map {
  @include borderImg(url("@/assets/images/waterElec/bg-map-border.png"));
  width: 920rem;
  height: 780rem;
  padding: 48rem 0 0 63rem;
  box-sizing: border-box;
}
.img {
  width: 803rem;
  height: 700rem;
}
</style>
