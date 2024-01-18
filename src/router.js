import { createRouter, createWebHistory } from "vue-router";

import ProjectIndex from "./pages/projects/Index.vue";
import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import ProjectShow from "./pages/projects/Show.vue";

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
    {
      path: "/portfolio/:slug",
      name: "projects.show",
      props: true,
      component: ProjectShow,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
  ],
});

export { router };
