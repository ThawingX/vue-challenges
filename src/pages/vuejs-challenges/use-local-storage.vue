<script setup lang='ts'>

import { ref, watchEffect, customRef } from "vue"

/**
 * Implement the composable function
 * Make sure the function works correctly
*/
// solution 1 watchEffect
// function useLocalStorage(key: string, initialValue: any) {
//   const value = ref(initialValue)

//   if (localStorage.getItem(key)) {
//     value.value = JSON.parse(localStorage.getItem(key) as string)
//   }
//   watchEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value.value))
//   })
//   return value
// }

// solution 2 customRef
function useLocalStorage(key: string, initialValue: any) {
  const value = customRef((track, trigger) => {
    return {
      get() {
        track()
        return localStorage.getItem(key) ?? initialValue
      },
      set(_v) {
        trigger()
        localStorage.setItem(key, JSON.stringify(_v))
      }
    }
  })

  return value
}

const counter = useLocalStorage("counter", 0)

// We can get localStorage by triggering the getter:
console.log(counter.value)

// And we can also set localStorage by triggering the setter:

const update = () => counter.value++

</script>

<template>
  <p>Counter: {{ counter }}</p>
  <button @click="update">
    Update
  </button>
</template>
