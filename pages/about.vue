<template>
  <div class="about">
    <div class="about-me"><el-divider>关于我</el-divider></div>
    <div class="clearfix about-me-detail">
      <div  v-hasPermi="['detection:check-point:creat-buried-depth-list']" class="about-me-left">
        <!-- <img src="https://s.gravatar.com/avatar/d8065bea49aa2877ce13686772727711?s=80" alt="hsueh"> -->
        <h5>hsueh</h5>
      </div>
      <ul class="about-me-right">
        <!-- <li>前端开发经验：2016年大学本科毕业～今日</li>
        <li>90后瘦宅，喜欢美剧、爬山、徒步、篮球、乒乓球、羽毛球等球类</li>
        <li>工作主要使用的是Vue.js、React.js，平时自己偶尔折腾下Node.js</li>
        <li>轻微强迫症，对代码有一点点洁癖</li>
        <li>喜欢看足球，C罗粉</li>
        <li>在学拍照，但是还没有认真去拍过</li>
        <li>未完待续</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'about',
    head() {
      return {
        title: '关于',
      }
    },
    computed:{
      linkList(){
        return this.$store.state.link.list
      }
    },
    data() {
      return {

      }
    },
    methods: {

    },
    mounted() {

    }
  }
</script>

<style lang="scss">
  .about{
    background-color: #fff;
    padding: 15px 0;
    box-sizing: border-box;
    .about-me,
    .contact-me,
    .about-site{
      text-align: center;
      font-size: 18px;
      line-height: 60px;
      color: #333;
    }
    .about-me-detail{
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      .about-me-left{
        padding-bottom: 10px;
        img{
          display: block;
          width: 80px;
          height: 80px;
          margin: 0 auto;
          border-radius: 50%;
        }
        h5{
          padding: 8px 0 0;
        }
      }
      .about-me-right{
        font-size: 13px;
        li{
          list-style: none;
          line-height: 20px;
        }
      }
    }
    .friends-list-wrap{
      max-width: 800px;
      margin: 0 auto;
      padding: 15px;
      li{
        float: left;
        background-color: #eee;
        list-style: none;
        border-radius: 4px;
        margin-bottom: 7px;
        margin-right: 7px;
        a{
          display: inline-block;
          width: 100%;
          height: 100%;
          line-height: 38px;
          padding: 0px 10px;
        }
      }
    }
    .site-box{
      padding: 15px;
      font-size: 13px;
      line-height: 24px;
      box-sizing: border-box;
      a{
        color: #409EFF;
      }
      .site-descript{
        text-indent: 2em;
        padding-bottom: 15px;
      }
      .site-tech{
        padding: 8px 0 8px 2em;
        box-sizing: border-box;
      }
    }
    @media screen and (min-width: 769px) {
      .about-me-left,.about-me-right{
        float: left;
      }
      .about-me-left{
        width: 100px;
        margin: 0 auto;
        text-align: center;
      }
      .about-me-right{
        max-width: 600px;
        margin-left: 20px;
        li{
          padding-bottom: 15px;
        }
      }
    }
    @media screen and (max-width: 768px) {
      .about-me-left{
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
      .about-me-right{
        padding-bottom: 15px;
      }
    }
  }
</style>
