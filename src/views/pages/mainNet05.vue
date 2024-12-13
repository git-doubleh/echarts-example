<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:26:32
-->
<template>
    <PageLayout title="主网发展规划技术应用">
        <NavTitle title="支撑川南立体双环构建分析" />
        <div :class="animatedCss">
            <div class="desc f-w500 f-22">
                基于<span class="orange">短路电流计算和潮流稳定分析</span>等主网规划技术，开展川南立体双环网架方案分析论证。依托<span
                    class="orange"
                >天府南特和川南特两座特高压</span>变电站，构建了4条相对独立的500千伏输电通道，两两组合形成<span
                    class="orange"
                >立体双环网</span>，构建的川南立体双环网架短路电流合理、潮流分布均衡、运行方式灵活。
            </div>
            <div class="content">
                <div class="left" />
                <div class="right">
                    <PartSubTitle title="短路电流计算结果" is-fill />
                    <div class="hr">
                        <span class="h-item item f-18 f-w500">变电站</span>
                        <span class="h-item item f-18 f-w500">网架优化前</span>
                        <span class="h-item item f-18 f-w500">立体双环</span>
                    </div>
                    <div v-for="(item, index) in tableData" :key="index" class="ht">
                        <span class="t-item item">{{ item.title }}</span>
                        <span class="t-item item">{{ item.before }}</span>
                        <span class="t-item item">{{ item.double }}</span>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/mainNet/NavTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})
const tableData = ref([
  {
    title: "泸州",
    before: 49.1,
    double: 47.6,
  },
  {
    title: "自贡西",
    before: 42.5,
    double: 45.3,
  },
  {
    title: "天府1#母线",
    before: 43.4,
    double: 50.2,
  },
  {
    title: "天府2#母线",
    before: 50.3,
    double: 50.2,
  },
])
</script>
<style lang="scss" scoped>
.desc {
  width: 1760rem;
  height: 124rem;
  margin: 30rem auto 40rem;
  padding: 22rem 32rem;
  box-sizing: border-box;
  line-height: 40px;
  letter-spacing: 3px;
  color: $font-normal;
  background: url("@/assets/images/mainNet/bg-desc2.png") no-repeat;
  background-size: contain;
  .orange {
    color: #ffc24b;
  }
}
.content {
  display: flex;
  margin: 0 80rem;
  .left {
    width: 808rem;
    height: 630rem;
    margin: 10rem 40rem 0 0;
    background: url("@/assets/images/mainNet/bg-part9.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 912rem;
    height: 640rem;
    padding: 320rem 40rem 0;
    box-sizing: border-box;
    background: url("@/assets/images/mainNet/bg-part10.png") no-repeat;
    background-size: contain;
    .hr {
      @include flex();
      margin-top: 15rem;
      padding-left: 32rem;
      background: linear-gradient(90deg, #0350c4 0%, #009fd2 100%);
      .h-item {
        height: 48rem;
        line-height: 48rem;
      }
    }
    .ht {
      @include flex();
      margin-top: 10rem;
      padding-left: 32rem;
      background: rgba(68, 188, 255, 0.12);
      .t-item {
        height: 42rem;
        line-height: 42rem;
      }
    }
    .item {
      display: inline-flex;
      flex: 1;
      text-align: left;
      color: #fff;
      letter-spacing: 2px;
    }
  }
}
</style>
