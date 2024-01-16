import { createRouter, createWebHistory } from "vue-router";

import ProjectIndex from "./pages/projects/Index.vue";
import Home from "./pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/portfolio",
      name: "projects.index",
      component: ProjectIndex,
    },
  ],
});

export { router };
