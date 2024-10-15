import Vue from "vue";
// import Vue2Editor from "vue2-editor";
import {
  Editor,
  Toolbar
} from '@wangeditor/editor-for-vue'
import {
  DomEditor
} from '@wangeditor/editor'
Vue.component('Editor', Editor)
Vue.component('Toolbar', Toolbar)

Vue.prototype.DomEditor = DomEditor
