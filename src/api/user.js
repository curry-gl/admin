import request from '@/utils/request'
import querystring from 'querystring'
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    headers:{
      'Content-Type':'application/x-www-form-urlencoded'
    },
    data:querystring.stringify(data)
  })
}

export function getInfo(token) {
  return request({
    url: '/user/me',
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/sign-out',
    method: 'get'
  })
}
