import axios from 'axios'


// 超时时间
axios.defaults.timeout = 300000
// 跨域请求，允许保存cookie
// axios.defaults.withCredentials = true

axios.interceptors.request.use(config => {
    /**
     * 为防止ie浏览器缓存，针对get请求在params中添加时间戳
     * */
    if (config.method.toLocaleUpperCase() === 'GET') {
      const _t = new Date().getTime()
      if (typeof config.params === 'object') {
        config.params._t = _t
      } else {
        config.params = {
          _t: _t
        }
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// HTTPresponse拦截--在响应之后对数据进行一些处理
axios.interceptors.response.use(res => {
    return res
  },
  error => {
    return Promise.reject(new Error(error))
  }
)
export default axios
