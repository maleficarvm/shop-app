//default
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

// Pages(routes)
import Home from "@/pages/Home";
import shop from "@/pages/Shop";
import NotFound from "@/pages/404";
import Product from "@/pages/Product";

// Routering
export default new Router({
  // HASH!!!
  mode: "history",
  //
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/shop",
      name: "shop",
      component: shop,
    },
    {
      path: "/shop/:id",
      name: "product",
      component: Product,
    },
    {
      path: "*",
      name: "notFound",
      component: NotFound,
    },
  ],
});
