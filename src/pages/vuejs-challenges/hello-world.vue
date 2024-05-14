<script lang="ts" setup>
import { ref } from "vue"
const msg = ref("Hello World")
</script>

<template>
  <div>
    <!-- 页面的期望输出是Hello World -->
    <h1>{{ msg }}</h1>
  </div>
</template>
