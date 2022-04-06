import Layout from '@/layout'
const loginRouter = {
  path: '/account',
  component: Layout,
  redirect: '/account/login',
  hidden: true,
  children: [{
    path: 'login',
    name: 'Login',
    component: () => import('@/views/account/login'),
    meta: { title: 'Account' }
  }, {
    path: 'register',
    name: 'Register',
    component: () => import('@/views/account/register'),
    meta: { title: 'Create Account' }
  }, {
    path: 'info',
    name: 'AccountInfo',
    component: () => import('@/views/account/info'),
    meta: { title: 'Account' }
  }, {
    path: 'addresses',
    name: 'AccountAddresses',
    component: () => import('@/views/account/addresses'),
    meta: { title: 'Addresses' }
  }]
}

export default loginRouter
