import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    currentIdNews: null,
  }),
  actions: {
    setCurrentIdNews(id) {
      this.currentIdNews = id
    },
  },
})