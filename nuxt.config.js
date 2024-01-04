const axios = require('axios')
module.exports = {
  // 'spa': 没有服务器端渲染（只有客户端路由导航等）
  // 'universal': 同构应用程序（服务器端呈现+客户端路由导航等）
  mode: 'universal',
  // 这允许您指定 Nuxt.js 服务器实例的主机和端口。
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
   ** Headers of the page
   */
  head: {
    title: 'hsueh的blog',
    titleTemplate: 'hsueh - %s',
    meta: [{
        charset: 'utf-8'
      },
      // {
      //   hid: 'google-site-verification',
      //   name: 'google-site-verification',
      //   content: 'wgv4IBDBiQSNfAp7YBzgc5UukUyB1hLAF8X3DhI3wyY'
      // },
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
        content: 'https://hanwujijack.github.io/blog/'
      }

    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/blog/favicon.ico'
    }, ],
    script: [
      // Google Analytics Code
      // {
      //   src: "https://www.googletagmanager.com/gtag/js?id=G-N8464N6KV6",
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
    // '@/assets/css/monokai.css',
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
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    ['@nuxtjs/robots', {
      UserAgent: '*',
      Allow: '*',
    }],
  ],
  sitemap: {
    hostname: 'https://hanwujijack.github.io/blog/', // 你的具体的网址
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
      // './assets/css/preview.scss',
    ],

  },
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
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
    publicPath: "/static/",
    transpile: [/^element-ui/],
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
      // compact: false,
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
        ]
      ]
    }
  },
  generate: {
    // routes: ['/article/1', '/article/2', '/article/3']
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
    subFolders: false
  },
}