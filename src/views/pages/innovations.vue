<!--
 * @Description: 
 * @Date: 2024-11-05 09:10:44
 * @LastEditTime: 2024-12-13 16:18:51
-->
<template>
    <PageLayout title="科技创新成果">
        <div :class="animatedCss">
            <div class="nav">
                <img src="@/assets/images/innovations/aside-left.png" class="aside-img">
                <div v-for="(item, index) in navList" :key="index" class="item">
                    <div class="value PANGMEN">
                        {{ item.value }}
                    </div>
                    <div class="label f-w500 f-24">
                        {{ item.label }}
                    </div>
                </div>
                <img
                    src="@/assets/images/innovations/aside-right.png"
                    class="aside-img"
                >
            </div>
            <div class="content">
                <div class="scroll-box">
                    <div class="scroll-item scroll-margin">
                        <PartSubTitle title="获奖展示" is-fill />
                        <Swiper
                            :autoplay="true"
                            :modules="modules"
                            :allow-touch-move="false"
                            :mousewheel="{ mousewheel: false }"
                        >
                            <SwiperSlide v-for="(it, idx) in awardList" :key="idx">
                                <img
                                    v-for="(item, index) in it"
                                    :key="index"
                                    :src="item"
                                    class="img"
                                >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="scroll-item scroll-margin">
                        <PartSubTitle title="专利展示" is-fill="" />
                        <Swiper
                            :autoplay="true"
                            :modules="modules"
                            :allow-touch-move="false"
                            :mousewheel="{ mousewheel: false }"
                        >
                            <SwiperSlide v-for="(it, idx) in patentList" :key="idx">
                                <img
                                    v-for="(item, index) in it"
                                    :key="index"
                                    :src="item"
                                    class="img"
                                >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="scroll-item">
                        <PartSubTitle title="荣誉展示" is-fill="" />
                        <Swiper
                            :autoplay="true"
                            :modules="modules"
                            :allow-touch-move="false"
                            :mousewheel="{ mousewheel: false }"
                        >
                            <SwiperSlide v-for="(it, idx) in honorList" :key="idx">
                                <img
                                    v-for="(item, index) in it"
                                    :key="index"
                                    :src="item"
                                    class="img"
                                >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div class="scroll-item">
                        <PartSubTitle title="论文展示" is-fill="" />
                        <Swiper
                            :autoplay="true"
                            :modules="modules"
                            :allow-touch-move="false"
                            :mousewheel="{ mousewheel: false }"
                        >
                            <SwiperSlide v-for="(it, idx) in thesisList" :key="idx">
                                <img
                                    v-for="(item, index) in it"
                                    :key="index"
                                    :src="item"
                                    class="img"
                                >
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
// 引入swiper样式（按需导入）
import "swiper/css"
import "swiper/css/pagination" // 轮播图底面的小圆点
// 引入swiper核心和所需模块
import { Mousewheel, Autoplay } from "swiper/modules"

import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
const modules = [Mousewheel, Autoplay]

defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})

const importImgFunc = (src) => {
  return `images${src}`
}

const navList = ref([
  {
    label: "成果获奖",
    value: 32,
  },
  {
    label: "承担项目",
    value: 14,
  },
  {
    label: "授权专利",
    value: 44,
  },
  {
    label: "发表论文",
    value: 67,
  },
])

const awardList = ref([])
const patentList = ref([])
const thesisList = ref([])
const honorList = ref([])

const pushAward = () => {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push(importImgFunc(`/award/image${i}.png`))
    if (i % 5 === 0) {
      awardList.value.push(arr)
      arr = []
    }
  }
}

const pushPatent = () => {
  let arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push(importImgFunc(`/patent/image${i}.png`))
    if (i % 5 === 0) {
      patentList.value.push(arr)
      arr = []
    }
  }
}

const pushThesis = () => {
  let arr = []
  for (let i = 1; i <= 20; i++) {
    arr.push(importImgFunc(`/thesis/image${i}.png`))
    if (i % 5 === 0) {
      thesisList.value.push(arr)
      arr = []
    }
  }
}

const pushHonor = () => {
  let arr = []
  for (let i = 1; i <= 5; i++) {
    arr.push(importImgFunc(`/honor/image${i}.png`))
    if (i % 5 === 0) {
      honorList.value.push(arr)
      arr = []
    }
  }
}

onMounted(() => {
  pushAward()
  pushPatent()
  pushThesis()
  pushHonor()
})
</script>
<style lang="scss" scoped>
.swiper {
  width: 100%;
}
.nav {
  @include flex(row, start);
  padding: 0 100rem;
  margin-bottom: 11rem;
  .aside-img {
    width: 116rem;
    height: 227rem;
    margin-top: 22rem;
  }
  .item {
    align-self: start;
    width: 200rem;
    height: 232rem;
    padding-top: 36rem;
    box-sizing: border-box;
    background: url("@/assets/images/innovations/bg-item.png") no-repeat;
    background-size: contain;
    margin-right: 200rem;
    &:first-of-type {
      margin-left: 44rem;
      .value,
      .label {
        animation: jump 2.5s ease-in infinite;
      }
    }
    &:nth-child(3) {
      .value,
      .label {
        animation: jump 2.5s ease-in 400ms infinite;
      }
    }
    &:nth-child(4) {
      .value,
      .label {
        animation: jump 2.5s ease-in 800ms infinite;
      }
    }
    &:last-of-type {
      margin-right: 44rem;
      .value,
      .label {
        animation: jump 2.5s ease-in 1.2s infinite;
      }
    }
    .value {
      margin-bottom: 6rem;
      color: #0dfdef;
      line-height: 47rem;
      text-align: center;
      font-size: 40px;
    }
    .label {
      color: #0dfdef;
      letter-spacing: 2px;
      text-align: center;
    }
  }
}

.content {
  width: 1820rem;
  height: 686rem;
  margin: 0 auto;
  padding: 40rem;
  box-sizing: border-box;
  background: url("@/assets/images/innovations/bg-border.png") no-repeat;
  background-size: contain;
  .scroll-box {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    .scroll-margin {
      margin-bottom: 42rem;
    }
    .scroll-item {
      display: inline-block;
      width: calc(50% - 36rem);
      .img {
        display: inline-block;
        width: 155rem;
        height: 228rem;
        border: 1px solid red;
        margin-right: 10rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
