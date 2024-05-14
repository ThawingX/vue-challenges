<script setup lang="ts">
import { ref, provide } from "vue"
import Child from "@/components/LifeCallbackChild.vue"

const visible = ref(true)
const timer = ref(null)
const count = ref(0)
provide("timer", timer)
provide("count", count)

function toggle() {
  visible.value = !visible.value
}
</script>

<template>
  <div>
    <Child v-if="visible" />
    <p>
      <button @click="toggle">
        Toggle Child Component
      </button>
    </p>
  </div>
</template>
