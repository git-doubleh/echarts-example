<template>
    <PageLayout title="四川水电发电能力分析">
        <div :class="animatedCss">
            <div class="nav">
                <PageSubTitle title="龙头水库对水电发电能力的影响" />
                <div class="btn-list">
                    <div
                        v-for="(item, index) in navBtnList"
                        :key="index"
                        :class="[btnCheckedIdx == index ? 'active' : 'normal', 'btn']"
                        @click="handleTab(item, index)"
                    >
                        <span class="text f-24 YOUSHE">{{ item }}</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="left part-border">
                    <div class="desc f-w500 f-18">
                        跟踪双江口、叶巴滩、岗托等龙头水库开发进程，动态调整水力联系数字拓扑，量化评估大型调节性水库电站对下游电站、所在流域乃至全网水电发电能力的影响。
                    </div>
                    <div class="margin">
                        <PartSubTitle title="大渡河梯级水电群逐月发电量" />
                    </div>
                    <ChartBar03 :chart-data="chartBarData" />
                    <div class="margin">
                        <PartSubTitle
                            :title="
                                btnCheckedIdx === 0
                                    ? '大渡河梯级水电群丰枯平发电量占比'
                                    : '大渡河梯级水电群丰枯平发电量占比对比'
                            "
                        />
                    </div>
                    <ChartPie03 v-if="btnCheckedIdx === 0" :chart-data="chartPieData" />
                    <ChartPie04 v-else :chart-data="chartPiesData" />
                </div>

                <BgMap :img-src="imgSrc" />
                <div v-if="btnCheckedIdx === 1" class="sjk-img" />
            </div>
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import PageSubTitle from "../components/pageSubTitle.vue"
import BgMap from "../components/waterElec/BgMap.vue"
import ChartBar03 from "../components/waterElec/ChartBar03.vue"
import ChartPie03 from "../components/waterElec/ChartPie03.vue"
import ChartPie04 from "../components/waterElec/ChartPie04.vue"
import {
  DADUHECASCADEBEFOREDATA,
  DADUHECASCADEAFTERDATA,
} from "../components/waterElec/config"
defineProps({
  animatedCss: {
    type: String,
    default: "",
  },
})

const imgSrc = new URL("../../assets/icons/sjk-water-map.svg", import.meta.url)
  .href
const btnCheckedIdx = ref(0)
const navBtnList = ref(["双江口投产前", "双江口投产后"])

let chartPieData = ref([])
let chartPiesData = ref([])
let chartBarData = ref([])

// 占比
const pieBeforeData = [
  {
    value: "467.78",
    name: "丰（6-10月）",
    percent: "64.4%",
    itemStyle: {
      color: "#1D78FF",
    },
  },
  {
    value: "84.45",
    name: "平（5，11月）",
    percent: "11.6%",
    itemStyle: {
      color: "#17C8E0",
    },
  },
  {
    value: "174.17",
    name: "枯（12-4月）",
    percent: "24.0%",
    itemStyle: {
      color: "#4F34F3",
    },
  },
]
const pieAfterData = [
  {
    value: "430.88",
    name: "丰（6-10月）",
    percent: "59.1%",
    itemStyle: {
      color: "#1D78FF",
    },
  },
  {
    value: "91.20",
    name: "平（5，11月）",
    percent: "12.5%",
    itemStyle: {
      color: "#17C8E0",
    },
  },
  {
    value: "207.39",
    name: "枯（12-4月）",
    percent: "28.4%",
    itemStyle: {
      color: "#4F34F3",
    },
  },
]

const handleTab = (it, idx) => {
  if (idx === btnCheckedIdx.value) return
  btnCheckedIdx.value = idx
  if (idx === 0) {
    chartPieData.value = []
    chartBarData.value = [
      {
        name: "",
        data: DADUHECASCADEBEFOREDATA,
        itemColor: ["rgba(29, 190, 255, 0)", "rgba(38, 193, 255, 1)"],
      },
    ]
    setTimeout(() => {
      chartPieData.value = pieBeforeData
    }, 100)
  } else {
    chartBarData.value = [
      {
        name: "双江口投前",
        data: DADUHECASCADEBEFOREDATA,
        itemColor: ["rgba(29, 190, 255, 0)", "rgba(38, 193, 255, 1)"],
      },
      {
        name: "双江口投产后",
        data: DADUHECASCADEAFTERDATA,
        itemColor: ["rgba(13, 253, 239, 0)", "rgba(13, 253, 239, 1)"],
      },
    ]
    setTimeout(() => {
      chartPiesData.value = [pieBeforeData, pieAfterData]
    }, 100)
  }
}

onMounted(() => {
  setTimeout(() => {
    chartPieData.value = pieBeforeData
    chartBarData.value = [
      {
        name: "",
        data: DADUHECASCADEBEFOREDATA,
        itemColor: ["rgba(29, 190, 255, 0)", "rgba(38, 193, 255, 1)"],
      },
    ]
  }, 100)
})
</script>
<style lang="scss" scoped>
.nav {
  @include flex();
  padding: 40rem 80rem 0;
  .btn-list {
    @include flex(row, center);
    .normal {
      @include borderImg(url("@/assets/images/waterElec/btn.png"));
    }
    .active,
    .btn:hover {
      @include borderImg(url("@/assets/images/waterElec/btned.png"));
    }
    .btn {
      width: 225rem;
      height: 53rem;
      text-align: center;
      line-height: 53rem;
      margin-right: 30rem;
      cursor: pointer;
      &:last-child {
        margin-right: 0;
      }
      .text {
        @include fillTextColor(
          linear-gradient(180deg, #ffffff 20%, #6ac9ff 100%)
        );
        text-shadow: -2px 2px 22px #0aa7ff;
      }
    }
  }
}
.content {
  @include flex();
  margin: 37rem 80rem 0;
  .left {
    width: 804rem;
    height: 780rem;
    padding: 40rem 26rem 10rem;
    box-sizing: border-box;
    .desc {
      @include borderImg(url("@/assets/images/waterElec/bg-text.png"));
      width: 750rem;
      height: 156rem;
      padding: 24rem 20rem;
      box-sizing: border-box;
      line-height: 36rem;
      letter-spacing: 2px;
      text-align: left;
      color: $font-normal;
    }
    .margin {
      margin: 30rem 0 12rem;
    }
  }
  .img {
    width: 920rem;
    height: 780rem;
  }
  .sjk-img {
    position: absolute;
    bottom: 608rem;
    right: 482rem;
    width: 134rem;
    height: 28rem;
    background: url("@/assets/images/waterElec/sjk.png") no-repeat;
    background-size: contain;
    animation: scaleImg ease-in-out 0.6s;
  }
  @keyframes scaleImg {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
