<template>
  <client-only>
    <div style="border: 1px solid #ccc;">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :defaultConfig="toolbarConfig" :mode="mode" />
      <Editor style="height: 500px; overflow-y: hidden;" v-model="html" :defaultConfig="editorConfig" :mode="mode"
        @onCreated="onCreated" />
    </div>
  </client-only>
</template>
<script>
// import * as test from "././../../utils/test"
export default {
  layout: 'nor',
  data() {
    return {
      editor: null,
      html: `<pre><code class="language-javascript">let a = 1
const b = c</code></pre><p>s's's</p>`,
      toolbarConfig: {
        excludeKeys: [
          // 'insertVideo',
          // 'uploadVideo',
          'group-video',//视频上传按钮
          'insertImage'
          // 'group-image',//图片上传接口
        ]
      },
      editorConfig: {
        placeholder: '请输入内容...',
        hoverbarKeys: {
          'link': {
            // 重写 link 元素的 hoverbar
            menuKeys: ['editLink', 'unLink', 'viewLink'],
          },
          'image': {
            // 清空 image 元素的 hoverbar
            menuKeys: [],
          }
        },
        MENU_CONF: {
          insertImage: {
            onInsertedImage(imageNode) {                    // JS 语法
              if (imageNode == null) return
              const { src, alt, url, href } = imageNode
              console.log('inserted image', src, alt, url, href)
            },
            customCheckImageFn(src, alt, url) {                                                    // JS 语法
              if (!src) {
                return
              }
              console.log(888888)
              if (src.indexOf('http') !== 0) {
                return '图片网址必须以 http/https 开头'
              }
              return true
              // 返回值有三种选择：
              // 1. 返回 true ，说明检查通过，编辑器将正常插入图片
              // 2. 返回一个字符串，说明检查未通过，编辑器会阻止插入。会 alert 出错误信息（即返回的字符串）
              // 3. 返回 undefined（即没有任何返回），说明检查未通过，编辑器会阻止插入。但不会提示任何信息
            },
            // customParseImageSrc(src) {               // JS 语法
            //   if (src.indexOf('http') !== 0) {
            //     return `http://${src}`
            //   }
            //   return src
            // }
          },
          uploadImage: {
            server: '/api/upload',
            // 单个文件的最大体积限制，默认为 2M
            maxFileSize: 1 * 1024 * 1024, // 1M
            // 最多可上传几个文件，默认为 100
            maxNumberOfFiles: 1,
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],

            // 小于该值就插入 base64 格式（而不上传），默认为 0
            base64LimitSize: 1 * 1024 * 1024, // 1m
            // 单个文件上传失败
            // onFailed(file: File, res: any) {   // TS 语法
            onFailed(file, res) {           // JS 语法
              console.log(`${file.name} 上传失败`, res)
            },

            // 上传错误，或者触发 timeout 超时
            // onError(file: File, err: any, res: any) {  // TS 语法
            onError(file, err, res) {               // JS 语法
              console.log(`${file.name} 上传出错`, err, res)
              alert(err.message)
            },
          }
        }
      },
      mode: 'default', // or 'simple'
    }
  },
  methods: {
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
      // console.dir(this.editor)
      // console.dir(this.editor.getConfig().toolbarKeys)
      // this.$nextTick(() => {
      //   const toolbar = this.DomEditor.getToolbar(this.editor)
      //   console.log(toolbar)
      //   const curToolbarConfig = toolbar.getConfig()
      //   console.log(curToolbarConfig.toolbarKeys) // 当前菜单排序和分组
      // })
    },
    show() {
      console.log(this.html)
    },
    eventAgent(e) {
      const target = e.target;
      console.log(target, target.nodeName)
      // 注意 e.target.nodeName 的元素名是大写的
      if (target && target.nodeName === "CODE") {
        const dataset = target.innerHTML;
        this.copyInnerTextOfCell(dataset)
        // console.log('innerHTML:', dataset);
      }
    },
    copyInnerTextOfCell(innerText) {
      const tmpInput = document.createElement("input");
      document.body.appendChild(tmpInput);
      tmpInput.value = innerText;
      tmpInput.select();
      document.execCommand("cut"); // copy
      tmpInput.remove();
      // alert("复制成功！" + innerText);
      this.msgSuccess("复制成功！")
      // this.msgWarning("复制成功！")
      // this.msgError("复制成功！")
      // this.msgInfo("复制成功！")
      // this.$message({
      //   showClose: true,
      //   message: "xxxx",
      //   type: "success"
      // });
    }
  },
  mounted() {
    // 模拟 ajax 请求，异步渲染编辑器
    // setTimeout(() => {
    //     this.html = '<p>模拟 Ajax 异步设置内容 HTML</p>'
    // }, 1500)
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  }
};
</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
