import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/about",
      name: "AboutPage",
      component: () => import("../views/AboutPage.vue"),
    },
    {
      path: "/jobs",
      name: "JobPage",
      component: () => import("../views/JobPage.vue"),
    },
    {
      path: "/jobs/:id",
      name: "JobDetail",
      component: () => import("../views/JobDetail.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: () => import("../views/PageNotFound.vue"),
      meta: { hideNav: true },
    },
  ],
});

export default router;
