<script lang="ts" setup>
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router'
defineComponent({
  name: 'MainEntry'
})

const router = useRouter()
const routeList = computed(() => router.getRoutes().map(_v => ({ path: _v.path, name: _v.name })).reverse())
const hanldePushRoute = (route: string) => {
  router.push(route)
}
</script>

<template>
  <main>
    <h1 style="cursor:pointer" @click="hanldePushRoute(route.path)" v-for="route in routeList" :key="route.path">- {{
      route.name }}</h1>
  </main>
</template>

<route lang="json">{
  "name": "home"
}</route>