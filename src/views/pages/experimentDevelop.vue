<template>
    <PageLayout title="实验室发展规划">
        <div :class="[animatedCss, 'container']">
            <div class="top">
                <NavTitle title="发展目标" />
                <div class="top-box">
                    <div class="top-item">
                        <div class="top-title">
                            <span class="tag" />
                            <span class="label f-w600 f-22">科学开展电源电网规划</span>
                        </div>
                        <div class="top-content f-w500 f-18">
                            促进电网高质量发展，科学开展电源电网规划是关键，对于<span
                                class="orange"
                            >推动电网行业可持续发展</span>具有重要意义
                        </div>
                    </div>
                    <div class="top-item">
                        <div class="top-title">
                            <span class="tag" />
                            <span class="label f-w600 f-22">培养电力供需协同规划</span>
                        </div>
                        <div class="top-content f-w500 f-18">
                            培养电力供需协同规划实验室的核心技术竞争力，突破当前制约瓶颈问题，<span
                                class="orange"
                            >提高电力供应的稳定性</span>
                        </div>
                    </div>
                    <div class="top-item">
                        <div class="top-title">
                            <span class="tag" />
                            <span class="label f-w600 f-22">深化电网工程示范应用</span>
                        </div>
                        <div class="top-content f-w500 f-18">
                            助力<span class="orange">科技成果落地转换</span>，全面推动电力供需分析、清洁能源消纳等应用转化及示范工程落地
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <NavTitle title="实施路径" />
                <div class="bottom-box">
                    <div class="left">
                        <PartSubTitle title="源荷预测" is-fill />
                        <div class="part-box">
                            <PartItem
                                :num="1"
                                text="考虑产业升级和极端天气影响的四川用电负荷特性研究"
                                date="2024-2025"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="2"
                                text="面向恶劣天气过程与数据样本稀疏的四川中短期负荷预测关键技术研究"
                                date="2024-2025"
                            />
                        </div>
                        <div class="part-box part-margin-30">
                            <PartItem
                                :num="3"
                                text="基于多源数据融合驱动的概率负荷预测技术研究"
                                date="2024-2025"
                            />
                        </div>
                        <PartSubTitle title="供需平衡" is-fill />
                        <div class="part-box">
                            <PartItem
                                :num="1"
                                text="适应清洁能源和负荷特性的四川中长期电力电量平衡技术"
                                date="2024-2025"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="2"
                                text="面向规模化新能源接入的电网运行电力电量平衡优化技术"
                                date="2024-2025"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="3"
                                text="面向大规模新能源接入的新型调节性资源主体参与现货市场交易关键技术"
                                date="2024-2025"
                            />
                        </div>
                    </div>
                    <div class="middle">
                        <span class="text YOUSHE">3-5年规划</span>
                    </div>
                    <div class="left">
                        <PartSubTitle title="网源规划" is-fill />
                        <div class="part-box">
                            <PartItem
                                :num="1"
                                text="负荷中心构网型SVG安全稳定支撑能力评估及应用示范"
                                date="2025-2026"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="2"
                                text="大规模新能源基地柔性组网协同规划技术"
                                date="2025-2026"
                            />
                        </div>
                        <div class="part-box part-margin-30">
                            <PartItem
                                :num="3"
                                text="新能源基地特高压直流主动支撑技术"
                                date="2026-2027"
                            />
                        </div>
                        <PartSubTitle title="平台建设" is-fill />
                        <div class="part-box">
                            <PartItem
                                :num="1"
                                text="电源建模及规划仿真分析能力提升"
                                date="2024"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="2"
                                text="清洁能源消纳率评估能力提升"
                                date="2025"
                            />
                        </div>
                        <div class="part-box">
                            <PartItem
                                :num="3"
                                text="智能分析及预测能力提升项目"
                                date="2026"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import NavTitle from "../components/experimentDevelop/NavTitle.vue"
import PartItem from "../components/experimentDevelop/PartItem.vue"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.container {
  padding: 24rem 40rem 0;
  .top {
    height: 234rem;
    background: url("@/assets/images/experimentDevelop/bg-border0.png")
      no-repeat;
    background-size: contain;
    margin-bottom: 20rem;
    padding: 20rem 62rem 0 58rem;
    box-sizing: border-box;
    .top-box {
      @include flex();
      margin-top: 26rem;
      .top-item {
        &:nth-child(2) {
          margin: 0 64rem;
        }
        .top-title {
          @include flex(row, start, center);
          margin-bottom: 12rem;
          .tag {
            display: inline-block;
            width: 8rem;
            height: 14rem;
            margin-right: 8rem;
            background: linear-gradient(180deg, #0dfde0 0%, #1665ff 100%);
          }
          .label {
            @include fillTextColor();
            line-height: 26rem;
            letter-spacing: 2px;
          }
        }
        .top-content {
          padding-left: 14rem;
          color: #fff;
          line-height: 32rem;
          letter-spacing: 2px;
        }
        .orange {
          color: #ffc24b;
        }
      }
    }
  }
  .bottom {
    height: 674rem;
    padding: 20rem 24rem 0;
    box-sizing: border-box;
    background: url("@/assets/images/experimentDevelop/bg-border1.png")
      no-repeat;
    background-size: contain;
    .bottom-box {
      @include flex();
      margin-top: 9rem;
      .part-box {
        margin-bottom: 4rem;
      }
      .middle {
        position: relative;
        width: 324rem;
        height: 563rem;
        margin: 0 43rem 0 17rem;
        background: url("@/assets/images/experimentDevelop/part.png") no-repeat;
        background-size: contain;
        .text {
          @include fillTextColor(
            linear-gradient(180deg, #0dfde0 0%, #1665ff 100%)
          );
          position: absolute;
          top: 76rem;
          left: 78rem;
          font-size: 36rem;
          line-height: 42rem;
          white-space: nowrap;

          animation: jump 2s infinite;
        }
      }
      .part-margin-30 {
        margin-bottom: 30rem;
      }
    }
  }
}
</style>
