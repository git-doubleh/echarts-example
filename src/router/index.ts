/*
 * @Description: 
 * @Date: 2022-06-23 11:50:56
 * @LastEditTime: 2024-10-15 09:30:14
 */
import {
    createRouter,
    createWebHashHistory,
    RouteRecordRaw
} from 'vue-router'

import Home from '@/views/home/index.vue'

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
