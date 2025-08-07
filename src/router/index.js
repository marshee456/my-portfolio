import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import ProjectDetail from '@/views/ProjectDetail.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Maria Sheena Shield P. Emocling - Portfolio'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
        meta: {
            title: 'All Projects - Portfolio'
        }
    },
    {
        path: '/project/:id',
        name: 'ProjectDetail',
        component: ProjectDetail,
        meta: {
            title: 'Project Details - Portfolio'
        }
    },
    // Catch-all route for 404s
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Smooth scroll behavior
        if (savedPosition) {
            return savedPosition;
        }
        else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
                top: 100 // Offset for fixed navbar
            };
        }
        else {
            return {
                top: 0,
                behavior: 'smooth'
            };
        }
    }
});
// Navigation guards for page titles
router.beforeEach((to, from, next) => {
    // Set page title with type safety
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    // You can add authentication checks here if needed
    next();
});
export default router;
