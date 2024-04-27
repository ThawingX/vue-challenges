<script setup>

const msg = "Hello World"

</script>

<template>
  <!-- Renders it to a child element of the `body` -->
  <!-- to='.container | #app' -->
  <teleport to="body">
    <span>{{ msg }}</span>
  </teleport>
</template>
