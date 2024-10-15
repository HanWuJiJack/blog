const axios = require('axios')
const CompressionPlugin = require('compression-webpack-plugin');
module.exports = {

  // 'spa': 没有服务器端渲染（只有客户端路由导航等）
  // 'universal': 同构应用程序（服务器端呈现+客户端路由导航等）
  mode: 'universal',
  // 这允许您指定 Nuxt.js 服务器实例的主机和端口。
  server: {
    port: 9014, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'hsueh的blog',
    titleTemplate: 'hsueh - %s',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'hsueh的blog'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'hsueh的blog'
      },
      {
        hid: 'author',
        name: 'Team',
        content: 'hsueh'
      },
      {
        hid: 'renderer',
        name: 'renderer',
        content: 'webkit|ie-comp|ie-stand'
      },
      {
        hid: 'http-equiv',
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      },
      {
        hid: 'renderer',
        name: 'renderer',
        content: 'webkit|ie-comp|ie-stand'
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'webpage'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'hsueh的blog'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'hsueh的blog'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'http://s5.z100.vip:3680/blog/'
      }

    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/blog/favicon.ico'
      },
      { rel: 'preload', type: 'image/png', href: "/blog/end/1.png" },
      { rel: 'preload', type: 'image/png', href: "/blog/end/5.png" },
      { rel: 'preload', type: 'image/png', href: "/blog/end/8.png" },
      { rel: 'preload', type: 'image/png', href: "/blog/end/9.png" },
      { rel: 'preload', type: 'image/png', href: "/blog/end/bg1.png" },
      { rel: 'preload', type: 'image/jpeg', href: "/blog/end/earth.jpeg" },
      { rel: 'preload', type: 'audio/wav', href: "/blog/say.wav" },
    ],
    script: [
      // Google Analytics Code
      // {
      //   src: "https://www.googletagmanager.com/gtag/js?id=G-N8464N6KV6",
      //   async: true,
      // },
      // {
      //   src: "https://unpkg.com/vconsole/dist/vconsole.min.js",
      //   async: true,
      // },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#5183ff'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/style.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/element-ui',
    {
      src: '@/plugins/directive',
      ssr: false
    },
    '@/plugins/svg',
    '@/assets/icons/index',
    {
      src: '@/plugins/baidu-Analytics',
      ssr: false
    },
    {
      src: '@/plugins/baidu-seo-push.js',
      ssr: false
    },
    {
      src: '@/plugins/ga.js',
      ssr: false
    },
    {
      src: "@/plugins/wangeditor",
      ssr: false
    },
    {
      src: "@/plugins/prism",
      ssr: false
    },
    { src: '@/plugins/vue-cropper', ssr: false },

  ],
  // buildModules: [
  //   '@nuxt/typescript-build',
  // ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    'nuxt-precompress',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '*',
    }],
  ],
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg)$/, // files to compress on build
    middleware: {
      enabled: true,
      enabledStatic: true,
      encodingsPriority: ['br', 'gzip']
    },
    gzip: {
      enabled: true,
      filename: '[path].gz[query]', // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: {
        level: 9
      }
    },
    brotli: {
      enabled: true,
      filename: '[path].br[query]', // middleware will look for this filename
      compressionOptions: {
        level: 11
      },
      threshold: 10240,
      minRatio: 0.8
    }
  },
  sitemap: {
    hostname: 'http://s5.z100.vip:3680/blog/', // 你的具体的网址
    gzip: true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date()
    }
  },
  styleResources: {
    scss: [
      // '~/assets/css/variables.scss',
    ],

  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    // @nuxtjs/axios模块中已内置了proxy支持，此处开启即可。
    proxy: true, // 表示开启代理
    // prefix: '/api', // 表示给请求url加个前缀 /api
    // credentials: true // 表示跨域请求时是否需要使用凭证
  },
  proxy: {
    '/api': {
      // target: 'http://s5.z100.vip:25258/',
      target: 'http://127.0.0.1:3001/',
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/api': '' // 删除url中的/api
      }
    },
    '/ai': {
      // target: 'http://s5.z100.vip:25258/',
      target: 'http://127.0.0.1:9017/',
      changeOrigin: true, // 表示是否跨域
      pathRewrite: {
        '^/ai': '' // 删除url中的/api
      }
    },
  },
  env: {
    NODE_ENV: process.env.ENV_
  },
  router: {
    // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    // middleware: ['auth', 'test'],
    scrollBehavior(to, from, savedPosition) {
      return {
        x: 0,
        y: 0
      }
    },
    base: '/blog/'
  },
  /*
   ** Build configuration
   */
  build: {
    // 防止多次打包
    vendor: ["axios", 'three', 'vue-cropper'],
    publicPath: "/static/",
    transpile: [/^element-ui/, 'three', 'v-viewer'], //我们终于知道这个选项是当使用有 es6 的库时，需要将其导出，告诉 babel 做转化的意思。
    analyze: true, //Nuxt.js 使用 webpack-bundle-analyzer 分析并可视化构建后的打包文件，你可以基于分析结果来决定如何优化它。
    extractCSS: {
      allChunks: true
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    },
    ssr: true,
    // ssr: false,
    babel: {
      compact: false,
      plugins: [
        [
          'prismjs',
          {
            languages: "all",
            //配置显示行号插件
            plugins: [
              // 'toolbar',
              'line-numbers',
              'show-language',
              'copy-to-clipboard'
            ],
            theme: 'okaidia', //主体名称
            css: true
          }
        ],
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        threshold: 10240, // 对超过10kb的数据进行压缩
        deleteOriginalAssets: false // 是否删除原文件
      })
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: true,
        minSize: 10000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            name: 'node_vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            maxSize: 244000
          },
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          },
          commons: {
            test: /node_modules[\\/](vue|vue-loader|vue-router|vuex|vue-meta|core-js|@babel\/runtime|axios|webpack|setimmediate|timers-browserify|process|regenerator-runtime|cookie|js-cookie|is-buffer|dotprop|nuxt\.js)[\\/]/,
            chunks: 'all',
            priority: 10,
            name: true
          }
        }
      }
    },
  },
  generate: {
    dir: 'blog',
    // routes() {
    //   return axios.get('http://localhost:3001/custom/faas/list/openblog?pageNum=1&pageSize=9999').then(res => {
    //     return res.data.data.list.map(blog => {
    //       return '/article/' + blog.id
    //     })
    //   })
    // },
    routes() {
      return axios.get('http://localhost:3001/custom/faas/list/openblog?pageNum=1&pageSize=9999').then(res => {
        // console.log(88888, res.data.data)
        return res.data.data.list.map(blog => {
          return {
            route: '/article/' + blog.id,
            payload: blog
          }
        })
      })
    },
    // routes() {
    //   return axios.get('http://s5.z100.vip:25258/custom/faas/list/openblog?pageNum=1&pageSize=9999').then(res => {
    //     // console.log(88888, res.data.data)
    //     return res.data.data.list.map(blog => {
    //       return {
    //         route: '/article/' + blog.id,
    //         payload: blog
    //       }
    //     })
    //   })
    // },
    // 默认情况下，运行nuxt generate将为每个路由创建一个目录并生成index.html文件。
    // subFolders: false
  },
}