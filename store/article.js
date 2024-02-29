import { getBlogInfo, getBlogList } from "@/api/service"
import { getBlogInfoNode, getBlogListNode } from "@/api/serviceNode"
import Element, {
  Notification,
  Loading
} from 'element-ui'
export const state = () => ({
  // 文章列表
  list: [],
  pageList: [],
  total: 0,
  info: {}
})

export const mutations = {
  // 获取文章列表
  SET_All_SUCCESS(state, data) {
    state.list = data.list
    state.total = data.page.total
  },
  // 获取文章列表
  SET_PAGE_LIST(state, data) {
    state.pageList = data.list
    state.total = data.page.total
  },

  SET_INFO(state, data) {
    state.info[data.id] = data
  },
}

export const actions = {
  // 获取网站文章
  async getPageArticleList({
    commit,
    state
  }, query) {
    const { $axios } = query

    let res
    if (process.server) {
      res = await getBlogListNode({
        pageNum: Number(query.pageNum) || 1,
        pageSize: Number(query.pageSize) || 10
      })
    } else {
      let load = Loading.service({
        lock: true,
        spinner: 'el-icon-loading',
        background: `rgba(0, 0, 0, 0.4)`
      });
      res = await getBlogList({
        pageNum: Number(query.pageNum) || 1,
        pageSize: Number(query.pageSize) || 10
      })
      load.close()
    }

    commit('SET_PAGE_LIST', res.data)
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