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
  async asyncData({ params, error, payload, store }) {
    if (payload) {
      return { html: payload.html, name: payload.name, }
    } else {
      // const res = await getBlogInfo(params.id)
      const payload = store.state.article.list.find((item) => item.id == params.id)
      return { html: payload.html, name: payload.name, }
      // return { html: res.data.html, name: res.data.name, }
    }
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
      document.getElementById('editor-content-view').innerHTML = this.html.replaceAll('<code class="language-', '<code class="line-numbers language-')
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
  flex: 1;
  // border: 1px solid #ccc;
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
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
}
</style>