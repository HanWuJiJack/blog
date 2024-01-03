<template>
  <header class="app-header">
    <nav class="nav_wrap clearfix" v-if="!isMobile">
      <h2 class="logo"><a href="/" title="hsueh">hsueh</a></h2>
      <div class="nav_box transition-box" v-show="isShow">
        <el-form :inline="true">
          <!-- <el-input type="search" placeholder="输入文章关键词" v-model="searchval">
            <el-button slot="append" @click="searchHandle" icon="el-icon-search"></el-button>
          </el-input> -->
          <el-select v-model="searchval" filterable remote reserve-keyword :remote-method="remoteMethod"
            :loading="loading" placeholder="请选择文章">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
            <!-- <el-select slot="append" @click="searchHandle" icon="el-icon-search"></el-select> -->
          </el-select>
          <el-button @click="searchHandle_" icon="el-icon-search"></el-button>
        </el-form>
      </div>

      <!-- <ul class="nav_box transition-box" v-show="isShow">
        <nuxt-link to="/" tag="li">杂散笔记</nuxt-link>
        <nuxt-link to="/series" tag="li">系列笔记</nuxt-link>
        <nuxt-link to="/argument" tag="li">个人论点</nuxt-link>
        <nuxt-link to="/personal" tag="li">个人中心</nuxt-link>
        <nuxt-link to="/about" tag="li">关于我</nuxt-link>
        <li>
          <form autocomplete="off" @submit.prevent="searchHandle">
            <el-input type="search" placeholder="输入文章关键词" v-model="searchval">
              <el-button slot="append" @click="searchHandle" icon="el-icon-search"></el-button>
            </el-input>
          </form>
        </li>
        <li>
          <div class="top-userinfo">
            <el-dropdown @command="dropMenuHandler">
              <span class="userinfo-name">{{ $store.state.user.info.userEmail }}</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </li>
      </ul> -->
    </nav>
    <nav class="nav_wrap clearfix" v-else>
      <h1 class="logo">hsueh</h1>
      <div class="menu_icon">
        <i @click="showMenu($event)" class="el-icon-menu"></i>
      </div>
      <el-collapse-transition>
        <ul class="nav_box transition-box" v-show="isShow">
          <!-- <nuxt-link to="/" tag="li">杂散笔记</nuxt-link>
          <nuxt-link to="/series" tag="li">系列笔记</nuxt-link>
          <nuxt-link to="/argument" tag="li">个人论点</nuxt-link>
          <nuxt-link to="/personal" tag="li">个人中心</nuxt-link> -->
          <!-- <nuxt-link to="/about" tag="li">关于我</nuxt-link> -->
          <!-- <nuxt-link to="/about" tag="li">关于我</nuxt-link> -->
          <li>
            <el-form :inline="true">
              <!-- <el-input type="search" placeholder="输入文章关键词" v-model="searchval">
            <el-button slot="append" @click="searchHandle" icon="el-icon-search"></el-button>
          </el-input> -->
              <el-select v-model="searchval" filterable remote reserve-keyword :remote-method="remoteMethod"
                :loading="loading" placeholder="请选择文章">
                <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
                </el-option>
                <!-- <el-select slot="append" @click="searchHandle" icon="el-icon-search"></el-select> -->
              </el-select>
              <el-button @click="searchHandle_" icon="el-icon-search"></el-button>
            </el-form>
            <!-- <form autocomplete="off" @submit.prevent="searchHandleMob" style="width: 96%;">
              <el-input type="search" placeholder="输入文章关键词" @focus="isFocus = true" @blur="isFocus = false"
                v-model="searchval">
                <el-button slot="append" @click="searchHandleMob" icon="el-icon-search"></el-button>
              </el-input>
            </form> -->
          </li>
          <li>
            <div class="top-userinfo">
              <el-dropdown @command="dropMenuHandler">
                <span class="userinfo-name">{{ $store.state.user.info.userEmail }}</span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </li>
        </ul>
      </el-collapse-transition>

    </nav>
  </header>
</template>

<script>
// import * as htmlparser from 'htmlparser2'
export default {
  name: 'navBar',
  data() {
    return {
      isShow: false,
      isMobile: false,
      searchval: '',
      isFocus: false,
      loading: false,
      options: [],
    }
  },
  watch: {},
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.$store.state.article.list.filter(item => {
            return item.name
              .indexOf(query) > -1;
          });
        }, 200);
      } else {
        this.options = [];
      }
    },
    //下拉菜单点击事件
    dropMenuHandler(command) {
      if (command === "logout") {
        //退出登陆
        this.$cookies.set("token", "")
        this.$store.commit('SET_TOKEN', null);
        this.$router.push("/login")
      }
    },
    stopDefault(event) {
      event.stopPropagation()
    },
    showMenu(event) {
      event.stopPropagation()
      this.isShow = !this.isShow
    },
    searchHandle_(e) {
      this.go(`/article/${this.searchval}`)
      return false
    },
    // searchHandle(e) {
    //   let _that = this
    //   let result = ''
    //   let parser = new htmlparser.Parser({
    //     onopentag: function (name, attribs) {
    //       if (name === "script" || name === 'style' || name === "img" || name === 'frame' || name === 'iframe' ||
    //         name === "link") {
    //       }
    //     },
    //     ontext: function (text) {
    //       result += text
    //     },
    //     onclosetag: function (tagname) {
    //       if (tagname === "script" || tagname === "style" || tagname === "frame" || tagname === "iframe") {

    //       }
    //     }
    //   }, { decodeEntities: true })
    //   parser.write(this.searchval)
    //   parser.end()
    //   this.searchval = result

    //   if (this.searchval.trim().length == 0) {
    //     return false
    //   }
    //   this.$router.push({
    //     name: 'search-keywords',
    //     query: {
    //       keywords: this.searchval
    //     }
    //   })
    //   this.searchval = ''
    //   return false
    // },

    // searchHandleMob(e) {
    //   let _that = this
    //   let result = ''
    //   let parser = new htmlparser.Parser({
    //     onopentag: function (name, attribs) {
    //       if (name === "script" || name === 'style' || name === "img" || name === 'frame' || name === 'iframe' ||
    //         name === "link") {
    //       }
    //     },
    //     ontext: function (text) {
    //       result += text
    //     },
    //     onclosetag: function (tagname) {
    //       if (tagname === "script" || tagname === "style" || tagname === "frame" || tagname === "iframe") {

    //       }
    //     }
    //   }, { decodeEntities: true })
    //   parser.write(this.searchval)
    //   parser.end()
    //   this.searchval = result
    //   if (this.searchval.trim().length == 0) {
    //     return false
    //   }
    //   this.isShow = false
    //   this.$router.push({
    //     name: 'search-keywords',
    //     query: {
    //       keywords: this.searchval
    //     }
    //   })
    //   this.searchval = ''
    //   return false
    // }
  },
  mounted() {
    let _this = this
    if (document.body.clientWidth < 865) {
      this.isShow = false
      this.isFocus = false
      this.isMobile = true
    } else {
      this.isShow = true
      this.isMobile = false
    }
    document.onclick = function () {
      if (_this.isMobile && !_this.isFocus) {
        _this.isShow = false
      }

    }
    window.addEventListener('resize', function () {
      if (document.body.clientWidth < 865) {
        _this.isShow = false
        _this.isMobile = true
      } else {
        _this.isShow = true
        _this.isMobile = false
      }
    }, false)
  }
}
</script>

<style lang="scss">
.app-header {
  background-color: #fff;
  height: 60px;
  width: 100%;
  line-height: 60px;
  position: fixed;
  top: 0;
  z-index: 2;
  min-width: 320px;
  box-shadow: 0 0px 1px #eee;

  .top-userinfo {
    display: flex;
    justify-content: center;
    align-items: center;

    .item {
      line-height: 30px;
      margin-top: 6px;
    }

    .bellicon {
      font-size: 20px;
      margin-right: 15px;
    }

    .userinfo-name {
      font-size: 18px;
      cursor: pointer;
      color: #409eff;
    }

    .el-badge__content.is-fixed.is-dot {
      right: 19px;
    }
  }

  .nuxt-link-exact-active {
    color: #000 !important;
    font-weight: bold;
  }

  .menu_icon {
    display: none;
  }

  .nav_wrap {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
    padding: 0 15px;
    box-sizing: border-box;

    .logo {
      float: left;
      padding-left: 20px;
      font-style: oblique;
    }

    .nav_box {
      float: right;

      li {
        float: left;
        padding: 0 15px;
        list-style: none;
        cursor: pointer;
        font-size: 13px;
        color: #666;

        &:hover {
          color: #000;
          font-weight: bold;
        }
      }
    }

    input {
      outline: none;
    }
  }

  @media screen and (max-width: 865px) {
    .menu_icon {
      display: block;
      float: right;
      font-size: 26px;
      padding-right: 20px;
    }

    .logo {
      font-size: 18px;
    }

    .nav_box {
      position: absolute;
      top: 60px;
      left: 0;
      right: 0;
      width: 100%;
      background-color: #fff;
      padding: 0;
      text-align: center;
      box-shadow: 0 2px 5px #eee;

      li {
        float: none !important;
      }

      li+li {
        border-top: 1px solid #eee;
      }
    }
  }
}
</style>
