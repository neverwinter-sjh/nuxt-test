<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '~/stores/counter'

// counterStore 호출
const store = useCounterStore()

// storeToRefs로 store의 state를 ref로 변환
const { count } = storeToRefs(store)

// store의 action을 직접 호출
const { increment, decrement } = store

// 숫자 변수
const a: Ref<number> = ref(3)

/**
 * a를 1 증가
 * @returns
 */
const plus = () => {
  a.value += 1
}

/**
 * a를 1 감소
 * @returns
 */
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
