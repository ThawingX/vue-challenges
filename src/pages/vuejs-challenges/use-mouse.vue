<script setup lang="ts">
import { ref } from 'vue'
// Implement ...
function useEventListener(target, event, callback) {
  target.addEventListener(event, callback)
}

// Implement ...
function useMouse() {
  const x = ref(0)
  const y = ref(0)
  useEventListener(window, "mousemove", (_event) => {
    x.value = _event.clientX
    y.value = _event.clientY
  })
  return { x, y }
}
const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>
