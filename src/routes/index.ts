// index.ts
import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import BlankLayout from "@/components/layouts/BlankLayout.vue";

export const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () => import("@/modules/dashboard/views/DashBoard.view.vue"),
        meta: {
          requiresAuth: true,
          headerTitle: "Dashboard",
          searchConfig: {},
          storeConfig: {},
        },
      },
    ],
  },
  {
    path: "/",
    component: BlankLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: () => import("@/modules/author/views/SignIn.view.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Page Not Found",
    component: () => import("@/modules/404/NotFound.view.vue"),
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
