<template>
  <div class="body">
    <el-button @click="pdfDown_" class="exportButton">导出</el-button>
    <div class="pdf" ref="box">
      <div class="userInfo">
        <el-descriptions title="Hsueh" :column="2">
          <el-descriptions-item label="求职意向">全栈工程师</el-descriptions-item>
          <el-descriptions-item label="工作时间">2018年11月 - {{ `${new Date().getFullYear()}年${new Date().getMonth() +
            1}月` }}</el-descriptions-item>
          <el-descriptions-item label="性别">男</el-descriptions-item>
          <el-descriptions-item label="出生年月">1997年1月</el-descriptions-item>
          <el-descriptions-item label="邮箱">79571635@qq.com</el-descriptions-item>
        </el-descriptions>
      </div>
      <div class="box_title">
        个人优势
      </div>
      <p class="text__">
        作为一个拥有五年工作经验的开发者，我精通Node.js、Redis、MySQL、 RabbitMQ、react、vue 、微信小程序 等 技术。在过去的五年里，我积累了丰富的项目经验，包括 Web
        应用开发、微服务架构、分布式系统设计和实现等。
      </p>
      <div class="box_title">
        工作经历
      </div>
      <div class="box_head">
        <span class="text_ box_head_title">2021年6月 - {{ `${new Date().getFullYear()}年${new Date().getMonth() +
          1}月` }}</span>
        <span class="text_ box_head_title">上海海骄有限公司</span>
      </div>
      <div>
        <p class="text_">
          工作内容：
        </p>
        <p class="text__" style="padding-left: 20px">
          1. 管道检测平台系统开发：负责推动公司开发管道检测平台系统，包括需求分析、系统设计、编码实现、测试和部署等工作；
        </p>
        <p class="text__" style="padding-left: 20px">
          2、新功能开发，主要指综合管理系统新增功能模块开发、h5展示页面开发；
        </p>
        <p class="text__" style="padding-left: 20px">
          3、维护系统；
        </p>
        <p class="text__" style="padding-left: 20px">
          4、参与需求评审会和产品经理,后端讨论项目如何具体落地；
        </p>
        <p class="text_">
          公司技术栈：
        </p>
        <div class="text__" style="padding-left: 20px">
          <p>综合管理后台系统、远传后台管理系统、售后管理系统、H5：Vue+VueRouter+Vuex+Element+Axios+Eslint+Less；</p>
          <p>相控阵后台管理系统：React+ReactRouterDom+ReactRedux+ReduxThunk+Axios+Typescript+Eslint+Less；</p>
          <p>售后小程序：微信小程序原生开发；</p>
        </div>
      </div>
      <div class="box_head">
        <span class="text_ box_head_title">2020.10-2021.06</span>
        <span class="text_ box_head_title">上海致维网络有限公司</span>
      </div>
      <div class="break_page">
        <p class="text_">
          工作内容：
        </p>
        <p class="text__" style="padding-left: 20px">
          1、新功能开发，主要指母婴综合管理系统和智零售App新增功能模块开发；
        </p>
        <p class="text__" style="padding-left: 20px">
          2、维护系统包含：母婴综合管理系统、智零售App、nb3后台管理系统（用于门店管理智能卖货的小程序和智零售App）等；
        </p>
        <p class="text__" style="padding-left: 20px">
          3、参与需求评审会和产品经理,后端讨论项目如何具体落地；并且给出项目经理具体开发时间；
        </p>
        <p class="text_">
          主要技术栈：
        </p>
        <p class="text__" style="padding-left: 20px">
          母婴综合管理系统、nb3后台管理系统：Angularjs(1.5.6)+Material+Nginx；
        </p>
        <p class="text__" style="padding-left: 20px">
          智零售App：ReactNativ（React+reactNavigation+ReactRedux+reduxSaga+Fetch+Less）；
        </p>
      </div>
      <div class="box_head">
        <span class="text_ box_head_title">2018.11-2020.09</span>
        <span class="text_ box_head_title">上海星轨网络有限公司 </span>
      </div>
      <div>
        <p class="text_">
          工作内容：
        </p>
        <p class="text__" style="padding-left: 20px">
          1、以产品经理的身份和用户对接需求，和ui设计师对接页面展示效果。
        </p>
        <p class="text__" style="padding-left: 20px">
          2、新系统搭建，负责新系统前端从0到1搭建类型有： h5，微信小程序，后台管理系统，公司官网。
        </p>
        <p class="text__" style="padding-left: 20px">
          3、维护老系统。
        </p>
        <p class="text_">
          主要技术栈：
        </p>
        <p class="text__" style="padding-left: 20px">
          律师事务所系统：vue，adonis。<br />
          青山回收小程序：Taro(开放式跨端跨框架解决方案)，React全家桶，adonis。<br />
          B&W官网:express，express-art-template，jquery。<br />
        </p>
      </div>
      <span class="box_title">
        自我评价
      </span>
      <div>
        <p class="text_">
          为人真诚，谦虚好学，乐观开朗，能很好地处理人际关系，遇到问题不抱怨而是用行动去解决，
          有较强的责任心和团队合作精神；对自己要求严格，做事情讲究高质量。
        </p>
      </div>
      <span class="box_title">
        教育背景
      </span>
      <div class="box_head line">
        <span class="text_ box_head_title">2016.09-2019.07 </span>
        <span class="text_ box_head_title">安徽机电职业技术学院</span>
        <span class="text_ box_head_title">大专</span>
      </div>
      <div class="box_head line">
        <span class="text_ box_head_title">2022.03-2024.07 </span>
        <span class="text_ box_head_title">阜阳师范大学</span>
        <span class="text_ box_head_title">本科</span>
      </div>
      <span class="box_title">
        开源
      </span>
      <div>
        <p class="text__" style="cursor: pointer">
          <a href="https://github.com/HanWuJiJack" target="_blank" rel="noopener noreferrer">
            <span>github</span>&nbsp;&nbsp;
            <img width="30" src="@/assets/images/GitHub.png" alt="" />
          </a>
        </p>
        <!-- <p class="text__" style="padding-top: 20px, cursor: pointer">
        <a href="https://s1.z100.vip:8555/vue/welcome" target="_blank" rel="noopener noreferrer">开源项目体验地址</a>
      </p> -->
      </div>
    </div>

  </div>
</template>

<script>
import htmlToPdf from '../utils/htmlToPdf.js'
export default {
  name: 'info',
  layout: 'nor',
  head() {
    return {
      title: '个人信息',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的信息'
      },
      ],
    }
  },
  data() {
    return {
      res: {},
    }
  },
  computed: {
  },
  methods: {
    pdfDown_() {
      htmlToPdf('Hsueh', this.$refs.box)
    }
  },
  mounted() {

  }
}
</script>
<style  lang="scss">
.pdf {
  .pdf-empty {
    box-sizing: border-box;
  }

  .pdf-head {
    box-sizing: border-box;
  }

  .pdf-foot {
    box-sizing: border-box;
  }
}
</style>
<style scoped lang="scss">
.body {
  position: relative;
  margin: 0 auto;
  // width: 595px;
  width: 900px;

  .exportButton {
    display: inline-block;
    position: absolute;
    width: 80px;
    top: 20px;
    right: 20px;
    box-sizing: border-box;
  }
}

.pdf {
  box-sizing: border-box;
  font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  background-color: #fff;
  padding: 20px;
  // width: 595px;
  width: 900px;

  .userInfo {
    border: 2px solid #4395ff;
    padding: 20px;
    // border-left: 150px solid #4395ff;
    box-sizing: border-box;
    border-radius: 10px;
  }

  .title {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 30px;
  }

  .text {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 16px;
    margin-right: 30px;
    white-space: normal;
    word-break: break-all;
  }

  .text_ {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 16px;
    margin: 15px 0;
    white-space: normal;
    word-break: break-all;
  }

  .text__ {
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    white-space: normal;
    word-break: break-all;
    font-size: 16px;
  }

  .box_title {
    display: inline-block;
    font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
    font-size: 18px;
    background-color: #4395ff;
    color: #fff;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 20px 0;
    border-radius: 10px;
  }

  .box_head {
    display: flex;
    justify-content: space-between;

    .box_head_title {
      font-weight: 600;
    }
  }

  // #4395ff
}
</style>
