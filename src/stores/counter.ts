import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    getCount: state => state.count,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
  persist: true,
})
