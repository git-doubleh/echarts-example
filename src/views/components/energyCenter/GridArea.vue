<!--
 * @Description: 
 * @Date: 2024-12-12 10:24:39
 * @LastEditTime: 2024-12-12 10:36:35
-->
<template>
    <div class="grid-box">
        <div class="grid-item bg f-18 f-w500">
            年
        </div>
        <div class="grid-item bg f-18 f-w500">
            机架（万架）
        </div>
        <div class="grid-item bg f-18 f-w500">
            产业规模（亿元）
        </div>
        <div class="grid-item f-18 f-w500">
            2020
        </div>
        <div class="grid-item f-18 f-w500">
            <span class="blue">10.5</span>
        </div>
        <div class="grid-item f-18 f-w500 orange">
            330
        </div>
        <div class="grid-item f-18 f-w500">
            2025
        </div>
        <div class="grid-item f-18 f-w500">
            <span class="blue">50</span>
        </div>
        <div class="grid-item f-18 f-w500 orange">
            1000
        </div>
    </div>
</template>
<style lang="scss" scoped>
.grid-box {
  display: grid;
  grid-template-columns: repeat(3, 176rem);
  grid-template-rows: repeat(2, 44rem);
  grid-gap: 12rem 10rem;
  margin-top: 30rem;
  margin-left: 20rem;
  .grid-item {
    text-align: center;
    line-height: 44rem;
    color: #fff;
    background: rgba(68, 188, 255, 0.12);
  }
  .bg {
    background: linear-gradient(180deg, #003a78 0%, #12bcef 100%);
  }
  .blue {
    @include fillTextColor(linear-gradient(180deg, #0dfde0 0%, #1665ff 100%));
  }
  .orange {
    color: #ffc24b;
  }
}
</style>
