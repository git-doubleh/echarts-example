<template>
    <div class="container full">
        <div class="item item01 animate__animated animate__slideInRight" :class="{ ' item-active': idx === 1 }">
            <span class="index YOUSHE">01</span>
            <span class="devider" />
            <div class="content">
                <div class="top">
                    <span class="orange">供</span>
                    <span> - 电力供给能力分析</span>
                </div>
                <div class="bottom">
                    <span>1/四川水电发电能力分析 2/四川新能源出力特性分析</span>
                </div>
            </div>
        </div>
        <div class="item item02 animate__animated animate__slideInRight" :class="{ ' item-active': idx === 2 }">
            <span class="index YOUSHE">02</span>
            <span class="devider" />
            <div class="content">
                <div class="top">
                    <span class="orange">需</span>
                    <span> - 电力需求预测研究</span>
                </div>
                <div class="bottom">
                    <span>1/产业发展及需求预测研究 2/四川降温负荷分析及电动汽车发展分析</span>
                </div>
            </div>
        </div>
        <div class="item item03 animate__animated animate__slideInRight" :class="{ ' item-active': idx === 3}">
            <span class="index YOUSHE">03</span>
            <span class="devider" />
            <div class="content">
                <div class="top">
                    <span class="orange">协同</span>
                    <span> - 电力供需平衡分析</span>
                </div>
                <div class="bottom">
                    <span>1/源网规划研究 2/网储规划研究</span>
                </div>
            </div>
        </div>
        <div class="item item04 animate__animated animate__slideInRight" :class="{ ' item-active': idx === 4 }">
            <span class="index YOUSHE">04</span>
            <span class="devider" />
            <div class="content">
                <div class="top">
                    <span class="orange">规划</span>
                    <span> - 电网发展规划</span>
                </div>
                <div class="bottom">
                    <span>1/主网规划成果 2/配网规划成果</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
defineProps({
  idx: {
    type: Number,
    default: 1,
  },
})
</script>
<style lang="scss" scoped>
.container {
  position: relative;
  background: url("@/assets/images/bg-page-category01.png") no-repeat;
  background-size: contain;
  .item {
    @include flex(row, flex-start, center);
    position: absolute;
    right: 208rem;
    width: 900rem;
    height: 144rem;
    padding: 0 24rem;
    border: 1px solid;
    box-sizing: border-box;
    border-image: linear-gradient(
        90deg,
        rgba(39, 90, 182, 1),
        rgba(72, 137, 255, 1)
      )
      1 1;
    .index {
      font-size: 36rem;
      @include fillTextColor();
    }
    .devider {
      display: inline-block;
      margin: 0 16rem;
      width: 2rem;
      height: 94rem;
      background: linear-gradient(
        180deg,
        rgba(13, 253, 224, 0) 0%,
        #0ee9e4 14%,
        #157dfa 84%,
        rgba(22, 101, 255, 0) 100%
      );
    }
    .content {
      .top {
        margin-bottom: 10rem;
        font-size: 28rem;
        color: #fff;
        text-align: start;
        line-height: 33px;
        .orange {
          color: $font-orange;
        }
      }
      .bottom {
        color: #e5fbff;
        line-height: 24px;
        font-size: 20rem;
      }
    }
  }
  .item-active {
    background: #004bb4;
  }
  .item01 {
    top: 237rem;
  }
  .item02 {
    top: 431rem;
    animation-delay: 200ms;
  }
  .item03 {
    top: 625rem;
    animation-delay: 300ms;
  }
  .item04 {
    bottom: 117rem;
    animation-delay: 400ms;
  }
}
</style>
