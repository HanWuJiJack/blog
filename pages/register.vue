<template>
  <div class="login-main">
    <div class="login-modal">
      <h1 class="login-title">注册</h1>
      <el-form :model="formData" :rules="rules" ref="ruleFormRef" label-width="0px">
        <el-form-item prop="userEmail">
          <el-input v-model="formData.userEmail" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="formData.userPwd" placeholder="请输入密码" show-password autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="checkuserPwd">
          <el-input v-model="formData.checkuserPwd" placeholder="请输入确认密码" show-password autocomplete="off">
          </el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="formData.code" placeholder="请输入code" show-password>
            <template slot="append">
              <el-button @click.prevent="getCode">获取code</el-button>
            </template>
          </el-input>

        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" @click="loginHandler">注册</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>
<script>
import { getCode, register } from "@/api/service"
export default {
  layout: "full",
  head() {
    return {
      title: '注册',
    }
  },
  data() {
    return {
      formData: {
        userEmail: "",
        userPwd: "",
      },
      rules: {
        userEmail: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']
          }
        ],
        userPwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkuserPwd: [
          {
            validator: (rule, value, callback) => {
              if (value === '') {
                callback(new Error('请再次输入密码'));
              } else if (value !== this.formData.userPwd) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            }, trigger: 'blur'
          }
        ],
      },
      redirect: undefined,
    }
  },
  async fetch({ store, query }) {
    // await store.dispatch('getArtListByType',{currentPage: query.page, artType: 'code'});
  },
  computed: {
  },
  methods: {
    getCode() {
      this.$refs.ruleFormRef.validateField('userEmail', async (errorMessage) => {
        // console.log(errorMessage)
        if (!errorMessage) {
          console.log(this.formData.userEmail)
          getCode({ userEmail: this.formData.userEmail }).then((res) => {
            this.msgSuccess("获取成功！")
          })
        }
      });
    },
    loginHandler() {
      this.$refs.ruleFormRef.validate(async (valid) => {
        if (valid) {
          register(this.formData).then((res) => {
            this.msgSuccess("注册成功！")
            setTimeout(() => {
              this.$router.push({ path: "/login" });
            }, 500);
          })
        } else {
          return false;
        }
      });
    }
  },
  mounted() {

  }
}
</script>
<style lang="scss" scoped>
.login-main {

  box-sizing: border-box;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  // border: 5px solid red;
  // padding: 20px;
  .login-modal {
    width: 500px;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 0 14px 7px #c7c9cb4d;
    display: block;

    @media screen and (max-width: 768px) {
      max-width: 500px;
      width: 80%;
    }

    .login-title {
      text-align: center;
      font-size: 26px;
      font-weight: 400;
      margin-bottom: 30px;
    }

    .login-btn {
      width: 100%;
      box-sizing: border-box;
    }
  }


}
</style>
