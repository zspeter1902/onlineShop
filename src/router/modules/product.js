import Layout from '@/layout'

const productRouter = {
  path: '/collections',
  component: Layout,
  redirect: '/collections/index',
  hidden: true,
  children: [{
    path: 'index',
    name: 'Collections',
    hidden: true,
    component: () => import('@/views/collections/index'),
    meta: { title: 'Collections' }
  }, {
    path: 'new-arrivals',
    name: 'NewArrivals',
    component: () => import('@/views/collections/product-list'),
    meta: { title: 'New Arrivals' }
  }, {
    path: 'hot-sale',
    name: 'HotSale',
    component: () => import('@/views/collections/product-list'),
    meta: { title: 'Hot Sale' }
  }, {
    path: 'custom-hoodie',
    meta: { title: 'Custom Hoodie' },
    component: () => import('@/views/collections/product-list'),
    name: 'CustomHoodie'
  }, {
    path: 'custom-baseball-jacket',
    meta: { title: 'Custom Baseball Jacket', custom: true },
    component: () => import('@/views/collections/product-list'),
    children: [
      {
        path: 'new-arrivals',
        name: 'CustomBaseballJacketHotSale',
        component: () => import('@/views/collections/product-list'),
        meta: { title: 'New Arrivals' }
      },
      {
        path: 'hot-sale',
        name: 'CustomBaseballJacketHotSale',
        component: () => import('@/views/collections/product-list'),
        meta: { title: 'Hot Sale' }
      }
    ]
  }, {
    path: ':type?/:product/:id(\\d+)',
    name: 'ProductDetail',
    meta: { title: 'Product' },
    component: () => import('@/views/collections/product')
  }]
}

export default productRouter
