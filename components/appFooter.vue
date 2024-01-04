<template>
  <footer class="app-footer">
    <p>Powered By <a href="https://zh.nuxtjs.org/" rel="nofollow" target="_blank">Nuxt.js</a>，Designed By <a href="https://github.com/HanWuJiJack" target="_blank">
        Hsueh</a></p>
    <p class="copyright">Copyright© 2020-{{ currentYear }}</p>
    <!-- <div style="height: 17px;">
      <a target="_blank" rel="nofollow" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011702500392"
         style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
        <img src="@/assets/images/beian.png" style="float:left;"/>
        <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">渝公网安备
          50011702500392号</p></a>
    </div>
    <p><a href="http://beian.miit.gov.cn" rel="nofollow" target="_blank">渝ICP备17014610号</a></p> -->
  </footer>
</template>

<script>
export default {
  name: 'appFooter',
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },
  computed: {
    siteConfig() {
      return this.$store.state.config.config
    },
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style scoped lang="scss">
.app-footer {
  text-align: center;
  font-size: 12px;
  background-color: #fff;
  padding: 10px 0;
  min-width: 320px;
  box-sizing: border-box;
  color: #939393;

  a {
    color: #939393;
  }

  .copyright {
    a {
      font-style: italic;
    }
  }
}
</style>
