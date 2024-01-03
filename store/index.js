import {
  getBlogList
} from '../api/service'
// 设定需要储存的数据及其默认值
export const state = () => ({
  token: null,
  errorMessage: ""
})

export const actions = {
  nuxtServerInit(store, context) {
    const initAppData = [
      store.dispatch('getArticleList', context),
    ]
    return Promise.all(initAppData)
  },
  // 获取网站文章
  async getArticleList({
    commit,
    state
  }, ctx) {
    const {
      app,
    } = ctx
    try {
      const res = await getBlogList({
        pageNum: 1,
        pageSize: 9999
      })
      commit('article/SET_ART_SUCCESS', res.data.list)
    } catch (error) {
      ctx.error({
        statusCode: 403,
        message: error.message
      })
    }
  },
  // 获取网站配置
  async getConfig({
    commit,
    state
  }, params) {
    const res = await service.getSiteConfig().catch(err => {
      // console.log(err)
    })
    if (res && res.code === 200) {
      commit('config/GET_CONFIG_SUCCESS', res.data)
    }
  },

}
//更新数据方法
export const mutations = {
  SET_ERROR_MESSAGE(state, token) {
    state.errorMessage = token
  }
}