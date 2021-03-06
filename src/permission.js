import router from './router'
import store from './store'
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

const white = ['/account/info', '/account/address'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      try {
        // next({ ...to, replace: true })
        next()
      } catch (error) {
        await store.dispatch('user/resetToken')
        Message.error(error || 'Has Error')
        next(`/login?redirect=${to.path}`)
      }
    }
  } else {
    /* has no token*/
    if (white.includes(to.path)) {
      // in the free login whitelist, go directly
      next('/index')
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next()
    }
  }
})
