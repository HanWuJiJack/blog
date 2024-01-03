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
    console.log(res)
    return { res: res.data }
  },
  data() {
    return {
      res: {}
    }
  },
  computed: {
    articleList() {
      return this.$store.state.article.list
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
