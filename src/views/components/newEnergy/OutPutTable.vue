<!--
 * @Description: 
 * @Date: 2024-10-22 10:32:21
 * @LastEditTime: 2025-01-10 11:22:07
-->
<template>
    <div class="out-table">
        <ATable
            :columns="columns"
            :data="data"
            :pagination="false"
            :hoverable="false"
            :bordered="{ cell: true }"
            :span-method="spanMethod"
        >
            <template #windYear="{ record }">
                <span class="wind-text">{{ record.windYear }}</span>
            </template>
            <template #windFullWater="{ record }">
                <span class="wind-text">{{ record.windFullWater }}</span>
            </template>
            <template #windLackWater="{ record }">
                <span class="wind-text">{{ record.windLackWater }}</span>
            </template>
            <template #lightYear="{ record }">
                <span class="light-text">{{ record.lightYear }}</span>
            </template>
            <template #lightFullWater="{ record }">
                <span class="light-text">{{ record.lightFullWater }}</span>
            </template>
            <template #lightLackWater="{ record }">
                <span class="light-text">{{ record.lightLackWater }}</span>
            </template>
        </ATable>
    </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue"

const columns = reactive([
  {
    title: "指标名称",
    dataIndex: "indicatorName",
    headerCellClass: 'indicator',
    children: [
      {
        title: "",
        dataIndex: "name",
        width: 112,
        headerCellClass: 'indicator-name'
    },
    {
        title: "",
        dataIndex: "units",
        headerCellClass: 'indicator-units'
      },
    ],
  },
  {
    title: "风电",
    dataIndex: "wind",
    children: [
      {
        title: "全年",
        dataIndex: "windYear",
        slotName: "windYear",
      },
      {
        title: "丰水期",
        dataIndex: "windFullWater",
        slotName: "windFullWater",
      },
      {
        title: "枯平期",
        dataIndex: "windLackWater",
        slotName: "windLackWater",
      },
    ],
  },
  {
    title: "光伏",
    dataIndex: "light",
    children: [
      {
        title: "全年",
        dataIndex: "lightYear",
        slotName: "lightYear",
      },
      {
        title: "丰水期",
        dataIndex: "lightFullWater",
        slotName: "lightFullWater",
      },
      {
        title: "枯平期",
        dataIndex: "lightLackWater",
        slotName: "lightLackWater",
      },
    ],
  },
])

const data = reactive([
  {
    name: "出力大于80%装机容量",
    units: "小时",
    windYear: "0",
    windFullWater: "0",
    windLackWater: "0",
    lightYear: "59",
    lightFullWater: "1",
    lightLackWater: "58",
  },
  {
    name: "出力大于80%装机容量",
    units: "天",
    windYear: "0",
    windFullWater: "0",
    windLackWater: "0",
    lightYear: "35",
    lightFullWater: "1",
    lightLackWater: "34",
  },
  {
    name: "出力大于70%装机容量",
    units: "小时",
    windYear: "114",
    windFullWater: "0",
    windLackWater: "114",
    lightYear: "405",
    lightFullWater: "45",
    lightLackWater: "360",
  },
  {
    name: "出力大于70%装机容量",
    units: "天",
    windYear: "26",
    windFullWater: "0",
    windLackWater: "26",
    lightYear: "138",
    lightFullWater: "18",
    lightLackWater: "120",
  },
  {
    name: "出力大于60%装机容量",
    units: "小时",
    windYear: "741",
    windFullWater: "7",
    windLackWater: "734",
    lightYear: "874",
    lightFullWater: "158",
    lightLackWater: "716",
  },
  {
    name: "出力大于60%装机容量",
    units: "天",
    windYear: "85",
    windFullWater: "2",
    windLackWater: "83",
    lightYear: "218",
    lightFullWater: "50",
    lightLackWater: "168",
  },
])

const spanMethod = ({ rowIndex, columnIndex }) => {
  if (rowIndex % 2 === 0 && columnIndex === 0) {
    return {
      rowspan: 2,
    }
  }
}

onMounted(() => {
    document.getElementsByClassName('indicator')[0].setAttribute('rowspan', 2)
    document.getElementsByClassName('indicator-name')[0].style.display = 'none'
    document.getElementsByClassName('indicator-units')[0].style.display = 'none'
})
</script>
<style lang="scss" scoped>
.out-table {
  :deep(.arco-table-border-cell .arco-table-td:not(.arco-table-tr-expand)),
  :deep(.arco-table-border .arco-table-tr .arco-table-th) {
    border-color: #000;
    border-width: 2rem;
    vertical-align: middle;
  }
  :deep(.arco-table-th),
  :deep(.arco-table-td) {
    color: #fff;
    background-color: #133d75;
    border-color: #000;
    border-width: 2rem;
  }
  :deep(.arco-table-border .arco-table-container) {
    border: none;
  }
  :deep(.arco-table .arco-table-cell) {
    padding: 5px 10px;
  }
  :deep(.arco-table-td-content) {
    text-align: center;
    word-break: keep-all;
  }
}

.wind-text {
  color: #44bcff;
}
.light-text {
  color: #4ee78e;
}
</style>
