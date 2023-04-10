<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import useGetPosts from '~/api/useGetPosts'
import MyCounter from '~/components/MyCounter.vue'

const data = await useGetPosts()
const a = ref<number>(0)

const plus = (num: number) => {
  a.value += num
}

onMounted(async () => {})
</script>

<template>
  <div class="p-2">
    <MyCounter></MyCounter>
    <button
      type="button"
      class="btn btn-primary"
      @click="plus(2)"
    >
      Primary
    </button>
  </div>
  <div>{{ a }}</div>
</template>
