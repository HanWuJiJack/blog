<template>
  <div>

  </div>
</template>

<script>
import list from '../components/articleList'
export default {
  name: 'index',
  components: {
    list
  },
  head() {
    return {
      title: '个人信息',
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

  data() {
    return {
      res: {}
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {

  }
}
</script>
<style lang="">
</style>
