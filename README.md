# Blog项目文档

## 项目概述
基于Nuxt.js开发的SSR博客系统，包含文章管理、权限控制、访客统计等模块，支持服务端渲染和响应式布局。

## 功能特性
- 服务端渲染(SSR)支持
- Markdown文章解析
- 权限控制系统
- 响应式布局
- 访客统计功能

## 开发指南

### 环境要求
- Node.js 14+
- Npm 6+

### 安装依赖
```bash
npm install
```

### 常见问题
#### Webpack版本冲突
```bash
npm uninstall webpack
npm install webpack@^4.0.0 --save-dev
```

#### Sass-loader兼容问题
```bash
npm uninstall sass-loader
npm install sass-loader@10
```

## 数据获取对比
| 特性         | asyncData       | fetch          |
|--------------|-----------------|----------------|
| 使用范围     | 仅页面组件      | 所有组件       |
| 上下文获取   | 通过参数        | 通过this       |
| 数据合并     | return自动合并  | this直接赋值   |
| 调用时机     | 页面创建前      | 实例创建后     |
| 错误处理     | error参数       | throw Error    |

## 部署说明

### PM2集群模式
```bash
pm2 start npm --name "blog" -- run start --watch -i 0
```

### Nginx反向代理
```nginx
upstream nuxt_server {
    server 127.0.0.1:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://nuxt_server;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 目录结构
```
├── components/    # 公共组件
├── pages/         # 页面路由
├── store/         # Vuex状态管理
├── plugins/       # 第三方插件
├── assets/        # 静态资源
├── middleware/    # 中间件
└── api/           # 接口模块
```

## 参考资源
- [Nuxt数据获取方案](https://www.cnblogs.com/China-Dream/p/15667561.html)
- [PM2集群模式](https://pm2.keymetrics.io/docs/usage/cluster-mode/)
- [Nginx配置指南](https://nginx.org/en/docs/)

