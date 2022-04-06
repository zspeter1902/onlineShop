import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
import InfoRouter from './modules/info'
import QuickRouter from './modules/quick'
import policiesRouter from './modules/policies'

import productRouter from './modules/product'
import loginRouter from './modules/login'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  loginRouter,

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/wishlist',
    component: Layout,
    redirect: '/wishlist/index',
    hidden: true,
    children: [{
      path: 'index',
      name: 'Wishlist',
      component: () => import('@/views/wishlist/index'),
      meta: { title: 'wishlist' }
    }]
  },
  {
    path: '/checkouts',
    component: () => import('@/views/checkouts/index'),
    name: 'Checkouts',
    hidden: true,
    meta: { title: 'Checkout' }
  },
  ...policiesRouter,
  ...InfoRouter,
  ...QuickRouter
]
export const menuRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'Index',
      component: () => import('@/views/index/index'),
      meta: { title: 'Home' }
    }]
  },
  productRouter
]
/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  /** when your routing map is too long, you can split it into small modules **/
  {
    path: '/cart',
    component: () => import('@/layout'),
    redirect: '/cart/index',
    hidden: true,
    children: [
      {
        path: 'index',
        name: 'MyCart',
        component: () => import('@/views/cart/index'),
        meta: { title: 'Your Shopping Cart' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  base: '/',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes.concat(menuRoutes, asyncRoutes)
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
