import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router/auto'

import App from './App.vue'

const ruoter = createRouter({
  history: createWebHistory(),
})

const app = createApp(App)

app.use(ruoter)
app.mount('#app')
