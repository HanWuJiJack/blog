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
      // store.dispatch('getConfig'),
      store.dispatch('getToken', context),
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
      console.log(err)
    })
    if (res && res.code === 200) {
      commit('config/GET_CONFIG_SUCCESS', res.data)
    }
  },

  // 获取网站配置
  async getToken({
    commit,
    state
  }, ctx) {
    const {
      app,
      redirect,
    } = ctx
    const token = app.$cookies.get("token")
    // 如果存在token
    if (token) {
      try {
        // 当前时间加十分钟超过过期时间刷新一次token
        // const exp = 10 * 60 * 1000
        // if (res.exp && Date.now() + exp > res.exp) {
        //   store.dispatch('getToken', context)
        // }
        const res = await getUserInfo(token)
        app.$cookies.set("token", res.data.token)
        commit('user/SET_USER_INFO', res.data)
        commit('SET_TOKEN', res.data.token)
      } catch (error) {
        if (error.code === 1003) {
          app.$cookies.set("token", "")
          commit('SET_TOKEN', null)
        }
        ctx.error({
          statusCode: 403,
          message: error.message
        })
      }
    }
  },
}

// 获取数据方法
export const getters = {
  GET_TOKEN(state) {
    return state.token
  }
}

//更新数据方法
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ERROR_MESSAGE(state, token) {
    state.errorMessage = token
  }
}