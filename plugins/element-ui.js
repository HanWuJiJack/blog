import Vue from 'vue'
import Element, {
  Notification
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
export default () => {
  Vue.use(Element, {
    locale
  })
  Vue.prototype.msgSuccess = function (msg) {
    Notification({
      title: '成功',
      message: msg,
      type: 'success'
    });
  }
  Vue.prototype.msgWarning = function (msg) {
    Notification({
      title: '警告',
      message: msg,
      type: 'warning'
    });
  }

  Vue.prototype.msgError = function (msg) {
    Notification({
      title: '警告',
      message: msg,
      type: 'error'
    });
  }

  Vue.prototype.msgInfo = function (msg) {
    Notification({
      title: '警告',
      message: msg,
      type: 'info'
    });
  }
  Vue.prototype.go = function (path) {
    this.$router.push({
      path
    });
  }
}
