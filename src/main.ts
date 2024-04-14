import { createApp } from 'vue'
// import './style.css'
import "@/assets/index.css"
import router from '@/router.config.js'
import App from './App.vue'
const app = createApp(App);
app.use(router)
app.mount('#app')

