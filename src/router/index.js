import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: '登录页面',
        component: () => import('../view/login.vue'),
    },
    {
        path: '/index',
        component: () => import('../view/index.vue'),
        children: [
            {
                path: '/homepage',
                name: '系统首页',
                component: () => import('../view/component/main/home.vue'), //二级子组件、标题
            },
            {
                path: '/shoplist',
                name: '商品管理',
                component: () => import('../view/component/main/shoplist.vue'),
            },
            {
                path: '/ceshi',
                name: '测试页面',
                component: () => import('../view/component/main/ceshi.vue'),
            },
        ],
    },
    {
        path: '/NotFound',
        name: '404',
        component: () => import('../view/NotFound.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
