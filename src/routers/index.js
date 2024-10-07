import HomeView from "@/views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import AboutView from "@/views/AboutView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/baitap/Home.vue";
import Contact from "@/baitap/Contact.vue";
import Detail from "@/baitap/Detail.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import ProductView from "@/views/ProductView.vue";
import ProfileDetail from "@/views/ProfileDetail.vue";
import ProductReview from "@/views/ProductReview.vue";
import Dashboard from "@/baitap/Dashboard.vue";
import Account from "@/baitap/Account.vue";
import ListUser from "@/baitap/ListUser.vue";
import UserDetail from "@/baitap/UserDetail.vue";
import Register from "@/baitap/Register.vue";
import Login from "@/baitap/Login.vue";
import NotFound from "@/baitap/NotFound.vue";

// Định nghĩa các route
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/product-detail/:id",
    name: "productDetail",
    component: ProductDetail,
  },
  {
    path: "/profile/:name",
    name: "profile",
    component: ProfileDetail,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
    children: [
      {
        path: "detail",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "review",
        name: "product-review",
        component: ProductReview,
      },
    ],
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  {
    path: "/list-user",
    name: "listUser",
    component: ListUser,
  },
  {
    path: "/user-detail/:id",
    name: "userDetail",
    component: UserDetail,
  },
];

// Tạo cơ chế định tuyến cho ứng dụng
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Đẩy ra bên ngoài cho ứng dụng sử dụng
export default router;
