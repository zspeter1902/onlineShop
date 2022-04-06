import Layout from '@/layout'
// , icon: 'el-icon-s-cooperation'
const customBaseballJacketRouter = {
  path: '/custom-baseball-jacket',
  component: Layout,
  // redirect: '/custom-baseball-jacket/index',
  meta: { title: 'Custom-Baseball-Jacket' },
  children: [
    {
      path: 'new-arrivals',
      name: 'CustomBaseballJacketHotSale',
      component: () => import('@/views/custom-baseball-jacket/index'),
      meta: { title: 'New Arrivals' }
    },
    {
      path: 'hot-sale',
      name: 'CustomBaseballJacketHotSale',
      component: () => import('@/views/custom-baseball-jacket/index'),
      meta: { title: 'Hot Sale' }
    }
  ]
}

export default customBaseballJacketRouter
