import service from '@/plugin/axios'

/**发送短信 */
export const reqSmsSend = (data = {}) => {
  return service({
    url: '/opapi/sms/list',
    method: 'post',
    data
  })
}
