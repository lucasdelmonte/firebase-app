import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: 'delmontelucas678@gmail.com'
  }),
})