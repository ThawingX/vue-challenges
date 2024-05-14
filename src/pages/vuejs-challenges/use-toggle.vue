<script setup lang='ts'>
import type { Ref } from 'vue'
import { ref, isRef } from 'vue'
/**
 * Implement a composable function that toggles the state
 * Make the function work correctly
*/
function useToggle(defaultState: boolean | Ref<boolean>): [Ref<boolean>, () => void] {
  const state = ref(false)
  function init() {
    state.value = isRef(defaultState) ? defaultState.value : defaultState
  }

  function toggle() {
    state.value = !state.value
  }

  init()
  return [state, toggle]
}

const [state, toggle] = useToggle(false)

</script>

<template>
  <p>State: {{ state ? 'ON' : 'OFF' }}</p>
  <p @click="toggle">
    Toggle state
  </p>
</template>
