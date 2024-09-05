<template>
  <header class="app-header">
    <nav class="nav_wrap clearfix" v-if="!isMobile">
      <h2 class="logo"><router-link to="/" tag="a">hsueh</router-link></h2>
      <!-- <div class="nav_box transition-box" v-show="isShow">
        <el-form :inline="true">
          <el-select v-model="searchId" @change="searchHandle_" filterable remote reserve-keyword
            :remote-method="remoteMethod" :loading="loading" placeholder="请选择文章">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id">
            </el-option>
          </el-select>
        </el-form>
      </div> -->
    </nav>
    <nav class="nav_wrap clearfix" v-else>
      <h1 class="logo"><router-link to="/" tag="a">hsueh</router-link></h1>
      <!-- <div class="menu_icon">
        <i @click.prevent="showMenu($event)" class="el-icon-menu"></i>
      </div>
      <div class="nav_box transition-box" v-show="isShow">
        <el-form label-width="0px">
          <el-autocomplete style="width: 90%;" v-model="searchName" :fetch-suggestions="remoteMethodAsync"
            placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
        </el-form>
      </div> -->
    </nav>
  </header>
</template>

<script>
// import * as htmlparser from 'htmlparser2'
import {
  getBlogList
} from '../api/service'
export default {
  name: 'navBar',
  data() {
    return {
      isShow: false,
      isMobile: false,
      searchId: "",
      searchName: "",
      isFocus: false,
      loading: false,
      options: [],
    }
  },
  watch: {},
  methods: {
    handleSelect(item) {
      this.isShow = !this.isShow
      this.searchId = item.id
      this.go(`/article/${item.id}`)
    },
    remoteMethodAsync(query, cb) {
      if (query !== '') {
        this.loading = true;
        getBlogList({
          pageNum: 1,
          pageSize: 9999, name: query
        }).then(res => {
          this.loading = false;
          this.options = res.data.list.map(item => {
            item.value = item.name;
            return item
          })
          cb(this.options)
        })
      } else {
        this.options = [];
        cb(this.options)
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
    modelClick($event) {
      if ($event.target._prevClass == 'el-input__inner') {
        this.$refs.selectRef.blur();
      }
    },
    stopDefault(event) {
      event.stopPropagation()
    },
    showMenu(event) {
      this.isShow = !this.isShow
      event.stopPropagation()
      this.$nextTick(() => {
        // 在ios移动端使用elmentUI后无法弹出软键盘
        Array.from(document.getElementsByClassName('el-select')).forEach((item) => {
          item.children[0].children[0].removeAttribute('readOnly')
          item.children[0].children[0].onblur = function () {
            let _this = this
            setTimeout(() => {
              _this.removeAttribute('readOnly')
            }, 200)
          }
        })
      })
    },
    remoteMethod(query) {
      if (query !== '') {
        this.loading = true;
        getBlogList({
          pageNum: 1,
          pageSize: 9999, name: query
        }).then(res => {
          this.options = res.data.list
          this.loading = false;
        })
      } else {
        this.options = [];
      }
    },
    searchHandle_(e) {
      if (this.searchId) {
        let current = this.options.find(item => {
          return item.id === this.searchId
        })
        if (current) {
          this.searchName = current.name
        }
        // this.searchName
        this.go(`/article/${this.searchId}`)
        return false
      } else {
        this.msgInfo("请先选择~")
      }

    },
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

  .router-link-exact-active {
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
      // border: 1px solid red;
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