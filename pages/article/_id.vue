<template>
  <client-only>
    <div id="editor-content-view" class="editor-content-view"></div>
  </client-only>
</template>
<script>
import { getBlogInfo } from "@/api/service"
export default {
  watchQuery: true,
  layout: 'nor',
  // async asyncData({ params, error, payload, store }) {
  //   if (payload) {
  //     return { html: payload.html, name: payload.name, }
  //   } else {
  //     // const res = await getBlogInfo(params.id)
  //     // return { html: res.data.html, name: res.data.name, }
  //     // const payload = store.state.article.list.find((item) => item.id == params.id)
  //     // return { html: payload.html, name: payload.name, }
  //     const payload = store.state.article.info[params.id]
  //     return { html: payload.html, name: payload.name, }
  //   }
  // },
  async fetch({ query, store, params }) {
    await store.dispatch('article/getArticleInfo', { id: params.id })
  },
  data() {
    return {
      html: ``,
      name: ""
    }
  },
  head() {
    return {
      title: this.name,
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: this.name
      },
      ],
    }
  },
  methods: {},
  mounted() {
    setTimeout(() => {
      const payload = this.$store.state.article.info[this.$route.params.id]
      // console.log("payload", payload,this.$route.params.id)
      document.getElementById('editor-content-view').innerHTML = payload.html.replaceAll('<code class="language-', '<code class="line-numbers language-')
      this.$nextTick(() => {
        Prism.highlightAll()
      })
    }, 0);

  },
};
</script>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss">
.editor-content-view {
  // flex: 1;
  border: 1px solid #fff;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-sizing: border-box;
  max-width: 1200px;
  width: 100%;

  table {
    border-collapse: collapse;
  }

  td,
  th {
    border: 1px solid #ccc;
    min-width: 50px;
    height: 20px;
  }

  th {
    background-color: #f1f1f1;
  }

  ul,
  ol {
    padding-left: 20px;
  }

  input[type="checkbox"] {
    margin-right: 5px;
  }

  img {
    width: 100%;
  }
}
</style>