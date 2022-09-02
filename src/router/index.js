import Vue from "vue"
import VueRouter from "vue-router"
import PageHome from "@/views/PageHome.vue"
import store from "@/store"

// import auth from "@/router/middleware/auth"
import middlewarePipeline from "@/router/middlewarePipeline"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome,
  },

  // {
  //   path: "/editor",
  //   name: "PageEditor",
  //   component: () =>
  //     import(/* webpackChunkName: "PageEditor" */ "@/views/PageEditor.vue"),

  //   meta: {
  //     middleware: [auth],
  //   },
  // },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }

  const middleware = to.meta.middleware
  const context = {
    to,
    from,
    next,
    store,
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  })
})

export default router
