import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    movie: null,
    showFullVideo: false,
  }),
})
