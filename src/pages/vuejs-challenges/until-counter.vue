<script setup lang='ts'>
import { ref, isRef, watchEffect } from "vue"

const count = ref(0)

/**
 * Implement the until function
*/

function until(initial) {
  function toBe(value) {
    return new Promise((resolve, reject) => {
      if (isRef(initial)) {
        watchEffect(() => {
          if (initial.value === value) {
            resolve(initial.value)
          }
        })
      } else {
        reject('the initial value is not a ref,  please use ref')
        console.warn('the initial value is not a ref,  please use ref')
      }
    })
  }

  return {
    toBe,
  }
}

async function increase() {
  count.value = 0
  setInterval(() => {
    count.value++
  }, 1000)
  await until(count).toBe(3)
  console.log(count.value === 3) // Make sure the output is true
}

</script>

<template>
  <p @click="increase">
    Increase
  </p>
</template>
