<script setup lang="ts">

const click1 = () => {
  console.log('click1')
}

const click2 = (e) => {
  e.stopPropagation()
  console.log('click2')
}

</script>

<template>
  <div @click="click1()">
    <div @click="click2">
      click me
    </div>
  </div>
</template>