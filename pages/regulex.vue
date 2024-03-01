<template>
  <div class="regulex">
    <h1 class="title">Regexp Match</h1>
    <el-checkbox-group text-color="#ffffff" fill="#ffffff" v-model="flag" @change="handleflagChange">
      <div class="tip-check">
        <div v-for="flag in cities" class="tip-item">
          <el-checkbox :label="flag.name" :key="flag.name">
            {{ flag.des }}
          </el-checkbox>
          <div class="tip-item-hover">{{ flag.title }}</div>
        </div>
      </div>
    </el-checkbox-group>

    <div class="reg">
      <div class="input">
        <div class="input-box">
          <span style="width: 10px;">/</span>
          <input type="text" v-model.trim="reg" class="reg-input" maxlength="50" @input="handleChange">
        </div>
        <div class="input-box" style="width: 80px;">
          <span>/</span>
          <input type="text" v-model.trim="flags" disabled class="flag-input" maxlength="5" @input="handleChange">
        </div>
      </div>
    </div>

    <div class="content">
      <input type="text" v-model.trim="text" class="test-input" autofocus @input="handleChange" maxlength="50">
      <span class="match-tag" v-for="(item, index) in matchs" :key="index" :style="item"></span>
    </div>
    <div class="tip">
      <div class="tip-title">常用规则</div>
      <div class="tip-item" v-for="(item, index) in tipList" :key="index">
        {{ item.reg }}
        <div class="tip-item-hover">{{ item.tip }}</div>
      </div>
    </div>
    <div class="tip">
      <div class="tip-title">测试用例</div>
      <div class="tip-item" v-for="(item, index) in testList" :key="index" @click="handleClick(item)">
        {{ item.tip }}
        <div class="tip-item-hover">{{ item.reg }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from '@/utils/utils'
export default {
  name: 'regulex',
  layout: 'nor',
  head() {
    return {
      title: 'regulex',
      meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的regulex'
      },
      ],
    }
  },
  data() {
    return {
      reg: "^1[3-9]\\d{9}$",
      flags: "i",
      matchs: [],
      text: "13333333333",
      tipList: [{
        reg: '.',
        tip: '匹配除换行符以外的任意字符'
      }, {
        reg: '\\w',
        tip: '匹配字母或数字或下划线'
      }, {
        reg: '\\s',
        tip: '匹配任意的空白符'
      }, {
        reg: '\\d',
        tip: '匹配数字'
      }, {
        reg: '\\b',
        tip: '匹配单词的开始或结束'
      }, {
        reg: '^',
        tip: '匹配字符串的开始'
      }, {
        reg: '$',
        tip: '匹配字符串的结束'
      }, {
        reg: '*',
        tip: '重复零次或更多次'
      }, {
        reg: '+',
        tip: '重复一次或更多次'
      }, {
        reg: '?',
        tip: '重复零次或一次'
      }, {
        reg: '{n}',
        tip: '重复n次'
      }, {
        reg: '{n,}',
        tip: '重复n次或更多次'
      }, {
        reg: '{n,m}',
        tip: '重复n到m次'
      }, {
        reg: '\\W',
        tip: '匹配任意不是字母，数字，下划线，汉字的字符'
      }, {
        reg: '\\S',
        tip: '匹配任意不是空白符的字符'
      }, {
        reg: '\\D',
        tip: '匹配任意非数字的字符'
      }, {
        reg: '\\B',
        tip: '匹配不是单词开头或结束的位置'
      }, {
        reg: '[^x]',
        tip: '匹配除了x以外的任意字符'
      }, {
        reg: '[^abc]',
        tip: '匹配除了abc这几个字母以外的任意字符'
      }, {
        reg: '[abc]',
        tip: '匹配abc这几个字符中任意字符'
      }, {
        reg: '[a-z]',
        tip: '匹配指定范围内的任意字符'
      }, {
        reg: '[!a-z]',
        tip: '匹配任何不在指定范围内的任意字符'
      }],
      testList: [
        {
          tip: '手机号码',
          reg: '^1[3-9]\\d{9}$',
          test: '13333333333'
        },
        {
          tip: '英文和数字',
          reg: '^[0-9a-zA-Z]+$',
          test: '123123123ASDFASDFafsdf',
        },
        {
          tip: '电话号码',
          reg: '^\\d{3}-\\d{8}|\\d{4}-\\d{7}$',
          test: '021-88888888'
        },
        {
          tip: '日期格式',
          reg: '^\\d{4}-\\d{1,2}-\\d{1,2}',
          test: '2021-04-26'
        },
        {
          tip: 'HTML标签',
          reg: '<(\\S*?)[^>]*>.*?|<.*? />',
          test: '<p>123</p>'
        },
        {
          tip: '版本号格式必须为X.Y.Z',
          reg: '^\\d+(?:\\.\\d+){2}$',
          test: '1.0.0'
        },
        {
          tip: '银行卡号',
          reg: '^[1-9]\\d{9,29}$',
          test: '6222026006705354000'
        },
        {
          tip: '微信号',
          reg: '^[a-zA-Z][-_a-zA-Z0-9]{5,19}$',
          test: 'a23123'
        }
      ],
      flag: ["i"],
      cities: [
        { name: "i", des: "忽略大小写", title: "匹配不区分大小写" },
        { name: "m", des: "多行匹配", title: "多行匹配，用于匹配存在换行符的字符串" },
        { name: "g", des: "全局匹配", title: "全局匹配，不是匹配到第一个就停止匹配" },
      ],
    }
  },
  computed: {
  },
  methods: {
    handleflagChange(value) {
      console.log("value", value)
      this.flags = value.join("")
    },
    isRegexp(value) {
      return Object.prototype.toString.call(value) === '[object RegExp]';
    },
    randomHexColorCode() {
      let n = (Math.random() * 0xfffff * 1000000).toString(16);
      return '#' + n.slice(0, 6);
    },
    matchRegexp() {
      this.matchs = [];
      if (!this.reg.length) {
        return
      }
      if (!this.flags.length) {
        return
      }
      if (!this.text.length) {
        return
      }
      try {
        let regexp = new RegExp(this.reg, this.flags);
        if (!this.isRegexp(regexp)) {
          alert("请检查你的正则！")
          return
        }
        let temp = regexp.exec(this.text);
        if (temp !== null) {
          this.matchs.push({
            borderBottom: `4px solid #39994f`
          });
        } else {
          this.matchs.push({
            borderBottom: `4px solid #d73e33`
          });
        }

        return
        // let temp;
        // let result = [];
        // let count = 0;
        // while ((temp = regexp.exec(this.text)) !== null && count < 100) {
        //   result.push(temp);
        //   count++;
        // }
        // console.log("result", result)
        // let len = 0;
        // for (let item of result) {
        //   item.forEach(i => {
        //     len += i.length;
        //   })
        //   this.matchs.push({
        //     left: item.index + 'ch',
        //     width: len + 'ch',
        //     borderBottom: `4px solid ${this.randomHexColorCode()}`
        //   });
        // }
      } catch (e) {
        console.error(e)
      }
    },
    handleChange() {
    },

    handleClick(obj) {
      this.reg = obj.reg;
      this.text = obj.test;
      this.matchRegexp()
    }
  },
  unmounted() {

  },
  mounted() {
    this.matchRegexp()
    this.handleChange = throttle.call(this, () => {
      this.matchRegexp()
    }, 1000)
  }
}
</script>
<style  lang="scss">
.regulex {
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background-image: linear-gradient(36deg, #17522E 0%, #2893A2 50%, #FFCB16 100%);
}

.regulex .el-checkbox__input.is-checked+.el-checkbox__label {
  color: #ffffff;
}

.regulex .el-checkbox {
  color: #ffffff;
}

.regulex .el-checkbox__inner {
  background-color: #17522E;
  border-color: #ffffff;
}

.regulex .el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #17522E;
  border-color: #ffffff;
}

.title {
  text-align: center;
  color: #FFCB16
}

.reg {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // height: 40px;
  margin-top: 10px;
}

.reg span {
  height: 40px;
  line-height: 40px;
  font-size: 36px;
  color: #ffffff;
}

.reg .input {
  border: 1px dashed #cccccc;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
  flex-wrap: wrap;

  .input-box {
    display: flex;
    flex-direction: row;
  }

  .input-box:first-child {
    flex: 1;
  }
}

.reg input {
  height: 40px;
  font-size: 36px;
  background-color: transparent;
  color: #ffffff;
  border: none;
}

.reg input:focus {
  outline: none;
}

.reg .reg-input {
  flex: 1;
  margin: 0 auto;
}

.content {
  position: relative;
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
}

.content .test-input {
  height: 40px;
  font-size: 36px;
  z-index: 1;
  background-color: transparent;
  color: #ffffff;
  width: 100%;
  border: 1px dashed #cccccc;
}

.content .test-input:focus {
  outline: none;
}

.content .match-tag {
  position: absolute;
  height: 0px;
  width: 100%;
  top: 36px;
  left: 0;
  transition: all 300ms;
}

.tip-check {
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

.tip-check .tip-title {
  position: absolute;
  font-size: 18px;
  left: 0;
  top: -30px;
  color: #ffffff;
}

.tip-check .tip-item {
  position: relative;
  padding: 4px 10px;
  font-size: 20px;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  color: #ffffff;
  border-radius: 4px;
}


.tip-check .tip-item .tip-item-hover {
  position: absolute;
  display: none;
  left: 0;
  top: -200%;
  white-space: nowrap;
  color: white;
  background: #17522E;
  padding: 16px;
  font-size: 16px;
  transition: all 300ms;
}

.tip-check .tip-item:hover {
  border: 1px solid #17522E;
}

.tip-check .tip-item:hover>.tip-item-hover {
  display: block;
}







.tip {
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
}

.tip .tip-title {
  position: absolute;
  font-size: 18px;
  left: 0;
  top: -30px;
  color: #ffffff;
}

.tip .tip-item {
  position: relative;
  padding: 4px 10px;
  font-size: 20px;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  color: #ffffff;
  border-radius: 4px;
}

.tip .tip-item:hover {
  background-color: #17522E;
}

.tip .tip-item .tip-item-hover {
  position: absolute;
  display: none;
  left: 0;
  top: -200%;
  white-space: nowrap;
  background: #17522E;
  color: white;
  padding: 16px;
  font-size: 16px;
  transition: all 300ms;
}

.tip .tip-item:hover {
  border: 1px solid #17522E;
}

.tip .tip-item:hover>.tip-item-hover {
  display: block;
}
</style>
