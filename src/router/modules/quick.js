const QuickRouter = [
  {
    path: '/update',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/update/index',
    meta: { title: 'COVID-19 UPDATE' },
    children: [
      {
        path: 'index',
        name: 'Update',
        component: () => import('@/views/update/index')
      }
    ]
  },
  {
    path: '/shipping',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/shipping/index',
    meta: { title: 'Shipping & Delivery' },
    children: [
      {
        path: 'index',
        name: 'Shipping',
        component: () => import('@/views/shipping/index')
      }
    ]
  },
  {
    path: '/refund',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/refund/index',
    meta: { title: 'Return & Refund' },
    children: [
      {
        path: 'index',
        name: 'Refund',
        component: () => import('@/views/refund/index')
      }
    ]
  },
  {
    path: '/payment',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/payment/index',
    meta: { title: 'Payment Method' },
    children: [
      {
        path: 'index',
        name: 'Payment',
        component: () => import('@/views/payment/index')
      }
    ]
  }

]

export default QuickRouter
