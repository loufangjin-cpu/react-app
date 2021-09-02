import axios from 'axios'
import qs from 'qs'
import { Modal, message } from 'antd'
import log from '@/utils/log'
import codeMessage from './codeMessage.js'

const confirm = Modal.confirm

// 记录和显示错误
function errorLog(msg) {
  log.danger(msg)
  message.error(msg)
  return Promise.reject(msg)
}

// 创建一个 axios 实例
let service = axios.create({
  baseURL: process.env.BSAPP_API,
  timeout: 10 * 1000, // 请求超时时间
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: 'brackets' })
  }
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line
    // config.data.zone_name = Intl.DateTimeFormat().resolvedOptions().timeZone
    // config.data.h_lc = language
    // 在请求发送之前做一些处理 const token = util.cookies.get('token'); 让每个请求携带token--
    // ['X-Token']为自定义key 请根据实际情况自行修改 config.headers['X-Token'] = token;
    return config
  },
  (error) => {
    // 发送失败 console.log(error);
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (typeof response.data === 'string') {
      window.open(response.request.responseURL)
      confirm({
        title: '提示',
        content: '登录成功后，请刷新当前页面！',
        onOk() {
          window.location.reload()
        },
        onCancel() {
          window.location.reload()
        }
      })
    }

    // dataAxios 是 axios 返回数据中的 data
    const dataAxios = response.data
    // 这个状态码是和后端约定的
    const { code, ret } = dataAxios
    //兼容ret的情况
    if (ret === 1) return dataAxios
    if (ret === -2 || ret === -3) return Promise.reject(dataAxios)
    // 根据 code 进行判断

    switch (code) {
      case 0:
        // [ 示例 ] code === 0 代表没有错误
        return dataAxios
      case -1:
        // [ 示例 ] 其它和后台约定的 code
        return errorLog(dataAxios.msg)
      default:
        // 不是正确的 code
        return errorLog(dataAxios.msg)
    }
  },
  (error) => {
    if (error && error.response) {
      error.message = codeMessage[error.response.status]
      // error.response.config.url
    }
    return errorLog(error)
  }
)
export default service
