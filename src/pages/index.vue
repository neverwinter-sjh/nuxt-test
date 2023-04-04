<script lang="ts" setup>
import { onMounted } from 'vue'
import MyCounter from '@/components/MyCounter.vue'
import { useFetchPlaceholder } from '@/api/placeHolder'

const { data, error, pending } = useFetchPlaceholder()
let interval: ReturnType<typeof setInterval>

console.time()

onMounted(() => {
  if (pending.value) {
    console.log('pending', pending.value)
    interval = setInterval(() => {
      console.log('pending', pending.value)
      if (!pending.value) {
        console.log('==========')
        console.log('loading is done')
        console.log('data', toRaw(data.value))
        console.timeEnd()
        clearInterval(interval)
      }
    }, 500)
  } else {
    console.log('data', toRaw(data.value))
  }
})
</script>

<template>
  <MyCounter></MyCounter>
  <v-btn color="primary">Click</v-btn>
</template>
