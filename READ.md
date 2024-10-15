node:18.20.4
yarn


当使用 nuxt 命令时，dev 会被强制设置成 true
当使用 nuxt build， nuxt start 或 nuxt generate 命令时，dev 会被强制设置成 false


fetch 可通过 fetchOnServer 属性设置是否允许在服务端获取数据，设置为 false 将可以在渲染数据时通过

组件限制
asyncData 仅限于页面级组件。
fetch 可用于任意组件。
获取上下文
asyncData 不可以使用 this，只能通过回调参数获取上下文对象。
fetch 可以使用 this。
数据操作
asyncData 通过 return 合并 data 数据。
fetch 可以使用 this 直接修改赋值。
调用时机
asyncData 只在页面创建前调用。
fetch 在页面实例创建后调用，并可以通过$fetch 方法随时触发，$fetchState.timestam 属性可以获取最后一次触发的时间戳。
错误处理
asyncData 通过 error 参数抛出错误，但并不会在页面显示异常。
fetch 可以使用 throw new Error()来抛出异常，在页面调用$fetchState.error 方法获取异常状态。
页面渲染
asyncData 在页面创建前填充数据。
fetch 可通过 fetchOnServer 属性设置是否允许在服务端获取数据，设置为 false 将可以在渲染数据时通过$fetchState.pendinding 获取加载状态。

<!-- https://www.cnblogs.com/China-Dream/p/15667561.html -->



# ssr部署
npm run bulid  
npm run start  
pm2 -i 0 start npm -- run start --watch //多核心全开  

## pm2 命令参考
```
 pm2 start app.js # 启动app.js应用程序
 pm2 start app.js -i 4 # cluster mode 模式启动4个app.js的应用实例
# 4个应用程序会自动进行负载均衡
 pm2 start app.js --name="api" # 启动应用程序并命名为 "api"
 pm2 start app.js --watch # 当文件变化时自动重启应用
 pm2 start script.sh # 启动 bash 脚本
 pm2 list # 列表 PM2 启动的所有的应用程序
 pm2 monit # 显示每个应用程序的CPU和内存占用情况
 pm2 show [app-name] # 显示应用程序的所有信息
 pm2 logs # 显示所有应用程序的日志
 pm2 logs [app-name] # 显示指定应用程序的日志
pm2 flush
 pm2 stop all # 停止所有的应用程序
 pm2 stop 0 # 停止 id为 0的指定应用程序
 pm2 restart all # 重启所有应用
 pm2 reload all # 重启 cluster mode下的所有应用
 pm2 gracefulReload all # Graceful reload all apps in cluster mode
 pm2 delete all # 关闭并删除所有应用
 pm2 delete 0 # 删除指定应用 id 0
 pm2 scale api 10 # 把名字叫api的应用扩展到10个实例
 pm2 reset [app-name] # 重置重启数量
 pm2 startup # 创建开机自启动命令
 pm2 save # 保存当前应用列表
 pm2 resurrect # 重新加载保存的应用列表
 pm2 update # Save processes, kill PM2 and restore processes
 pm2 generate # Generate a sample json configuration file
pm2 start app.js --node-args="--max-old-space-size=1024"

```
nginx 配置
```
 # 新建一个 nuxt server 服务
  upstream nuxt {
    server 0.0.0.0:3000;
    keepalive 64;
  }
  server {
    listen       8081; // 监听的端口
    server_name  localhost;
    location / {
      proxy_pass http://nuxt;  #对应上面 upstream 中新建的服务名
      index index.html index.htm;
 }
```

<!-- https://hanwujijack.github.io/blog/favicon.ico -->


尊敬的招聘团队，您好！我是一位全栈工程师，男性，1997年1月生，拥有五年的工作经验。我专注于Node.js、Redis、MySQL、RabbitMQ、React、Vue、微信小程序等技术领域。在过去的五年里，我积累了丰富的项目经验，包括Web应用开发、微服务架构、分布式系统设计和实现等。在我最近的工作经历中，我于2021年6月至2024年1月在上海海骄有限公司担任全栈工程师一职。我负责推动公司管道检测平台系统的开发，从需求分析、系统设计、编码实现、测试到部署等全流程。此外，我也参与了新功能的开发，包括综合管理系统新增功能模块和H5展示页面。我熟练掌握Vue、VueRouter、Vuex、Element、Axios、Eslint、Less等技术栈，并在相控阵后台管理系统中应用了React、ReactRouterDom、ReactRedux、ReduxThunk、Axios、Typescript、Eslint、Less等技术。在之前的工作中，我曾在上海致维网络有限公司和上海星轨网络有限公司任职，参与了母婴综合管理系统、智零售App、律师事务所系统、青山回收小程序等项目的开发和维护，运用了AngularJS、Material、Nginx、ReactNative、ReactNavigation、ReactRedux、reduxSaga、Fetch、Express、Adonis等技术。我以真诚、谦虚、好学、乐观开朗的态度对待工作，具备较强的责任心和团队合作精神。在面对问题时，我更愿意通过行动解决，而不是抱怨。我对自己要求严格，注重高质量的工作。我的教育背景包括在安徽机电职业技术学院获得的大专学历，以及正在阜阳师范大学攻读的本科学历。感谢您抽出时间阅读我的简介。期待有机会加入贵公司，为您的团队贡献我的技术和经验。谢谢！