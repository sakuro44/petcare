import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    children:[{
      path: "/myinformation",
      name: "myinformation",
      component: () => import("../components/MyInformation.vue"),
    },  {
      path: "/petinformation",
      name: "petinformation",
      component: () => import("../components/PetInformationCard.vue"),
    },  {
      path: "/appointment",
      name: "appointment",
      component: () => import("../components/AppointmentCard.vue"),
    },  {
      path: "/history",
      name: "history",
      component: () => import("../components/HistoryCardVet.vue"),
    },]
  },
  {
    path: "/bath",
    name: "bath",
    component: () => import("../views/Bath.vue"),
  },
  {
    path: "/catgrom",
    name: "catgrom",
    component: () => import("../views/Catgrom.vue"),
  },
  {
    path: "/care",
    name: "care",
    component: () => import("../views/Care.vue"),
  },
  {
    path: "/haert",
    name: "haert",
    component: () => import("../views/Haert.vue"),
  },
  {
    path: "/vat",
    name: "vat",
    component: () => import("../views/Vat.vue"),
  },
  {
    path: "/doggrom",
    name: "doggrom",
    component: () => import("../views/Doggrom.vue"),
  },
  {
    path: "/room",
    name: "room",
    component: () => import("../views/Roompet.vue"),
  },
  
  ],
});

export default router;
