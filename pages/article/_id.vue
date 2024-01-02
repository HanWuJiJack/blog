<template>
  <client-only>
    <div id="editor-content-view" class="editor-content-view"></div>
  </client-only>
</template>
<script>
import { getBlogInfo } from "@/api/service"
export default {
  layout: 'nor',
  async asyncData({ params }) {
    console.log("params",params.id)
    const res = await getBlogInfo(params.id)
    return { html: res.data.html }
  },
  data() {
    return {
      html: ``,
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
  border: 1px solid #ccc;
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