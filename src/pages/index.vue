<script lang="ts" setup>
import { onMounted, onActivated } from 'vue'
import MyCounter from '@/components/MyCounter.vue'
import { useFetchPlaceholder } from '@/api/placeHolder'

const { data, refresh /* ... */ } = await useAsyncData(async () => {
  const { data } = await useFetchPlaceholder()
  return data
})

onMounted(() => {
  console.log('data', toRaw(data.value))
  setTimeout(() => {
    reloadNuxtApp()
  }, 2000)
})
</script>

<template>
  <div class="p-2">
    <MyCounter></MyCounter>
    <button
      type="button"
      class="btn btn-primary"
    >
      Primary
    </button>
  </div>
</template>
