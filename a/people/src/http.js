import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  // 调用接口 添加数据，查询数据
  // baseURL: 'http://localhost:3000/web/api'// 本地地址  调用接口
  baseURL: 'http://www.tyq121.top/web/api'// 网络地址  调用接口
  // baseURL: '/'
})

http.interceptors.request.use(config => {
  // if (localStorage.tyqToken) {
  if (sessionStorage.tyqToken) {
    if (config.url.indexOf('https://restapi.amap.com/v3/') == -1) {
      // config.headers.Authorization = 'Bearer ' + (localStorage.tyqToken || '')
      config.headers.Authorization = 'Bearer ' + (sessionStorage.tyqToken || '')
    }
    // console.log(config.headers.Authorization, 'config.headers.Authorization');
  }
  return config
}, err => {
  return Promise.reject(err)
})
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.status === 401) {
    // router.push('/login')
    Vue.prototype.$gMessage({
      title: '请先登录!',
      duration: 2000,
      type: 'error'
    })
  }
  if (err.response.data.message) {
    Vue.prototype.$gMessage({
      type: 'error',
      message: err.response.data.message
    })
  }
  return Promise.reject(err)
})

export default http