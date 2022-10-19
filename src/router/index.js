import Login from "../components/Login.vue";
import Register from "../components/Register.vue";
import HomePage from "../view/Home.vue";
import ProdukPage from "../components/produk.vue";
import detailPage from "../components/detail.vue";


import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: Login,
  },
  {
    path: "/register",
    name: "Registerpage",
    component: Register,
  },
  {
    path: "/home",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/produk",
    name: "Produk",
    component: ProdukPage
  },
  {
    path: "/detail",
    name: "detail",
    component: detailPage
  }
 
  
];
// const rounter = createRouter({
// history: createWebHistory(process.env.BASE_URL),
// routes,
// })
const router = new Router({
  routes,
  mode: "history",
});
export default router;
