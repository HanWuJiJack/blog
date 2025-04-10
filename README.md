# Blog项目文档

## 在线演示
🖥️ [项目预览](https://hanwujijack.github.io/blog/)

## 项目概述
基于Nuxt.js开发的SSR博客系统，包含文章管理、权限控制、访客统计等模块，支持服务端渲染和响应式布局。

## 功能特性
- 服务端渲染(SSR)支持
- Markdown文章解析
- 权限控制系统
- 响应式布局
- 访客统计功能

## 开发指南

### 脚本说明
```bash
# 开发环境
npm run dev           

# 测试环境
npm run dev:test      

# 生产环境
npm run dev:pro       

# 构建命令
npm run build        
npm run build:gh     

# 部署命令
npm run generate     
npm run generate:gh  
npm run deploy       

# 测试命令
npm test
```

### 脚本对照表
| 脚本名称      | 命令                                                                 | 功能描述                   |
|---------------|----------------------------------------------------------------------|--------------------------|
| dev           | cross-env ENV_=dev PATH_=1 nuxt                                    | 开发模式（带路径参数）     |
| dev:test      | cross-env ENV_=test nuxt                                           | 测试环境模式               |
| dev:pro       | cross-env ENV_=pro nuxt                                            | 生产环境开发模式           |
| build         | cross-env ENV_=pro nuxt build                                      | 生产构建                   |
| build:gh      | cross-env DEPLOY_ENV=GH_PAGES nuxt build                           | GitHub Pages专用构建      |
| generate      | cross-env ENV_=pro nuxt generate                                   | 静态站点生成               |
| generate:gh   | cross-env ENV_=pro PATH_=2 DEPLOY_ENV=GH_PAGES nuxt generate      | GitHub Pages专用生成      |
| deploy        | push-dir --dir=blog --branch=master --allow-unclean               | 自动部署到GitHub仓库      |
| test          | jest                                                               | 运行单元测试               |

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

### GitHub Pages部署
1. 生成静态文件：
```bash
npm run generate:gh
```
2. 自动部署：
```bash
npm run deploy
```

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

