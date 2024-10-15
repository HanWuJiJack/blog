import Vue from 'vue'
import Element, {
  Notification,
  Loading
} from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
export default () => {
  Vue.use(Element, {
    locale
  })
  Vue.prototype.loading = function (msg, opacity = 0.4) {
    this.load = Loading.service({
      lock: true,
      text: msg,
      spinner: 'el-icon-loading',
      background: `rgba(0, 0, 0, ${opacity})`
    });
  }
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
    if (path) {
      this.$router.push({
        path
      });
    } else {
      this.$router.back()
    }
  }
}
