import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// let httpFlag = true
const pending = [] // 声明一个数组用于存储每个ajax请求的取消函数和ajax标识
const CancelToken = axios.CancelToken
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    // 'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  },
  CancelToken: CancelToken.source().token
})
const removePending = (config) => {
  for (const p in pending) {
    // 当前请求在数组中存在时执行函数体
    if (pending[p].u === process.env.VUE_APP_BASE_API + config.url + '&' + config.method) {
      // 执行取消操作
      pending[p].f()
      // 把这条记录从数组中移除
      pending.splice(p, 1)
    }
  }
}
// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      if (config.method.toLowerCase() === 'get') {
        if (!config.params) {
          config['params'] = {}
        }
      } else if (config.method.toLowerCase() === 'post') {
        if (!config.data) {
          config['data'] = {}
        }
      }
      // console.log(config)
      config.headers['token'] = getToken()
    }
    const str_data = JSON.stringify(config.data || config.params || '{}') // 参数中携带cancelHttp，不防止多次请求
    if (str_data.indexOf('cancelHttp') > -1) {
      // httpFlag = false
    } else {
      removePending(config) // 在一个ajax发送前执行一下取消操作
      // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
      config.cancelToken = new CancelToken((c) => {
        pending.push({ u: process.env.VUE_APP_BASE_API + config.url + '&' + config.method, f: c })
      })
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    if (Object.prototype.toString.call(res) === '[object Blob]') {
      return res
    }

    if (res.code === 0) {
      return res
    }
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 0) {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if ([15103, 15201].includes(res.code)) {
        // to re-login
        MessageBox.confirm('登录状态已经失效，请重新登录！', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.msg || '错误'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    if (error.response && error.response.status === 401) {
      store.dispatch('user/resetToken').then(() => {
        // location.reload()
      })
      return
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
