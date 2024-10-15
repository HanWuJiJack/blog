import axios from 'axios'
import errorCode from '@/utils/errorCode'

axios.defaults.headers.post['Content-Type'] = 'multipart/form-data;'
// 创建axios实例
const service = axios.create({
    // 超时
    timeout: 50000
})
// request拦截器
service.interceptors.request.use(config => {
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
    console.log(error)
    Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg = errorCode[code] || res.data.msg || errorCode['default']
    if (code === 401) {
        return Promise.reject('令牌验证失败')
    } else if (code === 500) {
        return Promise.reject(new Error(msg))
    } else if (code !== 200) {
        return Promise.reject('error')
    } else {
        return res.data
    }
},
    error => {
        // console.log('err' + error)
        let { message } = error;
        if (message == "Network Error") {
            message = "后端接口连接异常";
        }
        else if (message.includes("timeout")) {
            message = "系统接口请求超时";
        }
        else if (message.includes("Request failed with status code")) {
            message = "系统接口" + message.substr(message.length - 3) + "异常";
        }
        return Promise.reject(error)
    }
)

export default service
