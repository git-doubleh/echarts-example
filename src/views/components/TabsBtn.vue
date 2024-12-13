<!--
 * @Description: 
 * @Date: 2024-11-27 10:00:36
 * @LastEditTime: 2024-12-13 15:26:27
-->
<template>
    <div class="tabs">
        <div
            v-for="(item, index) in tabs"
            :key="index"
            :class="[{ active: index === tabSelectedIdx }, 'item']"
            @click="handleClick(index)"
        >
            <span class="text f-18 f-w500 ALIBABAM">{{ item }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
  tabs: {
    type: Array,
    default: () => [],
  },
  tabSelectedIdx: {
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['tabCb'])

const handleClick = (index: number) => {
    emits('tabCb', index)
}
</script>
<style lang="scss" scoped>
.tabs {
  .item {
    @include borderImg(url("@/assets/images/newEnergy/bg-btn.png"));
    display: inline-block;
    margin-right: 12rem;
    width: 78rem;
    height: 40rem;
    line-height: 40rem;
    text-align: center;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    .text {
      @include fillTextColor(linear-gradient(180deg, #f5fcff 0%, #64d3eb 100%));
      opacity: 0.6;
      text-shadow: -2px 2px 8rem #0aa7ff;
    }
  }
  .active .text,
  .item:hover .text{
    opacity: 1;
  }
}
</style>
