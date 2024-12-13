<!--
 * @Description: 
 * @Date: 2024-11-26 15:45:04
 * @LastEditTime: 2024-11-26 15:53:30
-->
<template>
    <div class="title-box">
        <span class="title YOUSHE">{{ title }}</span>
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
.title-box {
    width: 620rem;
    height: 57rem;
    padding-left: 42rem;
    box-sizing: border-box;
    background: url('@/assets/images/bg-subtitle.png') no-repeat;
    background-size: contain;
    .title {
        @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
        font-size: 36rem;
        line-height: 48rem;
    }
}
</style>
