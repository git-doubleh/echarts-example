<!--
 * @Description: 
 * @Date: 2024-10-22 16:01:52
 * @LastEditTime: 2024-11-29 10:15:33
-->
<template>
    <PageLayout title="降温/采暖负荷预测分析">
        <div :class="[animatedCss, 'page-content']">
            <div class="left">
                <div class="top f-22 f-w500">
                    以全省各地市分行业负荷为基础对降温用电特性展开深入分析，<span
                        class="orange f-w500"
                    >研究降温用电负荷与气象因素、经济发展水平</span>之间的关联关系，实现电力需求精细化预测。
                </div>
                <div class="table">
                    <div class="title YOUSHE f-24">
                        提出四川降温用电气象因素关联性
                    </div>
                    <div class="table-nav">
                        <PartSubTitle
                            title="夏季温度每升高1℃时降温负荷的变动趋势"
                            is-fill
                            style="margin-bottom: 0"
                        />
                        <span class="unit f-w500 f-16">­℃/万千瓦</span>
                    </div>
                    <NetTable />
                </div>
            </div>
            <div class="right">
                <span class="title f-24 YOUSHE">预测2024年四川迎峰度夏期间电力需求</span>
                <span class="sub-title f-20 YOUSHE">今夏负荷预测结果</span>
                <span class="left-num num f-24 PANGMEN">
                    <CountTo
                        :start-val="0"
                        :end-val="2835.3"
                        :duration="3000"
                        :decimals="1"
                    />
                </span>
                <span class="right-num num f-24 PANGMEN">
                    <CountTo
                        :start-val="0"
                        :end-val="3008.2"
                        :duration="3000"
                        :decimals="1"
                    />
                </span>
                <span class="desc f-w500 f-16 desc1">当成都平原最高温度达到40℃持续4天，全省各地市温度呈阶梯型分布，不同区域的降温负荷如上图所示</span>
                <span class="desc f-w500 f-16 desc2">当成都平原最高温度达到42℃持续4天，全省各地市温度呈阶梯型分布，不同区域的降温负荷如上图所示</span>
            </div>
        </div>
    </PageLayout>
</template>
<script setup lang="ts">
import { ref, onMounted, reactive, computed } from "vue"
import PageLayout from "../components/pageLayout.vue"
import PartSubTitle from "../components/partSubTitle.vue"
import NetTable from "../components/assignNetwork/NetTable.vue"
import { CountTo } from "vue3-count-to"
defineProps({
  animatedCss: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.page-content {
  @include flex();
  padding: 40rem 40rem 48rem;
  .left {
    .top {
      width: 817rem;
      height: 208rem;
      padding: 38rem 58rem;
      margin-bottom: 22rem;
      letter-spacing: 2px;
      box-sizing: border-box;
      line-height: 44rem;
      color: $font-normal;
      background: url("@/assets/images/assignNet/bg-desc.png") no-repeat;
      background-size: contain;
    }
    .table {
      width: 817rem;
      height: 686rem;
      padding: 22rem;
      box-sizing: border-box;
      background: url("@/assets/images/assignNet/bg-table.png") no-repeat;
      background-size: contain;
      .title {
        @include fillTextColor();
        padding-top: 6rem;
        padding-left: 13rem;
        margin-bottom: 30rem;
        line-height: 28rem;
      }
      .table-nav {
        @include flex(row, space-between, center);
        margin-bottom: 17rem;
        .unit {
          color: #fff;
        }
      }
    }
  }
  .right {
    position: relative;
    width: 1016rem;
    height: 926rem;
    margin-top: -10rem;
    background: url("@/assets/images/assignNet/right-content.png") no-repeat;
    background-size: contain;
    .title {
      @include fillTextColor();
      position: absolute;
      left: 37rem;
      top: 30rem;
      line-height: 28rem;
    }
    .sub-title {
      @include fillTextColor();
      position: absolute;
      left: 425rem;
      top: 85rem;
      line-height: 23rem;
    }
    .num {
      @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
      position: absolute;
      top: 380rem;
      line-height: 28rem;
    }
    .left-num {
      left: 233rem;
    }
    .right-num {
      right: 172rem;
    }
    .desc {
      position: absolute;
      bottom: 20rem;
      display: inline-block;
      width: 431rem;
      line-height: 28rem;
      letter-spacing: 1px;
      color: #fff;
      text-align: left;
      white-space: wrap;
    }
    .desc1 {
      left: 47rem;
    }
    .desc2 {
      right: 41rem;
    }
  }
}
</style>
