<!--
 * @Description: 
 * @Date: 2024-10-17 09:38:48
 * @LastEditTime: 2024-11-29 10:12:46
-->
<template>
    <div class="page-container full">
        <TitleTop :title="title" />
        <slot />
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import TitleTop from "../components/titleTop.vue"
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>
<style lang="scss" scoped>
.page-container {
  position: relative;
  background: url("@/assets/images/bg-page.png") no-repeat;
  background-size: contain;
}
</style>
