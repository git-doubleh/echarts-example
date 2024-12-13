<!--
 * @Description: 
 * @Date: 2022-06-23 11:38:34
 * @LastEditTime: 2022-07-26 14:13:07
-->

<template>
    <h1>{{ msg }} {{ countNum }}</h1>
    <button type="button" @click="count++">
        count is: {{ count }}
    </button>
    <button @click="sendMsg">
        发送
    </button>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, toRefs, reactive } from 'vue'
import { getList } from '@/api/index' 

defineProps<{ msg: string }>()

const count = ref<number>(0)
const emits = defineEmits(['sendMsg'])
const data = reactive({
  num: 1
})

const countNum = computed(() => count.value * 2)

const sendMsg = () => {
  emits('sendMsg', 'son')
}

onMounted(async() => {
  await getList()
})
defineExpose({
  ...toRefs(data)
})
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}
</style>
