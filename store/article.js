import { getBlogInfo } from "@/api/service"
export const state = () => ({
  // 文章列表
  list: [],
  pageList: [],
  info: {}
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

  SET_INFO(state, data) {
    state.info[data.id] = data
  },
}

export const actions = {
  // 获取网站文章
  getPageArticleList({
    commit,
    state
  }, query) {
    const {
      pageNum,
      pageSize
    } = query
    commit('SET_PAGE_LIST', state.list.slice((pageNum - 1) * pageSize, pageNum * pageSize))
  },
  async getArticleInfo({
    commit,
    state
  }, { id }) {
    try {
      const res = await getBlogInfo(id)
      commit('SET_INFO', res.data)
    } catch (error) {
      ctx.error({
        statusCode: 403,
        message: error.message
      })
    }
  },
}