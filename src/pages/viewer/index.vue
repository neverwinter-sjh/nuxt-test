<script lang="ts" setup>
import MyCounter from '~/components/MyCounter.vue'
import { onMounted } from 'vue'

onMounted(() => {
  console.log('mounted')
})
</script>

<template>
  <div class="list-wrapper">
    <div class="list"></div>
    <div class="viewer-content">
      <div class="comp-container">
        <MyCounter />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.list-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  .list {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    bottom: 0;
    border: 1px solid #ccc;
    background: #eee;
  }
  .viewer-content {
    position: absolute;
    left: 300px;
    right: 0;
    top: 0;
    bottom: 0;
    overflow: scroll;
    border: 1px solid #ccc;
    padding: 30px;
  }
}
</style>
