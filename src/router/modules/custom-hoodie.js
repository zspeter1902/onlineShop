import Layout from '@/layout'

const customHoodieRouter = {
  path: '/custom-hoodie',
  component: Layout,
  redirect: '/custom-hoodie/index',
  meta: { title: 'Custom Hoodie' },
  children: [
    {
      path: 'index',
      name: 'CustomHoodie',
      hidden: true,
      component: () => import('@/views/custom-hoodie/index'),
      meta: { title: 'Custom Hoodie' }
    }
  ]
}

export default customHoodieRouter
