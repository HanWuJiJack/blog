<template>
  <client-only>
    <div id="editor-content-view" class="editor-content-view"></div>
  </client-only>
</template>
<script>
export default {
  layout: 'nor',
  data() {
    return {
      html: `<pre><code class="language-javascript">let a = 1
const b = c</code></pre><pre><code class="language-javascript">let a = 1
const b = c</code></pre><p>s's's</p>`,
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