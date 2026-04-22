import { createRouter, createWebHashHistory } from 'vue-router';
import Login from '../views/Login/index.vue';
// import Home from '../views/LandingPage.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;