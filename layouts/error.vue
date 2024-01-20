<template>
    <div class="errcontainer">
      <!-- <h1 v-if="error.statusCode === 404">页面不存在</h1>
      <h1 v-else>应用发生错误异常</h1> -->
      <h1 class="code">{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <router-link class="a" to="/">首 页</router-link>
    </div>
  </template>
  
  <script>
    export default {
      props: ['error'],
      layout: "full",
    }
  </script>
  <style lang="scss" scoped>
  .errcontainer {
      flex: 1;
      // border: 1px solid red;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #f8fcff;
      align-items: center;
      .code {
        font-size: 16vw;
        font-weight: 700;
      }
      .a{
          font-weight: 600;
          margin-top: 20px;
          color: #0dbc79;
      }
  }
  </style>