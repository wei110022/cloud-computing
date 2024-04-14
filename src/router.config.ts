import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './router/router.ts'

const router = createRouter({
// 这里使用hash模式路由
    history: createWebHashHistory(),
    routes,
})

export default router
