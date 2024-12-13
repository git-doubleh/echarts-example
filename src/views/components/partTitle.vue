<!--
 * @Description: 
 * @Date: 2024-10-17 09:11:49
 * @LastEditTime: 2024-10-17 09:16:08
-->
<template>
    <span class="title YOUSHE sameTitle f-24">{{ title }}</span>
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
.sameTitle {
  @include fillTextColor();
  position: absolute;
  left: 42rem;
  top: 27rem;
  line-height: 28rem;
}
</style>
