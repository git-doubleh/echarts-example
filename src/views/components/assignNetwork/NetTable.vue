<!--
 * @Description: 
 * @Date: 2024-10-22 10:32:21
 * @LastEditTime: 2024-11-21 14:05:26
-->
<template>
    <div class="out-table">
        <ATable
            :columns="columns"
            :data="[]"
            :pagination="false"
            :hoverable="false"
            :bordered="{ cell: true }"
        />
        <div class="scorll">
            <div v-for="(item, index) in DOWNTEMTRENDDATA" :key="index" class="row">
                <span class="item">
                    <span class="area-column">
                        {{ item.area }}
                    </span>
                </span>
                <span class="item f-16 f-w500">{{ item.people25 }}</span>
                <span class="item f-16 f-w500">{{ item.people30 }}</span>
                <span class="item f-16 f-w500">{{ item.people35 }}</span>
                <span class="item f-16 f-w500">{{ item.people40 }}</span>
                <span class="item f-16 f-w500">{{ item.three25 }}</span>
                <span class="item f-16 f-w500">{{ item.three30 }}</span>
                <span class="item f-16 f-w500">{{ item.three35 }}</span>
                <span class="item f-16 f-w500">{{ item.three40 }}</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue"
import { DOWNTEMTRENDDATA } from "./config"

const columns = reactive([
  {
    title: "区域",
    dataIndex: "area",
    width: 80,
    align: "center",
    slotName: "area",
  },
  {
    title: "居民",
    dataIndex: "people",
    children: [
      {
        title: "【25,30】",
        dataIndex: "people25",
      },
      {
        title: "【30,35】",
        dataIndex: "people30",
      },
      {
        title: "【35,40】",
        dataIndex: "people35",
      },
      {
        title: "【40,45】",
        dataIndex: "people25",
      },
    ],
  },
  {
    title: "三产",
    dataIndex: "three",
    children: [
      {
        title: "【25,30】",
        dataIndex: "three25",
      },
      {
        title: "【30,35】",
        dataIndex: "three30",
      },
      {
        title: "【35,40】",
        dataIndex: "three35",
      },
      {
        title: "【40,45】",
        dataIndex: "three25",
      },
    ],
  },
])
</script>
<style lang="scss" scoped>
.out-table {
  height: calc(100% - 110rem);
  :deep(.arco-table-border .arco-table-tr .arco-table-th) {
    border-color: rgba(255, 255, 255, 0.24);
    vertical-align: middle;
  }
  :deep(.arco-table-border .arco-table-container),
  :deep(.arco-table-border-cell .arco-table-td:not(.arco-table-tr-expand)) {
    border: none;
  }
  :deep(.arco-table-th),
  :deep(.arco-table-td) {
    color: #fff;
    background-color: #133d75;
  }
  :deep(.arco-table .arco-table-cell) {
    padding: 5px 2px;
  }
  :deep(tbody .arco-table-tr) {
    display: none;
  }
}
.scorll {
  height: calc(100% - 70rem);
  overflow-y: auto;
  .row {
    display: flex;
    align-items: center;
    height: 48px;
    margin-top: 8rem;
    border: 2rem solid;
    border-image: linear-gradient(
        90deg,
        rgba(68, 188, 255, 0),
        rgba(68, 188, 255, 0.88),
        rgba(68, 188, 255, 0)
      )
      2 2;
    .item {
      display: inline-block;
      color: $font-normal;
      text-align: left;
      flex: 1;
      padding-left: 2rem;
      &:first-child {
        width: 80rem;
      }
      .area-column {
        display: inline-block;
        width: 75rem;
        height: 36rem;
        line-height: 36rem;
        text-align: center;
        background: url("@/assets/images/assignNet/bg-column.png") no-repeat;
        background-size: contain;
      }
    }
  }
}
</style>
