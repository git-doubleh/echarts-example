<!--
 * @Description: 
 * @Date: 2024-10-17 10:05:48
 * @LastEditTime: 2025-01-09 16:57:50
-->
<template>
    <div class="box">
        <Swiper
            :no-swiping="true"
            :modules="modules"
            :autoplay="true"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slide-change="onSlideChange"
        >
            <SwiperSlide v-for="(item, index) in data" :key="index">
                <p class="label f-22 f-w500">
                    {{ item.label }}
                </p>
                <p class="text f-18 f-w500">
                    {{ item.text }}
                </p>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup lang="ts">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue"
// 引入swiper样式（按需导入）
import "swiper/css"
import "swiper/css/pagination" // 轮播图底面的小圆点
// 引入swiper核心和所需模块
import { Pagination, Autoplay } from "swiper/modules"
const modules = [Pagination, Autoplay]

const data = ref([
  {
    label: "研究背景",
    text: "作为国网供区唯一的高比例水电为主电力系统，四川水电装机超1亿千瓦，占全部电源装机比例接近80%，水电发电能力对电力供应安全具有支撑保障作用。考虑未来四川新能源与水电共用输电通道送出，水电发电能力测算结果将为电力供需平衡分析及新能源消纳测算提供数据基础。",
  },
  {
    label: "研究方法",
    text: "全面搜集四川电网2025、2030年统调水电站基本参数和逐月来水过程，采用森林结构描述四川电网统调大型水电站水力联系并进行数字化，构建涵盖逾300座不同调节性能水电站的水力联系数字拓扑，为水电联合优化计算奠定数据基础。",
  },
])
</script>
<style lang="scss" scoped>
.box {
  @include borderImg(url('@/assets/images/waterElec/bg-text.png'));
  width: 750rem;
  height: 240rem;
  padding: 20rem 24rem 16rem;
  box-sizing: border-box;
  .swiper {
    width: 100%;
    height: 100%;
    .label {
      @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
      margin-bottom: 10rem;
      line-height: 26rem;
      letter-spacing: 2px;
    }
    .text {
      line-height: 36rem;
      letter-spacing: 2px;
      color: $font-normal;
      text-align: left;
    }

    :deep(.swiper-pagination-bullet) {
      width: 60rem !important;
      height: 6rem !important;
      border-radius: 8rem !important;
    }
    :deep(.swiper-pagination-bullet-active) {
      background: linear-gradient(181deg, #0dfde0 0%, #1665ff 100%) !important;
    }
  }
}
</style>
