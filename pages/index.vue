<template>
  <list :articleList="articleList" :pageNum="pageNum" :pageSize="pageSize"></list>
</template>

<script>
import list from '../components/articleList'
import { Loading } from 'element-ui';
export default {
  watchQuery: ["pageNum", "pageSize"],
  name: 'index',
  // fetchOnServer: false,
  components: {
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
    return { pageNum: Number(query.pageNum) || 1, pageSize: Number(query.pageSize) || 10 }
  },
  fetch({ query, store }) {
    store.dispatch('article/getPageArticleList', { pageNum: Number(query.pageNum) || 1, pageSize: Number(query.pageSize) || 10 })
  },
  data() {
    return {
      res: {}
    }
  },
  computed: {
    articleList() {
      return {
        list: this.$store.state.article.pageList,
        total: this.$store.state.article.total,
      }
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
