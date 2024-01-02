export const state = () => ({
  // 网站配置
  config: {},
})

export const mutations = {
  // 获取网站配置
  GET_CONFIG_SUCCESS(state, data) {
    state.config = data
  },
}
