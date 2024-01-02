export const state = () => ({
  whileList: ['/login', '/register'],
  // 友链列表
  info: {},
})

export const mutations = {
  // 获取友链列表
  SET_USER_INFO(state, data) {
    state.info = data
  },
}
export const getters = {
  GET_USER_INFO(state) {
    return state.token
  }
}
