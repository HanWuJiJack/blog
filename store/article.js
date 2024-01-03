export const state = () => ({
  // 文章列表
  list: {},
  pageList: {}
})

export const mutations = {
  // 获取文章列表
  SET_All_SUCCESS(state, data) {
    state.list = data
  },
  // 获取文章列表
  SET_PAGE_LIST(state, data) {
    state.pageList = data
  },
}

export const actions = {
  // 获取网站文章
  // async getArticleList({
  //   commit,
  //   state
  // }, query) {
  //   const res = await getBlogList(query)
  //   commit('article/SET_PAGE_LIST', res.data)
  // }
}