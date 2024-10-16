<template>
  <div class="body">
    <el-button @click="pdfDown_" class="exportButton">生成pdf</el-button>
    <div class="pdf" ref="box">
      <div class="context">
        <div class="userInfo">
          <el-descriptions title="Hsueh" :column="2">
            <el-descriptions-item label="求职意向">全栈工程师</el-descriptions-item>
            <el-descriptions-item label="工作时间">2018年11月 - {{ `${new Date().getFullYear()}年${new Date().getMonth() +
              1}月` }}</el-descriptions-item>
            <el-descriptions-item label="学历">本科</el-descriptions-item>
            <el-descriptions-item label="性别">男</el-descriptions-item>
            <el-descriptions-item label="出生年月">1997年1月</el-descriptions-item>
            <el-descriptions-item label="邮箱">x16605525286@163.com</el-descriptions-item>
          </el-descriptions>
        </div>
        <div class="box_title">
          个人优势
        </div>
        <p class="text__">
          作为一个拥有多年工作经验的开发者，我精通 Java、Node、Redis、MySQL、 RabbitMQ 等后端技术，同时vue、react等前端全家桶也有相当多的实战经验。
          曾参与并设计出后台管理系统权限管理模块；设计并搭建FAAS(Function as a server)；独立完成秒杀、抽奖等；设计并实现pc端网页语音播报；
          本人常年沉浸于后端管理系统的业务功能的搭建-可全栈开发；
          在小程序开发、跨端开发（RN/Uniapp）、Electron也有不少的实战经验。
        </p>
        <div class="box_title">
          工作经历
        </div>
        <div class="box_head line">
          <span class="text_ box_head_title">2021年6月 - {{ `${new Date().getFullYear()}年${new Date().getMonth() +
            1}月` }}</span>
          <span class="text_ box_head_title">上海海骄机电工程有限公司</span>
        </div>
        <p class="text_">
          工作内容：
        </p>
        <p class="text__" style="padding-left: 20px">
          1.参与需求评审会和产品经理讨论产品落地,分析需求并整理成可实现流程；
        </p>
        <p class="text__" style="padding-left: 20px">
          2.系统设计，确定数据结构，确定接口地址及接口返回数据结构方便前端mock数据等；
        </p>
        <p class="text__" style="padding-left: 20px">
          3. 编码实现和部署等工作；
        </p>
        <p class="text__" style="padding-left: 20px">
          4、维护系统；
        </p>
        <p class="text_">
          公司技术栈：
        </p>
        <p class="text__" style="padding-left: 20px">
          综合管理后台系统、远传后台管理系统、售后管理系统、H5：Vue+VueRouter+Vuex+Element+Axios+Eslint+Less；</p>
        <p class="text__" style="padding-left: 20px">
          相控阵后台管理系统：React+ReactRouterDom+ReactRedux+ReduxThunk+Axios+Typescript+Eslint+Less；</p>
        <p class="text__" style="padding-left: 20px">售后小程序：微信小程序原生开发；</p>
        <p class="text__" style="padding-left: 20px">后端：springboot+redis+mysql+rabbitmq等</p>
        <div class="box_head line">
          <span class="text_ box_head_title">2020.10-2021.06</span>
          <span class="text_ box_head_title">上海致维网络有限公司</span>
        </div>
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
        <div class="box_head line">
          <span class="text_ box_head_title">2018.11-2020.09</span>
          <span class="text_ box_head_title">上海星轨网络有限公司 </span>
        </div>
        <p class="text_">
          工作内容：
        </p>
        <p class="text__" style="padding-left: 20px">
          1、以产品经理的身份和用户对接需求，和ui设计师讨论页面设计。
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
          律师事务所系统：vue，adonis。
        </p>
        <p class="text__" style="padding-left: 20px">
          青山回收小程序：Taro(开放式跨端跨框架解决方案)-小程序，React全家桶-pc，adonis-后端。
        </p>
        <p class="text__" style="padding-left: 20px">
          B&W官网:express，express-art-template，jquery。
        </p>
        <span class="box_title">
          自我评价
        </span>
        <div>
          <p class="text_">
            为人真诚，谦虚好学，乐观开朗，能很好地处理人际关系，遇到问题不抱怨而是用行动去解决，有较强的责任心和团队合作精神；对自己要求严格，做事情讲究高质量。
          </p>
        </div>
        <!-- <span class="box_title">
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
        </div> -->
        <span class="box_title">
          开源
        </span>
        <div class="line">
          <p class="text__" style="cursor: pointer">
            <a href="https://github.com/HanWuJiJack" target="_blank" rel="noopener noreferrer">
              <span>https://github.com/HanWuJiJack</span>&nbsp;&nbsp;
              <img width="30" src="@/assets/images/GitHub.png" alt="" />
            </a>
          </p>
        </div>
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
    async pdfDown_() {
      this.loading("loading", 1);
      await htmlToPdf('Hsueh', this.$refs.box)
      this.load.close();
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss">
.shuiyin-box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  // border: 1px solid green;
  width: 70px;
  height: 70px;
  overflow: hidden;
  opacity: 0.1;

  .shuiyin {
    margin-top: 15px;
    transform: rotate(45deg);
    // border: 1px solid red;
    background-color: #eee;
    width: 56px;
    font-weight: 600;
  }
}

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
    z-index: 2;
  }
}

.pdf {
  box-sizing: border-box;
  font-family: myFirstFont, "Microsoft YaHei", "微软雅黑", "Lantinghei SC", "Open Sans", Arial, "Hiragino Sans GB", "STHeiti", "WenQuanYi Micro Hei", SimSun, sans-serif;
  background-color: #fff;
  padding: 20px;
  // width: 595px;
  width: 900px;
  position: relative;
  z-index: 1;

  .context {
    position: relative;
    z-index: 2;
  }

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
