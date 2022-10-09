import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PiggyBankDetail from "../views/PiggyBankDetail.vue";
import PBEdit from "../views/PBEdit.vue";
import NewPiggybank from "../views/NewPiggybank.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail",
      name: "detail",
      component: PiggyBankDetail,
    },
    {
      path: "/new",
      name: "create",
      component: NewPiggybank,
    },
        {
      path: "/edit",
      name: "edit",
      component: PBEdit,
    },
/*     {
      path: "/delete",
      name: "detail",
      component: PiggyBankDetail,
    }, */
    /* {
      path: "/detail",
      name: "Detail",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/PiggyBankDetail.vue"),
    }, */
  ],
});

export default router;
