<template>
  <div class="layout_css">
    <AppHeader></AppHeader>
    <transition>
      <div class="app-main">
        <nuxt />
      </div>
    </transition>
    <el-backtop :top="100">
      <div style="{
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0,0,0, .12);
            text-align: center;
            line-height: 40px;
            color: #666;
          }">
        <svgicon name="up" width="20" height="20" color="#42b983"></svgicon>
      </div>
    </el-backtop>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import AppHeader from '../components/appHeader.vue'
import AppMain from '../components/appMain.vue'
import AppFooter from '../components/appFooter.vue'
export default {
  components: {
    AppHeader, AppMain, AppFooter
  },
}
</script>
<style lang="scss" scoped>
.layout_css {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: auto;
  min-height: 100%;
  padding-top: 60px;
  width: 100%;
  background-color: #f8fcff;

  .app-main {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;

    @media screen and (max-width: 920px) {
      min-width: 320px;
    }
  }

  @media screen and (max-width: 920px) {
    min-width: 320px;
  }

  .app-header {
    height: 60px;
  }

  .app-main {
    flex: 1;
  }

  .app-footer {
    height: 94px;
  }
}
</style>
