<script lang="ts" setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goBack = () => {
  router.push('/')
}
</script>

<template>
  <div class="container">
    <header>
      <button @click="goBack">go back</button>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
}

main {
  width: 100%;
  height: 100%;
}

header {
  display: flex;
}
</style>