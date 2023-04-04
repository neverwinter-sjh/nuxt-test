<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useCounterStore()
const { count } = storeToRefs(store)
const { increment, decrement } = store

const a: Ref<number> = ref(3)

const plus = () => {
  a.value += 1
}
const minus = () => {
  a.value -= 1
}
</script>

<template>
  <p>a : {{ a }}</p>
  <p>Counter: {{ count }}</p>
  <div>
    <button
      type="button"
      @click="plus"
    >
      a+
    </button>
    <button
      type="button"
      @click="minus"
    >
      a-
    </button>
    <br />
    <button
      type="button"
      @click="increment"
    >
      +
    </button>
    <button
      type="button"
      @click="decrement"
    >
      -
    </button>
  </div>
</template>
