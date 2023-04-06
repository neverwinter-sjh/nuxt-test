<script lang="ts" setup>
import { onMounted, nextTick } from 'vue'
import { useFetchPlaceholder } from '~/api/placeHolder'
import MyCounter from '~/components/MyCounter.vue'

// const { data, refresh /* ... */ } = await useAsyncData(async () => {
//   const { data } = await useFetchPlaceholder()
//   return data
// })

const fetch = async () => {
  const data = await useFetchPlaceholder()
  console.log(data)
}

onMounted(async () => {
  nextTick(() => {
    fetch()
  })
})
</script>

<template>
  <div class="p-2">
    <MyCounter></MyCounter>
    <button
      type="button"
      class="btn btn-primary"
      @click="fetch"
    >
      Primary
    </button>
  </div>
  <div></div>
</template>
