import requestNode from "./axiosNode";

// 获取博客
export function getBlogListNode(query) {
  return requestNode({
    url: '/custom/faas/list/openblog',
    method: 'get',
    params: query
  })
}
// 获取博客
export function getBlogInfoNode(id) {
  return requestNode({
    url: '/custom/faas/get/openblog?id='+id,
    method: 'get',
  })
}
// 获取code
export function getCodeNode(query) {
  return requestNode({
    url: '/open/blog/code',
    method: 'get',
    params: query
  })
}

// 注册
export function registerNode(data) {
  return requestNode({
    url: '/open/blog/register',
    method: 'post',
    data: data
  })
}

// 登录
export function loginNode(data) {
  return requestNode({
    url: '/open/blog/login',
    method: 'post',
    data: data
  })
}

// 通过token获取用户信息
export function getUserInfoNode(token) {
  return requestNode({
    url: '/auth/blog/token',
    method: 'get',
    config: {
      token
    }
  })
}


// 查询合同信息列表
export function listNode(query) {
  return requestNode({
    url: '/comprehensive/contract/list',
    method: 'get',
    params: query
  })
}

// 查询合同信息详细
export function InfoNode(id) {
  return requestNode({
    url: '/comprehensive/contract/' + praseStrEmpty(id),
    method: 'get'
  })
}

// 新增合同信息
export function addNode(data) {
  return requestNode({
    url: '/comprehensive/contract',
    method: 'post',
    data: data
  })
}

// 修改合同信息
export function updateNode(data) {
  return requestNode({
    url: '/comprehensive/contract',
    method: 'put',
    data: data
  })
}

// 删除合同信息
export function delNode(id) {
  return requestNode({
    url: '/comprehensive/contract/' + id,
    method: 'delete'
  })
}
