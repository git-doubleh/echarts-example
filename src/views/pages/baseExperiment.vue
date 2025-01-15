<!--
 * @Description: 
 * @Date: 2024-10-15 15:16:53
 * @LastEditTime: 2025-01-15 09:30:20
-->
<template>
    <PageLayout title="实验室基本情况">
        <div :class="[animatedCss, 'content']">
            <div class="one top">
                <PartTitle title="实验室简介" />
                <span class="text sameText f-16 f-w500">国网四川省电力公司电力供需协同规划实验室于2024年1月成立。作为四川经研院首批成立的省公司实验室，电力供需协同规划实验室聚焦引导各地市电网科学规划、多元电源合理布局，是服务公司业务高质量发展，推动“双创新”、打造“双典范”、实现“双一流”的重要支撑。</span>
            </div>
            <div class="two top">
                <PartTitle title="研究方向" />
                <div class="rich">
                    <div class="label f-18 f-w500">
                        电力供需协同规划
                    </div>
                    <div class="text sameText f-16 f-w500">
                        以电力供需协同规划技术为核心，围绕电力需求预测、电力供给分析、供需平衡分析、电网发展规划关键技术及应用开展攻关。
                    </div>
                </div>
                <div class="svg" />
            </div>
            <div class="three top">
                <PartTitle title="人员构成" />
                <div class="rich">
                    <div class="label f-18 f-w500">
                        实验室团队规模
                    </div>
                    <div class="text sameText f-16 f-w500">
                        实验室团队共35人，其中获得博士学位的有18人，占比超50%。天府青城计划人才1人、国网公司青年托举人才1人、省公司高级专家1人、教授级高级工程师3人、省公司青年托举3人、电力雏鹰7人。
                    </div>
                </div>
                <div class="pie">
                    <div class="num YOUSHE f-22">
                        {{ pieData.reduce((o, n) => o + +n.value, 0) }}人
                    </div>
                    <PieCircle :chart-data="pieData" />
                </div>
            </div>
            <div class="bottom">
                <PartTitle title="重点业绩" />
                <div class="box">
                    <div class="part">
                        <PartSubTitle title="科研创新" />
                        <div class="part-content part1">
                            <div class="item">
                                <img src="@/assets/images/experiment/tip0.png" class="img">
                                <span class="text f-16 f-w500">国网总部科技项目—考虑分布式清洁能源与电力交通融合的“水光充储”配电网联合规划</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip0.png" class="img">
                                <span class="text f-16 f-w500">国家自然科学基金面上项目—双碳战略下多域异构微网负荷频率分层安全协同控制</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip0.png" class="img">
                                <span class="text f-16 f-w500">国网四川省电力公司重点攻关项目—面向清洁能源大范围优化配置的四川交直流混联电网规划技术研究</span>
                            </div>
                        </div>
                    </div>
                    <div class="part">
                        <PartSubTitle title="智库咨询" />
                        <div class="part-content part2">
                            <div class="item">
                                <img src="@/assets/images/experiment/tip1.png" class="img">
                                <span class="text f-16 f-w500">四川省发展和改革委员会—四川省十四五新型储能发展支撑政策研究</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip1.png" class="img">
                                <span class="text f-16 f-w500">四川省能源局—四川省十四五电力发展中期评估</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip1.png" class="img">
                                <span class="text f-16 f-w500">国网四川省电力公司智库课题—成都电力供应保障能力提升研究</span>
                            </div>
                        </div>
                    </div>
                    <div class="part">
                        <PartSubTitle title="规划工程" />
                        <div class="part-content part3">
                            <div class="item">
                                <img src="@/assets/images/experiment/tip2.png" class="img">
                                <span class="text f-16 f-w500">“十二五”、“十三五”、“十四五”四川电网规划研究</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip2.png" class="img">
                                <span class="text f-16 f-w500">四川省电源电网发展规划2022-2025</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip2.png" class="img">
                                <span class="text f-16 f-w500">四川特高压网架规划研究</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip2.png" class="img">
                                <span class="text f-16 f-w500">外电入川、陇电入川规划研究</span>
                            </div>
                        </div>
                    </div>
                    <div class="part">
                        <PartSubTitle title="荣誉获奖" />
                        <div class="part-content part4">
                            <div class="item">
                                <img src="@/assets/images/experiment/tip3.png" class="img">
                                <span class="text f-16 f-w500">中国电力联合会电力科技创新奖二等奖</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip3.png" class="img">
                                <span class="text f-16 f-w500">四川省科技进步奖励二等奖</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip3.png" class="img">
                                <span class="text f-16 f-w500">国家电网公司科学技术进步三等奖</span>
                            </div>
                            <div class="item">
                                <img src="@/assets/images/experiment/tip3.png" class="img">
                                <span class="text f-16 f-w500">中国产学研合作创新成果二等奖</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartTitle from "../components/partTitle.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import PieCircle from "../components/baseExperiment/PieCircle.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
let pieData = ref([])

onMounted(() => {
  setTimeout(() => {
    pieData.value = [
      {
        value: "7",
        name: "初级职称",
      },
      {
        value: "11",
        name: "中级职称",
      },
      {
        value: "17",
        name: "高级职称",
      },
    ]
  }, 100)
})
</script>
<style lang="scss" scoped>
.sameText {
  line-height: 28rem;
  color: $font-normal;
  text-align: left;
}
.content {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 20rem 30rem;
  .top {
    position: relative;
    width: 606rem;
    height: 550rem;
  }
  .rich {
    position: absolute;
    top: 96rem;
    right: 37rem;
    left: 132rem;
    text-align: left;
    .label {
      @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
      line-height: 32rem;
    }
  }
  .one {
    background: url("@/assets/images/experiment/MK.png") no-repeat;
    background-size: contain;
    .text {
      position: absolute;
      top: 96rem;
      right: 37rem;
      left: 132rem;
    }
  }
  .two {
    position: relative;
    background: url("@/assets/images/experiment/MK1.png") no-repeat;
    background-size: contain;
    .svg {
      position: absolute;
      right: 0;
      bottom: 37rem;
      width: 480rem;
      height: 240rem;
      background: url("@/assets/icons/experiment-base.svg") no-repeat;
      background-size: contain;
    }
  }
  .three {
    background: url("@/assets/images/experiment/MK2.png") no-repeat;
    background-size: contain;
    .pie {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 320rem;
      .num {
        @include fillTextColor();
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .bottom {
    @include borderImg(
      url("../../assets/images/experiment/header-important.png")
    );
    position: relative;
    width: 1860rem;
    height: 366rem;
    padding: 72rem 30rem 20rem;
    margin-top: 20rem;
    box-sizing: border-box;
    .box {
      @include flex();
      .part {
        width: 432rem;
        .part-content {
          @include flex(column, space-between, start);
          width: 433rem;
          height: 230rem;
          padding: 8rem 10rem;
          box-sizing: border-box;
          .item {
            @include flex(row, start, center);
            width: 100%;
            padding: 8rem 10rem;
            border: 1px solid;
            box-sizing: border-box;
            border-top: 0;
            border-right: 0;
            border-left: 0;
            border-image: linear-gradient(
                90deg,
                rgba(68, 188, 255, 0.22),
                rgba(65, 182, 248, 1),
                rgba(63, 172, 233, 0.16)
              )
              1 1;
            .img {
              width: 9rem;
              height: 9rem;
              margin-right: 9rem;
            }
            .text {
              text-align: left;
              color: $font-normal;
              line-height: 24rem;
            }
          }
        }
        .part1 {
          background: url("@/assets/images/experiment/bg-1.png") no-repeat;
        }
        .part2 {
          background: url("@/assets/images/experiment/bg-2.png") no-repeat;
        }
        .part3 {
          background: url("@/assets/images/experiment/bg-3.png") no-repeat;
        }
        .part4 {
          background: url("@/assets/images/experiment/bg-4.png") no-repeat;
        }
      }
    }
  }
}
</style>
