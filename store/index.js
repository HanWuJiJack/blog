import {
  getBlogList
} from '../api/service'
import { getBlogListNode } from "@/api/serviceNode"
import Element, {
  Notification,
  Loading
} from 'element-ui'
// 设定需要储存的数据及其默认值
export const state = () => ({
})

export const actions = {
  nuxtServerInit(store, context) {
    // console.log(context)
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
      query
    } = ctx
    try {
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
      commit('article/SET_PAGE_LIST', res.data)
    } catch (error) {
      ctx.error({
        statusCode: 403,
        message: error.message
      })
    }
  },
  // 获取网站配置
  // async getConfig({
  //   commit,
  //   state
  // }, params) {
  //   const res = await service.getSiteConfig().catch(err => {
  //     // console.log(err)
  //   })
  //   if (res && res.code === 200) {
  //     commit('config/GET_CONFIG_SUCCESS', res.data)
  //   }
  // },

}
