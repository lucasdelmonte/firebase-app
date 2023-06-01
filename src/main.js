import { createApp } from 'vue'
import './style.css'
import app from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

createApp(app).use(router).use(createPinia()).mount('#app')

