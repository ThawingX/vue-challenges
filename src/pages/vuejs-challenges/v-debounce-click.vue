<script setup lang='ts'>

/**
 * Implement the custom directive
 * Make sure the `onClick` method only gets triggered once when clicked many times quickly
 * And you also need to support the debounce delay time option. e.g `v-debounce-click:ms`
 *
*/

const VDebounceClick = {
  mounted: (el, binding) => {
    const { value, arg } = binding
    const delay = parseInt(arg)
    const onClick = value || (() => { })
    document.addEventListener('click', debounce(onClick, delay))
  }
}

const debounce = (fn, delay) => {
  let debounceTimer = null
  return (...args) => {
    if (debounceTimer) {
      return
    }
    fn(...args)
    debounceTimer = setTimeout(() => {
      clearTimeout(debounceTimer)
      debounceTimer = null
    }, delay)
  }
}

function onClick() {
  console.log("Only triggered once when clicked many times quickly")
}

</script>

<template>
  <button v-debounce-click:200="onClick">
    Click on it many times quickly
  </button>
</template>
