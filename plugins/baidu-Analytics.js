/*
 ** 只在生产模式的客户端中使用
 */
 var _hmt = _hmt || [];
 (function () {
   var hm = document.createElement("script");
   hm.src = "https://hm.baidu.com/hm.js?4eacfd1ce7591c2e9909199436e70fa0";
   hm.id = "baidu_tj";
   var s = document.getElementsByTagName("script")[0];
   s.parentNode.insertBefore(hm, s);
 })();
 /*
  ** 应用挂载后
  */
 window.onNuxtReady((app) => {
   app.$nuxt.$on('routeChanged', (to, from) => {
     var _hmt = _hmt || [];
     (function () {
       document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove()
       var hm = document.createElement("script");
       hm.src = "https://hm.baidu.com/hm.js?4eacfd1ce7591c2e9909199436e70fa0";
       hm.id = "baidu_tj";
       var s = document.getElementsByTagName("script")[0];
       s.parentNode.insertBefore(hm, s);
     })();
   })
 })