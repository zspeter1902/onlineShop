import Layout from '@/layout'
// , icon: 'el-icon-s-cooperation'
const overseasRouter = {
  path: '/overseas',
  component: Layout,
  redirect: '/overseas/index',
  meta: { title: '海外仓', icon: 'el-icon-s-cooperation' },
  children: [
    {
      path: 'index',
      name: 'Overseas',
      hidden: true,
      component: () => import('@/views/overseas/index'),
      meta: { title: '列表搜仓' }
    },
    {
      path: 'map',
      name: 'OverseasMap',
      hidden: true,
      component: () => import('@/views/overseas/map'),
      meta: { title: '地图搜仓' }
    },
    {
      path: 'detail/:id(\\d+)',
      name: 'OverseasDetail',
      hidden: true,
      component: () => import('@/views/overseas/detail'),
      meta: { title: '海外仓详情' }
    },
    {
      path: 'booking/:id(\\d+)',
      name: 'Booking',
      hidden: true,
      component: () => import('@/views/overseas/booking'),
      meta: { title: '我的预订' }
    }
  ]
}

export default overseasRouter
