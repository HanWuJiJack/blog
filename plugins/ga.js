/*
 ** 只在生产模式的客户端中使用
 */
if (process.env.ENV_ === 'pro') {
  var _hmt = _hmt || [];
  (function () {
    var hm = document.createElement("script");
    hm.src = "https://www.googletagmanager.com/gtag/js?id=G-N8464N6KV6";
    hm.id = "chrome_fx";
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
        document.getElementById('chrome_fx') && document.getElementById('chrome_fx').remove()
        var hm = document.createElement("script");
        hm.src = "https://www.googletagmanager.com/gtag/js?id=G-N8464N6KV6";
        hm.id = "chrome_fx";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    })
  })
}