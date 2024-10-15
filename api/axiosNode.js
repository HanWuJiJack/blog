import axios from 'axios'
import {
  Notification,
  Message,
  Loading
} from 'element-ui'
import errorCode from '@/utils/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  // baseURL: 'http://192.168.10.135:3001',
  baseURL: 'http://127.0.0.1:3001',
  // baseURL: 'http://s5.z100.vip:25258',
  // 超时
  timeout: 100000
})
// request拦截器
service.interceptors.request.use(config => {
  if (config.token) {
    config.headers['Authorization'] = 'Bearer ' + config.token // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  // get请求映射params参数
  if (config.method === 'get' && config.params) {
    let url = config.url + '?';
    for (const propName of Object.keys(config.params)) {
      const value = config.params[propName];
      var part = encodeURIComponent(propName) + "=";
      if (value !== null && typeof (value) !== "undefined") {
        if (typeof value === 'object') {
          for (const key of Object.keys(value)) {
            if (value[key] !== null && typeof (value[key]) !== 'undefined') {
              let params = propName + '[' + key + ']';
              let subPart = encodeURIComponent(params) + '=';
              url += subPart + encodeURIComponent(value[key]) + '&';
            }
          }
        } else {
          url += part + encodeURIComponent(value) + "&";
        }
      }
      config.data = JSON.stringify(config.params)
    }
    url = url.slice(0, -1);
    config.params = {};
    config.url = url;
  }
  // console.log('config=>2', config)
  return config
}, error => {
  // console.log(error)
  Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
  // 未设置状态码则默认成功状态
  const code = res.data.code || 200;
  // console.log("res", res)
  // 获取错误信息
  const message = res.data.message || errorCode[code] || errorCode['default']
  if (code !== 200) {
    Notification.error({
      title: message
    })
    return Promise.reject({
      message,
      code
    })
  } else {
    return res.data
  }
},
  error => {
    // console.dir(error)
    let {
      message
    } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    Notification.error({
      title: error?.response?.data?.message || message,
    })
    return Promise.reject({
      message: error?.response?.data?.message || message,
      code: error?.response?.data?.code || 403,
    })
  }
)

function request({
  method = 'get',
  url,
  data,
  params,
  headers,
  config = {},

}) {
  method = method.toLowerCase()
  // let loading = undefined
  // if (method === 'post') {
  //   loading = Loading.service({
  //     lock: true,
  //     //   text: 'Loading',
  //     spinner: 'el-icon-loading',
  //     background: 'rgba(0, 0, 0, 0.4)'
  //   });
  // }
  return new Promise((resolve, reject) => {
    service({
      method,
      url,
      data,
      params,
      headers,
      ...config
    }).then((res) => {
      resolve(res)
    }).catch(error => {
      reject(error)
    }).finally(() => {
      // if (loading) {
      //   setTimeout(() => {
      //     loading.close();
      //     loading = undefined
      //   }, 1500)
      // }
    })
  })
}

export default request
