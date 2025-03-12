/*
 * @Description: 
 * @Date: 2022-06-23 11:50:56
 * @LastEditTime: 2025-03-12 15:19:10
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

const Home = () => import('@/views/home/index.vue') 

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
