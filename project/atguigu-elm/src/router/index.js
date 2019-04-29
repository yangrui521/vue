import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from '../routes/index'

const router = new VueRouter({
  /*简写为routes*/
  routes:routes
})

export default router
