import axios from 'axios'
import qs from 'qs'

// 设置基础后台请求url
const ajaxUrl = 'http://localhost:3000/net/'
// const ajaxUrl = 'https://bm.zvale.com/bm/'

let ajax = axios.create({
  baseURL: ajaxUrl,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    data = qs.stringify(data)
    return data
  }]
})

// 发起拦截器
ajax.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.params.t = new Date() * 1
    }
    if (config.method === 'post') {
      config.data.t = new Date() * 1
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

export default ajax
