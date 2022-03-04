import request from '@/utils/request'
// 账号登录
export function login(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
// 账号注册
export function register(data) {
  return request({
    url: '/sys/admin/register',
    method: 'post',
    data
  })
}
/**
 * 获取图片验证码
 * @Arraybuffer @Blob uuid
 * */
export function getCaptcha(uuid) {
  return request({
    url: '/captcha.jpg',
    method: 'get',
    responseType: 'blob',
    params: {
      uuid
    }
  })
}
// 获取邮箱验证码
export function getEmailCaptcha(data) {
  return request({
    url: '/sys/admin/sendEmail',
    method: 'post',
    data
  })
}
// 检验用户名、手机号、邮箱
export function checkUser(data) {
  return request({
    url: '/sys/admin/checkUser',
    method: 'post',
    data
  })
}
// 修改密码
export function changePassword(data) {
  return request({
    url: '/sys/user/password',
    method: 'post',
    data
  })
}
// 获取导航菜单
export function getNavMenu(type = 3) {
  return request({
    url: `/portal/center/menus/platform`,
    method: 'get',
    params: {
      type
    }
  })
}
// 退出登录
export function logout() {
  return request({
    url: '/sys/logout',
    method: 'post'
  })
}
