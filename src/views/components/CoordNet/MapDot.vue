<!--
 * @Description:
 * @Date: 2025-01-20 16:22:35
 * @LastEditTime: 2025-01-20 16:34:39
-->
<template>
    <img
        src="@/assets/images/coordNet/dot.svg"
        class="dot"
        :style="posi"
        srcset=""
    >
</template>
<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  posi: {
    type: Object,
    default: () => {
      return {
        left: 0,
        top: 0,
      }
    },
  },
})

</script>
<style lang="scss" scoped>
.dot {
  position: absolute;
  z-index: 2;
}
</style>
