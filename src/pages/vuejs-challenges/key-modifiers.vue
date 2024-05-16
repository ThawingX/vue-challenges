<template>
  <!-- Add key modifiers made this will fire even if Alt or Shift is also pressed -->
  <button @click.alt.shift="onClick1" @click.alt.exact="onClick1" @click.shift.exact="onClick1">A</button>

  <!-- Add key modifiers made this will only fire when Shift and no other keys are pressed -->
  <button @click.shift.exact="onCtrlClick">A</button>

  <!-- Add key modifiers made this will only fire when no system modifiers are pressed -->
  <button @click.exact="onClick2">A</button>
</template>

<script setup>

function onClick1() {
  console.log('onClick1')
}
function onCtrlClick() {
  console.log('onCtrlClick')
}
function onClick2() {
  console.log('onClick2')
}
</script>