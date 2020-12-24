<template>
  <div class="home-infoarticle">
    <!-- 头像 -->
    <div class="home-infoarticle-head">
      <!-- <img
        :src="tyqUser.avator"
        @click="loginFlag = !loginFlag"
        v-if="tyqUser && tyqUser.avator"
      >
      <img
        v-else
        src="../../assets/logo.png"
        @click="loginFlag = !loginFlag"
      > -->
      <g-rili class="home-rili"></g-rili>
      <!-- <ewm></ewm> -->
    </div>
    <!-- 用户名 -->
    <!-- <h3 class="home-infoarticle-name">{{tyqUser.username ? tyqUser.username : '用户名'}}</h3> -->
    <!-- 最新文章 -->
    <div class="home-infoarticle-article">
      <div class="home-infoarticle-article-title me-title text-left">最新文章</div>
      <ul>
        <li
          class="text-left pointSB text-ellipsis"
          v-for="item in articleList"
          :key="item.articleid"
          @click="$router.push(`/home/articledetail?articleid=${item.articleid}`)"
        >{{item.title}}</li>
      </ul>
    </div>
    <!-- 友情链接 -->
    <div class="home-infoarticle-link">
      <div class="home-infoarticle-link-title me-title text-left">友情链接</div>
      <div class="home-infoarticle-link-box d-flex jc-start ai-center flex-wrap">
        <div
          class="home-infoarticle-link-box-item"
          :title="item.title"
          v-for="item in linkList"
          :key="item.name"
        ><a
            :href="item.url"
            target="blank"
          >{{item.name}}</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import mixins from '@/mixins.js';
import ewm from '@/components/ewm/index';
import rili from '@/components/rili/index';
export default {
  mixins: [mixins],
  components: {
    ewm,
    'g-rili': rili
  },
  data() {
    return {
      query: {
        page: 1,
        num: 5,
        userid: ''
      },
      articleList: [],
      linkList: [
        {
          name: 'MyGit',
          url: 'https://gitee.com/hejiajun530/dashboard/projects',
          title: '码云仓库'
        },
        {
          name: 'MyGitHub',
          url: 'https://github.com/hejiajun530',
          title: 'Github仓库'
        },
        {
          name: '叶子博客',
          url: 'https://www.yezismile.com',
          title: '叶子博客-大佬/页面借鉴'
        }
      ]
    };
  },
  created() {
    var _self = this;
    _self.handleGetNewArticle();
  },
  mounted() {},
  methods: {
    // 获取最新的5篇文章
    handleGetNewArticle() {
      var _self = this;
      // _self.$set(_self.query, 'userid', _self.tyqUser.userid);
      _self.$http.post('/getArticleList', _self.query).then(res => {
        if (res.data.flag) {
          _self.articleList = res.data.res;
          // console.log(_self.articleList);
        } else {
          _self.$gMessage({
            title: '获取最新文章失败',
            duration: 2000,
            type: 'error'
          });
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-infoarticle {
  padding: 1.875rem 0.625rem;
  // .home-infoarticle-head {
  //   img {
  //     width: 6.25rem;
  //     height: 6.25rem;
  //     border-radius: 50%;
  //     transition: all 2s;
  //     &:hover {
  //       transform: rotate(360deg);
  //     }
  //   }
  // }
  .home-infoarticle-article {
    position: relative;
    margin: 1.25rem 0;
    ul {
      list-style-type: none;
      margin-top: 0.625rem;
      li {
        width: 100%;
        background: url(../../assets/img/li.jpg) no-repeat center left;
        padding: 0.1875rem 0 0.1875rem 1.5625rem;
        &:hover {
          color: #ff0000;
        }
      }
    }
  }
  .home-infoarticle-link-box {
    width: 100%;
    background: #ffffff;
    border: 1px solid #dddddd;
    padding: 1.25rem;
    margin-top: 1.25rem;
    .home-infoarticle-link-box-item {
      padding: 0.125rem 0.5rem;
      a {
        color: #000000;
        &:hover {
          color: #ff0000;
        }
      }
    }
  }
}
</style>