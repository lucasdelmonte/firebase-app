import { defineStore } from 'pinia'
import router from '../router'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userData: null,
    loadingUser: false
  }),
  actions: {
    async loginUser(email, password) {
      try {
        this.loadingUser = true
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        this.userData = { 
          email: user.email,
          password: user.password,
        }   
        router.push('/')
      } catch (err) {
        return {
          code: err.code,
          message: err.message,
        }
      } finally {
        this.loadingUser = false
      }
    },
    async registerUser(email, password) {
      try {
        this.loadingUser = true
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        this.userData = { 
          email: user.email,
          password: user.password,
        }
        router.push('/')
      } catch (err) {
        return {
          code: err.code,
          message: err.message,
        }
      } finally {
        this.loadingUser = false
      }
    },
    async logoutUser() {
      try {
        await signOut(auth)
        this.userData = null
        router.push('/login')
      } catch (err) {
        return {
          code: err.code,
          message: err.message,
        }
      }
    },
    currentUser() {
      return new Promise((resolve, reject) => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              this.userData = {
                email: user.email,
                uid: user.uid,
              }
            } else {
              this.userData = null
            }
            resolve(user)
          },
          (e) => reject(e)
        )
        unsubcribe()
      })
    },
  },
})
