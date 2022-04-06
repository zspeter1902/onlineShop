const InfoRouter = [
  {
    path: '/about',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/about/index',
    meta: { title: 'About Us' },
    children: [
      {
        path: 'index',
        name: 'About',
        component: () => import('@/views/about/index')
      }
    ]
  },
  {
    path: '/contact',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/contact/index',
    meta: { title: 'Contact Us' },
    children: [
      {
        path: 'index',
        name: 'Contact',
        component: () => import('@/views/contact/index')
      }
    ]
  },
  {
    path: '/privacy-policy',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/privacy-policy/index',
    meta: { title: 'Privacy Policy' },
    children: [
      {
        path: 'index',
        name: 'PrivacyPolicy',
        component: () => import('@/views/privacy-policy/index')
      }
    ]
  },
  {
    path: '/terms',
    component: () => import('@/layout'),
    hidden: true,
    redirect: '/terms/index',
    meta: { title: 'Terms & Conditions', breadcrumb: false },
    children: [
      {
        path: 'index',
        name: 'Terms',
        component: () => import('@/views/terms/index'),
        meta: { title: 'Terms and Conditions' }
      }
    ]
  }

]

export default InfoRouter
