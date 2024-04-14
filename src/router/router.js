
import userHome from '@/view/user/userHome.vue'
const routes = [
    {
        path: '/',
        redirect: '/mainIndex',
    },
    {
        path: '/mainIndex',
        name: 'mainIndex',
        component: () => import('@/main-page/mainIndex/content.vue'),
    },
    {
        path: '/newsGuides',
        name: 'newsGuides',
        component: () => import('@/view/newsGuides.vue'),
    },
    {
        path: '/helpCenter',
        name: 'helpCenter',
        component: () => import('@/view/helpCenter.vue'),
    },
    {
        path: '/developers',
        name: 'developers',
        component: () => import('@/view/developers.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login.vue'),
    },
    {
        path: '/userHome',
        name: 'userHome',
        // redirect: '/userHome',
        component:userHome,
        children:[
            {
                name:"service",
                path:"/userHome/service",
                component:() => import('@/view/user/service/service.vue')
            },{
                name:"dns",
                path:"/userHome/dns",
                component:() => import('@/view/user/dns/dns.vue')
            }
        ]
    }
]

export default routes
