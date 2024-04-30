<script setup>
import { defineComponent, vModelText } from 'vue';
defineComponent({
  name: 'capitalize-directive'
})
import { ref } from 'vue'
const value = ref("")

// 拥有与vue实例相同的生命周期，可以自定义一些内置指令，修饰符通过modifiers获取
vModelText.beforeUpdate = (el, bingding) => {
  if (el.value && bingding.modifiers.capitalize) {
    el.value = el.value.charAt(0).toUpperCase() + el.value.slice(1)
  }
}
</script>

<template>
  <input type="text" v-model.capitalize="value" />
</template>
