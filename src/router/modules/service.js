import Layout from '@/layout'

const serviceRouter = {
  path: '/service',
  component: Layout,
  redirect: '/service/list',
  children: [
    {
      path: 'list',
      name: 'Service',
      component: () => import('@/views/service/index'),
      meta: { title: '功能服务' }
    },
    {
      path: 'list/:type(\\w+)',
      name: 'Service',
      component: () => import('@/views/service/index'),
      meta: { title: '功能服务' }
    },
    {
      path: 'detail/:id(\\d+)',
      name: 'ServiceDetail',
      hidden: true,
      component: () => import('@/views/service/detail'),
      meta: { title: '产品详情' }
    },
    {
      path: 'need-detail/:id(\\d+)',
      name: 'ServiceNeedDetail',
      hidden: true,
      component: () => import('@/views/service/need-detail'),
      meta: { title: '需求详情' }
    },
    {
      path: 'search',
      name: 'ServiceSearch',
      hidden: true,
      component: () => import('@/views/service/search'),
      meta: { title: '搜索结果' }
    },
    {
      path: '1',
      name: 'Service',
      component: () => import('@/views/service/index'),
      hidden: true,
      meta: { title: '电商平台', icon: 'el-icon-s-platform' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '进口平台' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '出口平台' }
        }
      ]
    },
    {
      path: '2',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '电商园区', icon: 'el-icon-s-grid' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '保税园区' }
        }
      ]
    },
    {
      path: '3',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '物流服务', icon: 'el-icon-s-help' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '国际运力' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: 'B2B出口' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '仓库租赁' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '进口保税' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '直购进口' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '一般出口' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '监管场所' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '快递企业' }
        }
      ]
    },
    {
      path: '4',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '金融服务', icon: 'el-icon-s-finance' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '跨境结算' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '融资服务' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '跨境申报' }
        }
      ]
    },
    {
      path: '5',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '技术服务', icon: 'el-icon-s-marketing' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '系统服务' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '数据服务' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '通信服务' }
        }
      ]
    },
    {
      path: '6',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '咨询服务', icon: 'el-icon-s-comment' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '法律咨询' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '税务咨询' }
        }
      ]
    },
    {
      path: '7',
      name: 'Service',
      hidden: true,
      component: () => import('@/views/service/index'),
      meta: { title: '商务服务', icon: 'el-icon-s-cooperation' },
      children: [
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '出口合规' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '营销推广' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '代运营' }
        },
        {
          path: 'index',
          name: 'Service',
          component: () => import('@/views/service/index'),
          meta: { title: '人才招聘' }
        }
      ]
    }
  ]
}

export default serviceRouter
