<script setup lang='ts'>

import { onMounted, h, defineCustomElement } from "vue"

/**
 * Implement the code to create a custom element.
 * Make the output of page show "Hello Vue.js".
*/
const VueJs = defineCustomElement({
  props: {
    message: String
  },
  render() {
    return h('span', null, this.message)
  }
})

customElements.define('vue-js', VueJs)

onMounted(() => {
  document.getElementById("app")!.innerHTML = "<vue-js message=\"Hello Vue.js\"></vue-js>"
})

</script>

<template>
  <div id="app"></div>
</template>
