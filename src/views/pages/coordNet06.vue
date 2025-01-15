<!--
 * @Description: 
 * @Date: 2024-10-29 14:34:59
 * @LastEditTime: 2024-11-29 10:18:23
-->
<template>
    <PageLayout title="四川配电网前沿研究与示范工程">
        <NavTitle title="【攀西片区】配网规划研究" />
        <div :class="[animatedCss, 'content']">
            <div class="left" />
            <div class="right part-border">
                <div class="row row1">
                    <div class="title YOUSHE">
                        区域特点
                    </div>
                    <div class="text f-18 f-w500">
                        分布式新能源资源丰富，但消纳能力有限。
                    </div>
                </div>
                <div class="row row2">
                    <div class="title YOUSHE">
                        示范工程
                    </div>
                    <div class="text f-18 f-w500">
                        新型能源体系示范区（在建）：统筹配电网容量、负荷增长及调节资源，常态化开展“网上电网”分布式光伏承载力评估工作，引导分布式光伏向可开放容量充足区域布局开发，加强电网建设，持续提升配网承载能力。
                    </div>
                </div>
                <div class="img-box">
                    <img src="@/assets/images/coordNet/part06.png" class="img1">
                    <img src="@/assets/images/coordNet/part05.png" class="img2">
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import NavTitle from "../components/mainNet/NavTitle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.content {
  display: flex;
  align-items: center;
  margin: 33rem 80rem 0 67rem;
  .left {
    width: 907rem;
    height: 770rem;
    margin-right: 30rem;
    background: url("@/assets/images/coordNet/map06.png") no-repeat;
    background-size: contain;
  }
  .right {
    width: 803rem;
    height: 800rem;
    padding: 35rem 24rem 0;
    box-sizing: border-box;
    .row {
      width: 100%;
      padding: 16rem 20rem;
      box-sizing: border-box;
      .title {
        margin-bottom: 8rem;
        font-size: 30rem;
        line-height: 35rem;
      }
      .text {
        color: $font-normal;
        line-height: 32rem;
        letter-spacing: 2px;
      }
    }
    .row1 {
      background: linear-gradient(
        90deg,
        rgba(74, 190, 255, 0.2),
        rgba(253, 188, 19, 0.3)
      );
      .title {
        color: #ff9f2e;
      }
    }
    .row2 {
      margin: 16rem 0;
      background: linear-gradient(
        90deg,
        rgba(74, 255, 255, 0.2),
        rgba(139, 120, 255, 0.3)
      );
      .title {
        color: #0dfdef;
      }
    }
    .img-box {
      @include flex();
      margin-top: 20rem;
      .img1 {
        width: 377rem;
        height: 436rem;
      }
      .img2 {
        width: 362rem;
        height: 436rem;
      }
    }
  }
}
</style>
