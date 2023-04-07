<script lang="ts" setup>
function click() {
  alert('clicked')
}
</script>

<template>
  <button
    type="button"
    @click="click"
  >
    Click!
  </button>
</template>
