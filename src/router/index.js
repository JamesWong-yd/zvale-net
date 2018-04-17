import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

// 路由配置
const RouterConfig = {
  // mode: 'history',
  routes: router

}

// 定义路由
const Route = new VueRouter(RouterConfig)

Route.beforeEach((to, from, next) => {
  next()
})
Route.afterEach((to) => {
  window.scrollTo(0, 0)
})

export default Route
