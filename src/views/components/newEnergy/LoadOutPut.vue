<!--
 * @Description: 
 * @Date: 2024-10-22 14:41:56
 * @LastEditTime: 2024-12-05 16:17:21
-->
<template>
    <div class="side-content">
        <div class="content-part">
            <div class="tag blue f-18">
                丰水期
            </div>
            <div class="row-box">
                <div
                    v-for="(item, index) in result[0]"
                    :key="index"
                    class="row f-16 f-w500"
                >
                    <span class="label">{{ item.name }}</span>
                    <span class="text">{{ item.value.toFixed(2) }}</span>
                </div>
            </div>
        </div>
        <div class="content-part">
            <div class="tag orange f-18 f-w500">
                枯水期
            </div>
            <div class="row-box">
                <div
                    v-for="(item, index) in result[1]"
                    :key="index"
                    class="row f-16 f-w500"
                >
                    <span class="label">{{ item.name }}</span>
                    <span class="text">{{ item.value.toFixed(2) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    defineProps({
        result: {
            type: Array,
            default: () => []
        }
    })
</script>
<style lang="scss" scoped>
.side-content {
  @include flex();
  width: 100%;
  height: 202rem;
  padding: 13rem 10rem;
  box-sizing: border-box;
  border: 1px solid #5381d7;
  .content-part {
    @include flex();
    width: 48%;
    .blue {
      background-color: #2991ff;
    }
    .orange {
      background-color: #e18e19;
    }
    .tag {
      width: 36rem;
      height: 100%;
      padding: 40rem 10rem;
      line-height: 32rem;
      box-sizing: border-box;
      word-break: break-all;
      color: $font-normal;
    }
    .row-box {
      margin-left: 10rem;
      width: calc(100% - 10rem);
      .row {
        margin-bottom: 8rem;
        .label {
          display: inline-block;
          width: 75%;
          text-align: left;
          line-height: 28rem;
          color: #fff;
        }
        .text {
          color: #29cdff;
          line-height: 28rem;
          text-align: left;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
