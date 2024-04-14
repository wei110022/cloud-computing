import { createApp } from 'vue'
// import './style.css'
import "@/assets/index.css"
import router from './router.config.ts'
import App from './App.vue'
const app = createApp(App);
app.use(router)
app.mount('#app')

