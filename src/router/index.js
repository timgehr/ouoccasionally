import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Article from "../views/Article.vue";
import EditArticle from "../views/EditArticle.vue";
import EditArticleNew from "../views/EditArticleNew.vue";
import Contribute from "../views/Contribute.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "HNLTCS",
    },
  },
  {
    path: "/contribute",
    name: "Contribute",
    component: Contribute
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:id",
    name: "Article",
    component: Article,
  },
  {
    path: "/:id/editgoobatooba",
    name: "Edit Article",
    component: EditArticle,
  },
  {
    path: "/:id/edit1",
    name: "Edit Article New",
    component: EditArticleNew,
  },
  {
    path: "/article",
    name: "Article Alt",
    component: () =>
      import(/* webpackChunkName: "about" */ "../articles/AltArticle.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
