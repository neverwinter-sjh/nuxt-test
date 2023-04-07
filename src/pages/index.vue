<script lang="ts" setup>
import { onMounted } from 'vue'
import useGetPosts from '~/api/useGetPosts'
import MyCounter from '~/components/MyCounter.vue'

const data = await useGetPosts()

onMounted(async () => {})
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
  <div></div>
</template>
