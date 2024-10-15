<template>
  <div class="layout_css">
    <transition>
      <div class="app-main">
        <nuxt />
      </div>
    </transition>
    <!-- <AppFooter></AppFooter> -->
  </div>
</template>
<script>
import AppMain from '../components/appMain.vue'
import AppFooter from '../components/appFooter.vue'
export default {
  components: {
    AppMain, AppFooter
  },
}
</script>
<style lang="scss" scoped>
.layout_css {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  // width: 100vw;
  background-color: #f8fcff;
  margin: 0;
  padding: 0;

  .app-main {
    min-height: calc(100vh - 94px);
    // width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
}
</style>
