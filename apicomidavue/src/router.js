import { createRouter, createWebHistory } from "vue-router";

import Login from "./components/Login.vue";

import Sign from "./components/Sign.vue";

const routes = [
  { path: "/login", component: Login },
  { path: "/sign", component: Sign },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});
export default router;