import request from '@/utils/request'
// 获取新闻列表
export function getNewsList(params) {
  return request({
    url: '/portal/center/news/list',
    method: 'get',
    params
  })
}
