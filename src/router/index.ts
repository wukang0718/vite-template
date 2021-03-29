import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/Home/index.vue')
        },
        {
            path: '/404',
            name: 'error-404',
            component: () => import('@/views/Errors/404/index.vue')
        },
        {
            path: '/:notFound(.*)',
            redirect: '/404'
        }
    ]
})

export default router;