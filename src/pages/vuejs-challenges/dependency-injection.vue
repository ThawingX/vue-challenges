<script setup lang="ts">
import { ref, provide } from "vue"
import Child from "../../components/dependency-injection-child.vue"
const count = ref(1)
provide("count", count)
setInterval(() => {
  count.value++
}, 1000)
</script>

<template>
  <Child />
</template>
