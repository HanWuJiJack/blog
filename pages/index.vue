<template>
  <list :articleList="res"></list>
</template>

<script>
import {
  getBlogList
} from '../api/service'
import sidebar from '../components/sidebar'
import list from '../components/articleList'
export default {
  watchQuery: true,
  name: 'index',
  components: {
    sidebar,
    list
  },
  head() {
    return {
      title: '首页',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的blog'
      },
      ],
    }
  },
  async asyncData({ query }) {
    const res = await getBlogList({ pageNum: query.pageNum || 1, pageSize: query.pageSize || 10 })
    return { res: res.data }
  },
  // fetch({ store, query }) {
  //   return getBlogList({ pageNum: query.pageNum || 1, pageSize: query.pageSize || 10 }).then(res => {
  //     store.commit('article/SET_PAGE_LIST', res.data)
  //   })
  // },
  data() {
    return {
      res: {}
    }
  },
  computed: {
    articleList() {
      return this.$store.state.article.pageList
    },
  },
  methods: {
  },
  mounted() {

  }
}
</script>

<style lang="">

</style>
