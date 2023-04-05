<script lang="ts" setup>
import { onMounted } from 'vue'
import { useFetchPlaceholder } from '~/api/placeHolder'

const fetchPlaceHolder = () => useFetchPlaceholder()

const { data, refresh /* ... */ } = await useAsyncData(async () => {
  const { data } = await fetchPlaceHolder()
  return data
})

onMounted(() => {
  console.log('data', toRaw(data.value))
  setTimeout(() => {}, 2000)
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
