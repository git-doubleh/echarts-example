<!--
 * @Description: 
 * @Date: 2022-06-23 11:49:22
 * @LastEditTime: 2025-03-05 11:21:54
-->
<template>
    <div class="app-container">
        <Menu @page-to="pageTo" @toggle-methods="toggleMethods" />
        <Swiper
            direction="vertical"
            :no-swiping="false"
            :modules="modules"
            :allow-touch-move="false"
            :autoplay="true"
            :mousewheel="{ mousewheel: false }"
            :virtual="{
                cache: false,
            }"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
        >
            <SwiperSlide v-for="(item, index) in swiperSlideListRender" :key="index">
                <component
                    :is="item"
                    animated-css="animate__animated animate__fadeInRight"
                />
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script lang="ts" setup>
import { ref, defineAsyncComponent, onMounted } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
// 引入swiper样式（按需导入）
import "swiper/css"
import "swiper/css/pagination" // 轮播图底面的小圆点
// 引入swiper核心和所需模块
import { Mousewheel, Pagination, Autoplay, Virtual } from "swiper/modules"
import { resize } from "@/utils/resize"
import Menu from "../components/Menu.vue"
const  baseExperiment = defineAsyncComponent(() => import("../pages/baseExperiment.vue"))
// import baseExperiment from "../pages/baseExperiment.vue"
const pageCategory01 = defineAsyncComponent(() => import("../pages/pageCategory01.vue")) 
// import pageCategory01 from "../pages/pageCategory01.vue"
const waterElectric01 = defineAsyncComponent(() => import("../pages/waterElectric01.vue")) 
// import waterElectric01 from "../pages/waterElectric01.vue"
const waterElectric02 = defineAsyncComponent(() => import("../pages/waterElectric02.vue"))
// import waterElectric02 from "../pages/waterElectric02.vue"
const waterElectric03 = defineAsyncComponent(() => import("../pages/waterElectric03.vue")) 
// import waterElectric03 from "../pages/waterElectric03.vue"
const waterElectric04 = defineAsyncComponent(() => import("../pages/waterElectric04.vue")) 
// import waterElectric04 from "../pages/waterElectric04.vue"
const newEnergy01 = defineAsyncComponent(() => import("../pages/newEnergy01.vue"))
// import newEnergy01 from "../pages/newEnergy01.vue"
const newEnergy02 = defineAsyncComponent(() => import("../pages/newEnergy02.vue")) 
// import newEnergy02 from "../pages/newEnergy02.vue"
const newEnergy03 = defineAsyncComponent(() => import("../pages/newEnergy03.vue")) 
// import newEnergy03 from "../pages/newEnergy03.vue"
import pageCategory02 from "../pages/pageCategory02.vue"
// import pageCategory02 from "../pages/pageCategory02.vue"
const assignNetwork01 = defineAsyncComponent(() => import("../pages/assignNetwork01.vue")) 
// import assignNetwork01 from "../pages/assignNetwork01.vue"
const assignNetwork02 = defineAsyncComponent(() => import("../pages/assignNetwork02.vue")) 
// import assignNetwork02 from "../pages/assignNetwork02.vue"
const pageCategory03 = defineAsyncComponent(() => import("../pages/pageCategory03.vue")) 
// import pageCategory03 from "../pages/pageCategory03.vue"
const supplyDemand01 = defineAsyncComponent(() => import("../pages/supplyDemand01.vue")) 
// import supplyDemand01 from "../pages/supplyDemand01.vue"
const supplyDemand02 = defineAsyncComponent(() => import("../pages/supplyDemand02.vue")) 
// import supplyDemand02 from "../pages/supplyDemand02.vue"
const supplyDemand03 = defineAsyncComponent(() => import("../pages/supplyDemand03.vue")) 
// import supplyDemand03 from "../pages/supplyDemand03.vue"
const energyCenter01 = defineAsyncComponent(() => import("../pages/energyCenter01.vue")) 
// import energyCenter01 from "../pages/energyCenter01.vue"
const energyCenter02 = defineAsyncComponent(() => import("../pages/energyCenter02.vue")) 
// import energyCenter02 from "../pages/energyCenter02.vue"
const energyCenter03 = defineAsyncComponent(() => import("../pages/energyCenter03.vue")) 
// import energyCenter03 from "../pages/energyCenter03.vue"
const energyCenter04 = defineAsyncComponent(() => import("../pages/energyCenter04.vue")) 
// import energyCenter04 from "../pages/energyCenter04.vue"
const energyCenter05 = defineAsyncComponent(() => import("../pages/energyCenter05.vue")) 
// import energyCenter05 from "../pages/energyCenter05.vue"
const pageCategory04 = defineAsyncComponent(() => import("../pages/pageCategory04.vue")) 
// import pageCategory04 from "../pages/pageCategory04.vue"
const mainNet01 = defineAsyncComponent(() => import("../pages/mainNet01.vue")) 
// import mainNet01 from "../pages/mainNet01.vue"
const mainNet02 = defineAsyncComponent(() => import("../pages/mainNet02.vue")) 
// import mainNet02 from "../pages/mainNet02.vue"
const mainNet03 = defineAsyncComponent(() => import("../pages/mainNet03.vue")) 
// import mainNet03 from "../pages/mainNet03.vue"
const mainNet04 = defineAsyncComponent(() => import("../pages/mainNet04.vue")) 
// import mainNet04 from "../pages/mainNet04.vue"
const mainNet05 = defineAsyncComponent(() => import("../pages/mainNet05.vue")) 
// import mainNet05 from "../pages/mainNet05.vue"
const mainNet06 = defineAsyncComponent(() => import("../pages/mainNet06.vue")) 
// import mainNet06 from "../pages/mainNet06.vue"
const mainNet07 = defineAsyncComponent(() => import("../pages/mainNet07.vue")) 
// import mainNet07 from "../pages/mainNet07.vue"
const coordNet01 = defineAsyncComponent(() => import("../pages/coordNet01.vue")) 
// import coordNet01 from "../pages/coordNet01.vue"
const coordNet02 = defineAsyncComponent(() => import("../pages/coordNet02.vue")) 
// import coordNet02 from "../pages/coordNet02.vue"
const coordNet03 = defineAsyncComponent(() => import("../pages/coordNet03.vue")) 
// import coordNet03 from "../pages/coordNet03.vue"
const coordNet04 = defineAsyncComponent(() => import("../pages/coordNet04.vue")) 
// import coordNet04 from "../pages/coordNet04.vue"
const coordNet05 = defineAsyncComponent(() => import("../pages/coordNet05.vue")) 
// import coordNet05 from "../pages/coordNet05.vue"
const coordNet06 = defineAsyncComponent(() => import("../pages/coordNet06.vue")) 
// import coordNet06 from "../pages/coordNet06.vue"
const innovations = defineAsyncComponent(() => import("../pages/innovations.vue")) 
// import innovations from "../pages/innovations.vue"
const experimentDevelop = defineAsyncComponent(() => import("../pages/experimentDevelop.vue")) 
// import experimentDevelop from "../pages/experimentDevelop.conste= () => import()
const modules = [Mousewheel, Pagination, Autoplay, Virtual]
// swiper实例
const homeSwiper = ref(null)
const swiperActiveIdex = ref(0)

const swiperSlideListRender = ref([
  baseExperiment,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
])
const swiperSlideList = ref([
  baseExperiment,
  pageCategory01,
  waterElectric01,
  waterElectric02,
  waterElectric03,
  waterElectric04,
  newEnergy01,
  newEnergy02,
  newEnergy03,
  pageCategory02,
  energyCenter01,
  energyCenter02,
  energyCenter03,
  energyCenter04,
  energyCenter05,
  assignNetwork01,
  assignNetwork02,
  pageCategory03,
  supplyDemand01,
  supplyDemand02,
  supplyDemand03,
  pageCategory04,
  mainNet01,
  mainNet03,
  mainNet04,
  mainNet05,
  mainNet06,
  mainNet07,
  mainNet02,
  coordNet01,
  coordNet02,
  coordNet03,
  coordNet04,
  coordNet05,
  coordNet06,
  innovations,
  experimentDevelop,
])

// 初始化
const onSwiper = (swiper) => {
  homeSwiper.value = swiper
}
// swiper切换时触发
const onSlideChange = (swiper) => {
  swiperActiveIdex.value = swiper.activeIndex

  setTimeout(() => {
    if (!swiperSlideListRender.value[swiperActiveIdex.value]) {
      swiperSlideListRender.value[swiperActiveIdex.value] =
        swiperSlideList.value[swiperActiveIdex.value]
    }
  }, 0)
  setTimeout(() => {
    swiperSlideListRender.value.forEach((it, idx) => {
      if (swiper.activeIndex != idx) {
        swiperSlideListRender.value[idx] = null
      }
    })
  }, 2000)
}

const pageTo = (idx: number): void => {
  homeSwiper.value.slideTo(idx)
}

const eventFunc = (event) => {
  // 38 上 40 下
  switch (event.keyCode) {
    case 38:
      homeSwiper.value.slidePrev()
      break
    case 40:
      homeSwiper.value.slideNext()
      break
  }
}
// 监听事件
const eventListener = () => {
  homeSwiper.value.autoplay.stop()
  window.addEventListener("keyup", eventFunc)
}
// 移除监听事件
const removeEventListener = () => {
  homeSwiper.value.autoplay.start()
  window.removeEventListener("keyup", eventFunc)
}

// 切换轮播方式
const toggleMethods = (methods: string): void => {
  switch (methods) {
    case "autoplay":
      removeEventListener()
      break
    case "click":
      eventListener()
      break
  }
}

onMounted(() => {
  resize()
  window.addEventListener("resize", resize, false)
  eventListener()
})
</script>
<style lang="scss" scoped>
.app-container {
  position: relative;
  width: 100%;
  height: 1080rem;
}
.swiper {
  width: 100%;
  height: 100%;
}
</style>
