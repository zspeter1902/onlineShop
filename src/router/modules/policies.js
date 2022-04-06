const policiesRouter = [
  {
    path: '/shipping-policy',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/shipping-policy/index',
    children: [
      {
        path: 'index',
        name: 'ShippingPolicy',
        component: () => import('@/views/shipping-policy/index'),
        meta: { title: 'Shipping-policy' }
      }
    ]
  }
]

export default policiesRouter
