import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB39pOklRl2vfyDZUmjE1ENQDESfzmFapM",
  authDomain: "vue3-login-logout.firebaseapp.com",
  projectId: "vue3-login-logout",
  storageBucket: "vue3-login-logout.appspot.com",
  messagingSenderId: "568993975540",
  appId: "1:568993975540:web:c15cb9e86bbe4b46bce2a1"
}

initializeApp(firebaseConfig)
const auth = getAuth()

export { auth }