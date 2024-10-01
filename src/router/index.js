import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
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
      children: [
        {
          path: ":id",
          name: "JobDetail",
          component: () => import("../views/JobDetailPage.vue"),
        },
      ],
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
