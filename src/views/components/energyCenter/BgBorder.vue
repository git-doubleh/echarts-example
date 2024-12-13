<!--
 * @Description: 
 * @Date: 2024-12-09 09:45:16
 * @LastEditTime: 2024-12-13 10:10:13
-->
<template>
    <div :class="[size, 'bg-border']" :style="styleSheet">
        <span class="part-title YOUSHE f-24" v-html="renderTitle" />
        <span v-if="subTitle" class="sub-title YOUSHE">{{ subTitle }}</span>
        <slot />
    </div>
</template>
<script setup lang="ts">
import { reactive, h, computed } from "vue"

const props = defineProps({
  size: {
    type: String,
    default: "normal",
  },
  title: {
    type: String,
    default: "",
  },
  subTitle: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "",
  },
  height: {
    type: String,
    default: "",
  },
  paddingTop: {
    type: String,
    default: "23rem",
  },
  customStyle: {
    type: Object,
    default: () => null,
  },
})
const renderTitle = computed(() => {
  if (props.customStyle !== null) {
    let str = props.title
    const sliceStr = props.title.slice(
      props.customStyle.slice[0],
      props.customStyle.slice[1]
    )
    str = str.replace(
      new RegExp(sliceStr, "g"),
      `<span style="color:${props.customStyle.color}; -webkit-text-fill-color:initial;">${sliceStr}</span>`
    )
    return str
    // return h("span", null, str)
  }
  return props.title
})
const styleSheet = reactive({
  width: props.width,
  height: props.height,
  paddingTop: props.paddingTop,
})
</script>
<style lang="scss" scoped>
.bg-border {
  position: relative;
  padding-left: 12rem;
  .part-title {
    @include fillTextColor();
    line-height: 28rem;
    padding-left: 30rem;
  }
  .sub-title {
    position: absolute;
    right: 16rem;
    top: 28rem;
    @include fillTextColor();
    font-size: 14rem;
  }
}
.normal {
  @include borderImg(url("@/assets/images/bg-part-border01.png"));
}
.middle {
  @include borderImg(url("@/assets/images/bg-part-border02.png"));
}
.large {
  @include borderImg(url("@/assets/images/bg-part-border02.png"));
}
</style>
