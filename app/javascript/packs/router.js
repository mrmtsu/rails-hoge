import Vue from "vue";
import VueRouter from "vue-router";

import PhotoList from "./pages/PhotoList.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/Signup.vue";
import Signin from "./pages/Signin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PhotoList,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
