<!--
 * @Description: 
 * @Date: 2022-11-10 09:34:24
 * @LastEditTime: 2022-11-10 14:53:14
-->
<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :xlink:href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
  import { computed } from "vue"

  const props = defineProps({
    prefix: { type: String, default: "icon" },
    iconClass: { type: String, required: true },
    className: { type: String },
    color: { type: String, default: "" }
  })

  const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`)

  const svgClass = computed(() => {
    if (props.className) {
      return `${props.className} svg-icon`
    }
    return "svg-icon"
  })
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }
</style>
