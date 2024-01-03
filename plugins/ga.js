if (process.client && process.env.ENV_ === 'pro') {
  /*
   ** Google 统计分析脚本
   */
  (function () {
    var a = document.createElement('script');
    a.async = 1;
    a.src = "https://www.googletagmanager.com/gtag/js?id=G-N8464N6KV6";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
  })()
  /*
   ** 当前页的访问统计
   */
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-N8464N6KV6');
}

export default ({
  app: {
    router
  },
  store
}) => {
  /*
   ** 每次路由变更时进行pv统计
   */
  router.afterEach((to, from) => {
    if (process.client && process.env.ENV_ === 'pro') {
      /*
       ** 告诉 GA 增加一个 PV
       */
       window.dataLayer = window.dataLayer || [];
       function gtag() {
         dataLayer.push(arguments);
       }
       gtag('js', new Date());
       gtag('config', 'G-N8464N6KV6');
    }
  })
}