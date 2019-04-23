/*
* 路由器
* */

import Vue from "vue"
import vueRouter from "vue-router"
import routes from "@/routes"

Vue.use(vueRouter)

const router = new vueRouter({
  routes,
   linkActiveClass:"active"
  /*激活全局配置的默认的class类名
  *  就是设置点击添加样式的时候用
  *  两者用的话功能没有差距，但是linkExactActiveClass更加精确
  *linkActiveClass如果两个兄弟路由的路径相似时  就会不精确，出现问题
  *   一般不会使用linkActiveClass
  * */
  // linkExactActiveClass:"active"
  // mode:"history"
  /*mode 中不设置的话，默认值就是hash路由  url中路由与路由之间有#
  *   并且页面不刷新
  *   尽量不适用history
  * */
})


export default router
