import request from '@/utils/request'
// 文件上传
export function uploadFile(remotePath, data) {
  return request({
    url: `/thirdparty/third/upload/${remotePath}`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}
// 文件下载
export function downloadFile(remotePath, fileName) {
  return request({
    url: `/thirdparty/third/download/${remotePath}/${fileName}`,
    method: 'get'
  })
}
// 文件删除
export function removeFile(ids) {
  return request({
    url: `/thirdparty/file/delete`,
    method: 'post',
    data: {
      ids
    }
  })
}
// 字典查询
export function getDictList(dictType) {
  return request({
    url: `/portal/center/dict/tree`,
    method: 'post',
    data: {
      dictType,
      cancelHttp: true
    }
  })
}
// 字典查询Map
export function getDictMap(dictParentCode) {
  return request({
    url: `/portal/center/dict/getMapByParent`,
    method: 'post',
    data: {
      dictParentCode,
      cancelHttp: true
    }
  })
}
// 字典分页查询
export function getDictListPage(key, page = 1, limit = 10) {
  return request({
    url: `/portal/center/dict/pagetree`,
    method: 'get',
    params: {
      key,
      page,
      limit
    }
  })
}
// 字典条件查询
export function getDictListFilter(data) {
  return request({
    url: `/portal/center/dict/getByParams`,
    method: 'post',
    data
  })
}
// 字典详情查询
export function getDictDetail(id) {
  return request({
    url: `/portal/dict/info/${id}`,
    method: 'post'
  })
}
