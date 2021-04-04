import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      layout: 'main',
      auth: true,
    },
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      layout: 'empty',
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/linque',
    name: 'Linque',
    meta: {
      layout: 'main',
      auth: true,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Linque.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  let isLoggedin = true;

  const token = localStorage.getItem('token');
  if (!token) {
    isLoggedin = false;
  }

  const requireAuth = to.matched.some(record => record.meta.auth);

  if (requireAuth && !isLoggedin) {
    next('/login');
  } else {
    next();
  }
});

export default router;
