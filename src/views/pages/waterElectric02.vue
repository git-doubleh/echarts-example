<!--
 * @Description: 
 * @Date: 2024-10-17 14:48:49
 * @LastEditTime: 2024-11-29 10:41:03
-->
<template>
    <PageLayout title="四川水电发电能力分析">
        <div :class="animatedCss">
            <div class="nav">
                <PageSubTitle title="不同来水情况对水电发电能力的影响" />
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
                    <div class="desc f-w500 f-20">
                        以年为计算周期，月为计算时段，构建四川梯级水电联合优化模型，挖掘四川电网统调水电站出力耦合关系，评估丰、平、枯、特枯不同来水情况对水电供应能力的影响，形成考虑补偿调节的水电出力特性曲线。
                    </div>
                    <div class="margin">
                        <PartSubTitle title="各大江流域发电分析" />
                    </div>
                    <ChartLine02 :chart-data="chartLineData" />
                </div>
                <div class="bg-map">
                    <div :class="[waterBgIdx, 'img']" />
                    <div class="river river1">
                        <RiverTag :num="RIVIERSYEARPOWERDATA[btnCheckedIdx][0]" :is-special="true" />
                    </div>
                    <div class="river river2">
                        <RiverTag :num="RIVIERSYEARPOWERDATA[btnCheckedIdx][1]" />
                    </div>
                    <div class="river river3">
                        <RiverTag :num="RIVIERSYEARPOWERDATA[btnCheckedIdx][2]" />
                    </div>
                    <div class="river river4">
                        <RiverTag :num="RIVIERSYEARPOWERDATA[btnCheckedIdx][3]" />
                    </div>
                    <div class="river river5">
                        <RiverTag :num="RIVIERSYEARPOWERDATA[btnCheckedIdx][4]" />
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import PageSubTitle from "../components/pageSubTitle.vue"
import ChartLine02 from "../components/waterElec/ChartLine02.vue"
import RiverTag from "../components/waterElec/RiverTag.vue"
import {
  JINSAJIANGPOWERDATA,
  YALONGJIANGPOWERDATA,
  DADUHEPOWERDATA,
  MINJIANGPOWERDATA,
  JIALINGJIANGPOWERDATA,
  RIVIERSYEARPOWERDATA
} from "../components/waterElec/config"

defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})

const btnCheckedIdx = ref(2)
const navBtnList = ref(["特枯年", "枯水年", "平水年", "丰水年"])

let chartLineData = ref([])

const waterBgIdx = computed(() => {
  return `img${btnCheckedIdx.value + 1}`
})

// 渲染图表数据
const renderData = () => {
  chartLineData.value = [
    {
      name: "金沙江",
      data: JINSAJIANGPOWERDATA[btnCheckedIdx.value],
      type: "line",
      itemStyle: {
        color: "#2BE6FF",
      },
    },
    {
      name: "雅砻江",
      data: YALONGJIANGPOWERDATA[btnCheckedIdx.value],
      type: "line",
      itemStyle: {
        color: "#64FF99",
      },
    },
    {
      name: "大渡河",
      data: DADUHEPOWERDATA[btnCheckedIdx.value],
      type: "line",
      itemStyle: {
        color: "#FFE249",
      },
    },
    {
      name: "岷江",
      data: MINJIANGPOWERDATA[btnCheckedIdx.value],
      type: "line",
      itemStyle: {
        color: "#88FF2B",
      },
    },
    {
      name: "嘉陵江",
      data: JIALINGJIANGPOWERDATA[btnCheckedIdx.value],
      type: "line",
      itemStyle: {
        color: "#2BBFFF",
      },
    },
  ]
}

// 切换类型
const handleTab = (it, idx) => {
  if (idx === btnCheckedIdx.value) return
  btnCheckedIdx.value = idx
  renderData()
}

onMounted(() => {
  setTimeout(() => {
    renderData()
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
      @include borderImg(url('@/assets/images/waterElec/btn.png'));
    }
    .active,
    .btn:hover {
      
      @include borderImg(url('@/assets/images/waterElec/btned.png'));
    }
    .btn {
      width: 161rem;
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
    padding: 40rem 26rem;
    box-sizing: border-box;
    .desc {
      @include borderImg(url('@/assets/images/waterElec/bg-text.png'));
      width: 750rem;
      height: 181rem;
      padding: 30rem 20rem;
      box-sizing: border-box;
      line-height: 40rem;
      letter-spacing: 2px;
      text-align: left;
      color: $font-normal;
    }
    .margin {
      margin: 30rem 0 12rem;
    }
  }
  .bg-map {
    position: relative;
    @include borderImg(url('@/assets/images/waterElec/bg-map-border.png'));
    width: 920rem;
    height: 780rem;
    padding: 48rem 0 0 63rem;
    box-sizing: border-box;
  }
  .img {
    width: 803rem;
    height: 700rem;
  }
  .img1 {
    background: url("@/assets/icons/water1.svg") no-repeat;
    background-size: contain;
  }
  .img2 {
    background: url("@/assets/icons/water2.svg") no-repeat;
    background-size: contain;
  }
  .img3 {
    background: url("@/assets/icons/water3.svg") no-repeat;
    background-size: contain;
  }
  .img4 {
    background: url("@/assets/icons/water4.svg") no-repeat;
    background-size: contain;
  }

  .river {
    position: absolute;
  }
  .river1 {
    top: 234rem;
    left: 23rem;
  }
  .river2 {
    top: 117rem;
    left: 209rem;
  }
  .river3 {
    top: 142rem;
    left: 372rem;
  }
  .river4 {
    top: 107rem;
    right: 262rem;
  }
  .river5 {
    top: 137rem;
    right: 98rem;
  }
}
</style>
