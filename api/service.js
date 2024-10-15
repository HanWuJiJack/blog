import request from "./axios";
import requestUpload from "@/utils/requestUpload";
import requestNode from "./axiosNode";

// 获取博客
export function getBlogList(query) {
  return request({
    url: '/api/custom/faas/list/openblog',
    method: 'get',
    params: query
  })
}
// 获取博客
export function getBlogInfo(id) {
  return request({
    url: '/api/custom/faas/get/openblog?id='+id,
    method: 'get',
  })
}
// 获取code
export function getCode(query) {
  return request({
    url: '/api/open/blog/code',
    method: 'get',
    params: query
  })
}

// 注册
export function register(data) {
  return request({
    url: '/api/open/blog/register',
    method: 'post',
    data: data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/api/open/blog/login',
    method: 'post',
    data: data
  })
}

// 通过token获取用户信息
export function getUserInfo(token) {
  return request({
    url: '/api/auth/blog/token',
    method: 'get',
    config: {
      token
    }
  })
}


// 查询合同信息列表
export function list(query) {
  return request({
    url: '/api/comprehensive/contract/list',
    method: 'get',
    params: query
  })
}

// 查询合同信息详细
export function Info(id) {
  return request({
    url: '/api/comprehensive/contract/' + praseStrEmpty(id),
    method: 'get'
  })
}

// 新增合同信息
export function add(data) {
  return request({
    url: '/api/comprehensive/contract',
    method: 'post',
    data: data
  })
}

// 修改合同信息
export function update(data) {
  return request({
    url: '/api/comprehensive/contract',
    method: 'put',
    data: data
  })
}

// 删除合同信息
export function del(id) {
  return request({
    url: '/api/comprehensive/contract/' + id,
    method: 'delete'
  })
}

// ai抠图

// name
// 1：人像
// 2：通用
export function uploadAIImage(name) {
  return requestUpload({
    url: '/ai/test/' + name,
    method: 'post'
  })
}
