<!-- eslint-disable vue/no-v-html -->
<!--
 * @Description: 
 * @Date: 2024-11-07 09:45:44
 * @LastEditTime: 2025-01-21 09:45:11
-->
<template>
    <menu :class="[isMenuShow ? 'menu-show' : 'menu-hidden']">
        <img
            :src="isMenuShow ? arrowLeft : arrowRight"
            :class="[isMenuShow ? 'arrow-left' : 'arrow-right', 'arrow']"
            @click="isMenuShow = !isMenuShow"
        >
        <div v-for="(item, index) in routers" :key="index" class="menu-box">
            <div class="title">
                <img src="@/assets/images/magic-dot.png">
                <div class="text f-24 f-w600">
                    <template v-if="item.label.indexOf('-') > -1">
                        <span class="orange">{{
                            item.label.slice(0, item.label.indexOf("-"))
                        }}</span>
                        {{ item.label.slice(item.label.indexOf("-")) }}
                    </template>
                    <template v-else>
                        {{ item.label }}
                    </template>
                </div>
            </div>
            <div
                v-for="(it, idx) in item.children"
                :key="idx"
                class="sub-title f-w500 f-18"
                @click="pageTo(it.url)"
            >
                {{ it.label }}
            </div>
        </div>
        <div class="btn-box">
            <div class="btn" @click="toggleMethods('autoplay')">
                <span
                    :class="[
                        methodActive === 'autoplay' ? 'active' : 'normal',
                        'f-w500 f-18',
                    ]"
                >轮播模式</span>
            </div>
            <div class="btn" @click="toggleMethods('click')">
                <span
                    :class="[
                        methodActive === 'click' ? 'active' : 'normal',
                        'f-w500 f-18',
                    ]"
                >汇报模式</span>
            </div>
        </div>
    </menu>
</template>
<script setup lang="ts">
import { ref, defineEmits } from "vue"
const emits = defineEmits(["pageTo", "toggleMethods"])

const routers = ref([
  {
    label: "实验室概览",
    url: "",
    children: [
      {
        label: "实验基本情况",
        url: 0,
      },
    ],
  },
  {
    label: "供-电力供给能力分析",
    url: "",
    children: [
      {
        label: "四川水电发电能力分析",
        url: 2,
      },
      {
        label: "四川新能源出力特性分析",
        url: 6,
      },
    ],
  },

  {
    label: "需-电力需求预测分析",
    url: "",
    children: [
      {
        label: "产业发展及需求预测研究",
        url: 10,
      },
      {
        label: "四川降温负荷分析及电动汽车发展分析",
        url: 15,
      },
    ],
  },
  {
    label: "协同-电力供需平衡分析",
    url: "",
    children: [
      {
        label: "源网规划研究",
        url: 19,
      },
      {
        label: "网储规划研究",
        url: 20,
      },
    ],
  },
  {
    label: "规划-电网发展规划",
    url: "",
    children: [
      {
        label: "主网规划成果",
        url: 22,
      },
      {
        label: "配网规划成果",
        url: 29,
      },
    ],
  },
  {
    label: "成果与规划",
    url: "",
    children: [
      {
        label: "科创成果",
        url: 35,
      },
      {
        label: "发展规划",
        url: 36,
      },
    ],
  },
])
const arrowLeft = new URL("../../assets/images/arrow-left.png", import.meta.url)
  .href
const arrowRight = new URL(
  "../../assets/images/arrow-right.png",
  import.meta.url
).href

const isMenuShow = ref(false)
const methodActive = ref("click")

const pageTo = (url) => {
  emits("pageTo", url)
  isMenuShow.value = false
}

const toggleMethods = (methods: string) => {
  if (methodActive.value === methods) return
  methodActive.value = methods
  emits("toggleMethods", methods)
}
</script>
<style lang="scss" scoped>
menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 477rem;
  padding: 24rem 56rem 0 40rem;
  box-sizing: border-box;
  background: #202846;
  z-index: 4;
  transition: all ease-in 0.5s;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transform-origin: center;
    transition: all ease-in 0.6s;
    animation: scale ease 2s 100ms infinite;
    cursor: pointer;
  }
  .arrow-left {
    right: 0;
  }
  .arrow-right {
    right: -54rem;
  }
  .menu-box {
    margin-bottom: 20rem;
    .title {
      @include flex(row, start);
      margin-bottom: 16rem;
      .text {
        margin-left: 6rem;
        line-height: 28px;
        letter-spacing: 2px;
        color: #ffffff;
        .orange {
          color: #ffc24b;
        }
      }
    }
    .sub-title {
      height: 52rem;
      line-height: 52rem;
      width: 100%;
      margin-bottom: 8rem;
      padding-left: 18rem;
      box-sizing: border-box;
      background: #2d3555;
      cursor: pointer;
      color: #ffffff;
    }
  }
  .btn-box {
    @include flex(row, center);
    margin-top: 18rem;
    .btn {
      width: 138rem;
      height: 47rem;
      text-align: center;
      line-height: 47rem;
      cursor: pointer;
      transition: all 0.2s;
      background: url("@/assets/images/bg-menu-btn.png") no-repeat;
      background-size: contain;
      &:active {
        transform: scale(0.98);
      }
      &:first-child {
        margin-right: 32rem;
      }
    }
    .normal {
      @include fillTextColor(linear-gradient(180deg, #ffffff 48%, #003087 80%));
    }
    .btn:hover > span,
    .active {
      @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
    }
  }
}
.menu-show {
  left: 0;
}
.menu-hidden {
  left: -477rem;
}

@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(1);
  }
}
</style>
