export const state = () => ({
  // 文章列表
  list: {},
})

export const mutations = {
  // 获取文章列表
  SET_ART_SUCCESS(state, data) {
    state.list = data
  },
}
