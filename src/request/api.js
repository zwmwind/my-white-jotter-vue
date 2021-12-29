// 刚刚封装的axios
import request from './axios'

export const loginApi = (username, password) => {
  return request({
    url: '/login',
    method: 'POST',
    data: {
      username: username,
      password: password
    }
  })
}
