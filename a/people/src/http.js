import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3000/web/api'// 本地地址
  // baseURL: 'http://115.159.161.66:3000/web/api'// 本地地址
})

http.interceptors.request.use(config => {
  // console.log(localStorage.tyqToken, 'localStorage.tyqToken')
  if (localStorage.tyqToken) {
    config.headers.Authorization = 'Bearer ' + (localStorage.tyqToken || '')
    // console.log(config.headers.Authorization, 'config.headers.Authorization');
  }
  return config
}, err => {
  return Promise.reject(err)
})
http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$gMessage({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http