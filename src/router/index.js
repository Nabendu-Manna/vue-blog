import { createWebHistory, createRouter } from "vue-router";

import Home from '@/components/Home'
import About from '@/components/About'

const routes = [
  {
    path: "/:name",
    name: "Home",
    component: Home,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;