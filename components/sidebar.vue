<template>
  <aside class="sidebar">
    <!--    联系我-->
    <section class="module-css">
      <div class="module-title">联系我</div>
      <div class="module-item-wrap contact-me">
        <div class="contact-method clearfix">
          <div class="contact-label">邮箱：</div>
          <div class="contact-detail"><a href="mailto:brandhuang@qq.com">79571635@qq.com</a></div>
        </div>
        <div class="contact-method clearfix">
          <div class="contact-label">Github：</div>
          <div class="contact-detail">
            <a href="https://github.com/HanWuJiJack" target="_blank">https://github.com/HanWuJiJack</a>
          </div>
        </div>
        <div class="contact-method clearfix">
          <div class="contact-label">个人信息：</div>
          <div class="contact-detail">
            <nuxt-link to="/info" tag="a">hsueh</nuxt-link>
          </div>
        </div>
        <div class="contact-method clearfix">
          <div class="contact-label">3D简介：</div>
          <div class="contact-detail">
            <nuxt-link to="/three" tag="a">一颗小水星~</nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </aside>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {

    }
  },
  computed: {
    hotArticleList() {
      return this.$store.state.article.hot
    },
    tagList() {
      return this.$store.state.tag.list
    },
    categoryList() {
      return this.$store.state.category.list.filter((item) => item.total > 0)
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>

<style lang="scss">
.sidebar {
  li {
    list-style: none;
  }

  .module-css {
    background-color: #fff;
    border-radius: 6px;

    .module-title {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      padding: 15px;
      font-size: 14px;
      font-weight: bold;

      .svg-icon {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }

    .module-item {
      padding: 0 15px;
    }

    .hot {
      width: 100%;

      .hot-item {
        display: flex;
        line-height: 38px;
        align-items: center;

        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          width: 20px;
          height: 20px;
          text-align: center;
          background-color: #7F828B;
          color: #fff;
          margin-right: 8px;
        }

        a {
          flex: 1;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: padding-left 0.5s;

          &:hover {
            padding-left: 5px;
            color: #409eff;
            font-weight: bold;
          }
        }

      }
    }

    .category {
      .category-item {
        display: flex;
        line-height: 38px;
        justify-content: center;
        font-size: 14px;
        cursor: pointer;

        a {
          display: flex;
          width: 100%;
        }

        &:hover {
          background-color: #eee;
        }

        span {
          margin-left: auto;
        }
      }
    }

    .tag {
      display: flex;
      flex-wrap: wrap;
      padding: 8px 15px 0;

      a {
        border: 1px solid #ccc;
        margin: 0 8px 8px 0;
        padding: 5px 6px;
        font-size: 13px;
        border-radius: 4px;

        &:hover {
          background-color: #eee;
        }
      }
    }

    .aliyun {
      padding: 15px;
      text-align: center;

      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }

    .contact-me {
      padding: 15px;
      font-size: 12px;

      .contact-method {
        line-height: 30px;

        .contact-label {
          float: left;
          width: 60px;
        }

        .contact-detail {
          float: left;

          a {
            color: #409EFF;
            cursor: pointer;
          }
        }
      }
    }
  }

  .module-css+.module-css {
    margin-top: 15px;
  }

  @media screen and (min-width: 920px) {
    .sticky-css {
      position: sticky;
      top: 70px;
    }
  }
}</style>
