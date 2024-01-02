<template>
  <div class="login-main">
    <div class="login-modal">
      <h1 class="login-title">Hsueh的blog</h1>
      <el-form :model="formData" :rules="rules" ref="ruleFormRef" label-width="0px">
        <el-form-item prop="userEmail">
          <el-input v-model="formData.userEmail" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="formData.userPwd" placeholder="请输入密码" show-password>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="go('/register')">注册</el-button>
          <el-button type="primary" @click="loginHandler">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import { login } from "@/api/service"
export default {
  layout: "full",
  head() {
    return {
      title: '登录',
    }
  },
  data() {
    return {
      formData: {
        userEmail: "",
        userPwd: "",
      },
      rules: {
        userEmail: [{ required: true, message: '请输入邮箱地址', trigger: 'blur' },
        {
          type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']
        }],
        userPwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    }
  },
  async fetch({ store, query }) {
    // await store.dispatch('getArtListByType',{currentPage: query.page, artType: 'code'});
  },
  computed: {
  },
  methods: {
    loginHandler() {
      this.$refs.ruleFormRef.validate(async (valid) => {
        if (valid) {
          login(this.formData).then((res) => {
            this.$store.commit('user/SET_USER_INFO', res.data)
            this.$cookies.set("token", res.data.token)
            this.$store.commit('SET_TOKEN', res.data.token)
            this.msgSuccess("登录成功！")
            this.go('/')
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
