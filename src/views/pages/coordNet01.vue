<!--
 * @Description: 
 * @Date: 2024-10-31 09:33:03
 * @LastEditTime: 2025-01-20 16:34:54
-->
<template>
    <PageLayout title="四川配电网差异化特征">
        <div :class="[animatedCss, 'container']">
            <div class="desc">
                <div class="title YOUSHE">
                    差异化特征
                </div>
                <div class="desc-content f-22 f-w500">
                    四川地理幅员辽阔、地形条件复杂、经济发展极不平衡，造成地区电网发展水平差异显著，具有从A+
                    至
                    E所有供电区域分类，尤其以成都为代表的中部平原地区与甘孜阿坝为代表的川西藏区，在网架结构、供电能力、供电可靠性等方面发展水平有较大差异。
                </div>
            </div>
            <img src="@/assets/images/coordNet/map01.png" class="map">
            <MapDot
                :posi="{
                    left: '810rem',
                    bottom: '458rem'
                }"
            />
            <MapDot
                :posi="{
                    left: '911rem',
                    bottom: '180rem'
                }"
            />
            <div class="bg-animate" />

            <div class="tool-part part1">
                <div class="title YOUSHE">
                    成都平原
                </div>
                <div class="cont f-18 f-w500">
                    负荷水平<span class="orange">高且增速快</span>，电网<span
                        class="orange"
                    >结构坚强</span>，产业发展对供电品质要求较高
                </div>
            </div>
            <div class="tool-part part2">
                <div class="title YOUSHE">
                    川西片区
                </div>
                <div class="cont f-18 f-w500">
                    <span class="orange">地广人稀</span> 且<span class="orange">消洁能源富集</span>，以<span class="orange">农牧业和居民</span>负荷为主，负荷增速慢
                </div>
            </div>
            <div class="tool-part part3">
                <div class="title YOUSHE">
                    攀西片区
                </div>
                <div class="cont f-18 f-w500">
                    分布式<span class="orange">新能源资源丰富</span>，需要保障地区消纳能力
                </div>
            </div>
            <div class="tool-part part4">
                <div class="title YOUSHE">
                    川东北片区
                </div>
                <div class="cont f-18 f-w500">
                    <span class="orange">春节返乡</span>引起季节性负荷激增，存在近期接收的小水电供区
                </div>
            </div>
            <div class="tool-part part5">
                <div class="title YOUSHE">
                    川南片区
                </div>
                <div class="cont f-18 f-w500">
                    密集<span class="orange">工业园区和大量农网</span>地区共存，新增工业点负荷发展速度快
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import PageLayout from "../components/pageLayout.vue"
import MapDot from "../components/CoordNet/MapDot.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  height: calc(100% - 85rem);
  padding: 30rem 0 0 80rem;
  box-sizing: border-box;
  .desc {
    width: 1753rem;
    height: 182rem;
    padding: 28rem;
    box-sizing: border-box;
    background: url("@/assets/images/coordNet/bg-border01.png") no-repeat;
    background-size: contain;
    .title {
      @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
      margin-bottom: 12rem;
      letter-spacing: 3rem;
      line-height: 38rem;
      font-size: 32rem;
    }
    .desc-content {
      color: $font-normal;
      line-height: 36rem;
      letter-spacing: 2px;
    }
  }
  .map {
    position: absolute;
    bottom: 65rem;
    left: 480rem;
    z-index: 2;
  }
  .bg-animate {
    position: absolute;
    bottom: 115rem;
    left: 581rem;
    width: 634rem;
    height: 634rem;
    background: url("@/assets/icons/animate-circle.svg") no-repeat;
    background-size: contain;
    z-index: 1;
  }
  .tool-part {
    position: absolute;
    width: 376rem;
    height: 178rem;
    padding: 42rem 27rem 0 31rem;
    background: url("@/assets/images/coordNet/bg-tooltip-376.png") no-repeat;
    background-size: contain;
    box-sizing: border-box;
    .title {
      @include fillTextColor(linear-gradient(180deg, #f5fcff 0%, #64d3eb 100%));
      margin-bottom: 4rem;
      line-height: 42rem;
      font-size: 36rem;
    }
    .cont {
      color: $font-normal;
      line-height: 32rem;
      letter-spacing: 2rem;
    }
  }
  .part1 {
    top: 254rem;
    left: 80rem;
  }
  .part2 {
    top: 490rem;
    left: 80rem;
  }
  .part3 {
    bottom: 112rem;
    left: 80rem;
  }
  .part4 {
    bottom: 492rem;
    right: 80rem;
  }
  .part5 {
    bottom: 230rem;
    right: 80rem;
  }
}
</style>
