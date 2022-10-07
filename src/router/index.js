import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/appointment",
      name: "appointment",
      component: () => import("../components/AppointmentCard.vue"),
    },
  ],
});

export default router;
