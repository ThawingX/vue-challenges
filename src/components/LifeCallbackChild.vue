<script setup lang="ts">
import { onMounted, inject, onBeforeUnmount } from "vue"

// provide与props区别：
// 1. provide 在组件树中，共享变量，props 仅仅是父子组件
// 2. props 单向数据流   provide 谨慎修改全局
const timer = inject("timer")
const count = inject("count")

onMounted(() => {
  timer.value = window.setInterval(() => {
    count.value++
  }, 1000)
})
onBeforeUnmount(() => {
  if (timer.value) {
    clearInterval(timer.value)
  }
})

</script>

<template>
  <div>
    <p>
      Child Component: {{ count }}
    </p>
  </div>
</template>
