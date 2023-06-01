import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: null,
  }),
  actions: {
    async registerUser(email, password) {
      try {
        console.log(email, password);
        const { user } = await createUserWithEmailAndPassword(auth, email, password)

        this.userData = { 
          email: user.email,
          password: user.password
        }
      } catch (err) {
        console.log(err.message)
      }
    }
  },
})