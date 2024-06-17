import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop",
    name: "ShopView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShopView.vue"),
  },
  {
    path: "/:patchMatch(.*)*",
    name: "404View",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/404View.vue"),
  },
  {
    path: "/cart",
    name: "CartView",
    meta: {},
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CartView.vue"),
  },
  {
    path: "/checkout",
    name: "CheckOutView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CheckoutView.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },

  {
    path: "/otp",
    name: "OTP",
    component: () => import(/* webpackChunkName: "about" */ "../views/OTP.vue"),
  },

  {
    path: "/otp/reset",
    name: "resetOTP",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/EmailOTP.vue"),
  },

  {
    path: "/userinformation",
    name: "UserInformation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserInformation.vue"),
  },
  {
    path: "/shop/detail/:id",
    name: "UserDetail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DetailProductView.vue"),
  },
  {
    path: "/checkout/thanks",
    name: "ThankPayment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompletePayment.vue"),
  },
  {
    path: "/checkout/paymentMethods",
    name: "ThankPayment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/paymentMethod.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
