<script setup lang="ts">
import { shallowRef, watch, triggerRef } from "vue"

const state = shallowRef({ count: 1 })

// Does NOT trigger
watch(state, () => {
  console.log("State.count Updated")
}, { deep: true })

/**
 * Modify the code so that we can make the watch callback trigger.
*/
// state.value.count = 2

// solution 1 
// state.value = { count: 2 }
// solution 2 use force trigger ref, trigger the effects
triggerRef(state)


</script>

<template>
  <div>
    <p>
      {{ state.count }}
    </p>
  </div>
</template>
