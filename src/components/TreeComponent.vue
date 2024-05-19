<script setup lang="ts">
interface TreeData {
  key: string
  title: string
  children: TreeData[]
}
defineProps<{ data: TreeData[] }>()
</script>

<template>
  <ul>
    <li v-for="item in data" :key="item.key">
      <span> {{ item.title }}</span>
      <TreeComponent v-if="item.children && item.children.length" :data="item.children" />
    </li>
  </ul>
</template>
