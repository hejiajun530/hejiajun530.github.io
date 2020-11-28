<template>
  <div class="articlelist">
    <!-- 文章列表{{articlelist}} -->
    <div class="articlelist-list">
      <div
        class="articlelist-list-noarticle"
        v-if="articlelist.length <= 0"
      >
        {{noarticleText}}
      </div>
      <template v-for="item in articlelist">
        <div
          class="articlelist-list-item d-flex jc-start"
          :key="item.articleid"
        >
          <div class="articlelist-list-item-left">
            <!-- 文章封面图 -->
            <img
              class="positionCenter pointSB"
              :src="item.cover"
              v-if="item.cover"
            >
            <img
              class="positionCenter pointSB"
              v-else
              src="../../../assets/logo.png"
            >
          </div>
          <div class="articlelist-list-item-right text-left flex-1 d-flex flex-column jc-between ai-start">
            <!-- 文章标题 -->
            <div
              class="articlelist-list-item-right-title text-ellipsis pointSB"
              @click="$router.push(`/home/articledetail?articleid=${item.articleid}`)"
            >{{item.title}}</div>
            <!-- 文章内容 -->
            <div class="articlelist-list-item-right-content flex-1">{{item.content}}</div>
            <div class="articlelist-list-item-right-make d-flex jc-between ai-center">
              <!-- 文章标签/发表时间 -->
              <div class="articlelist-list-item-right-make-tagtime d-flex ai-center">
                <g-tag :taglist="item.tag.split(',')"></g-tag>
                <div><i class="iconfont icon-dingdanxiangqing-chuangjianshijian"></i>{{toymd(item.createTime, 'yy-mm-dd hh:mm:ss')}}</div>
              </div>
              <!-- 文章操作 -->
              <div class="articlelist-list-item-right-make-right d-flex jc-end ai-center">
                <!-- 评论数量 -->
                <div class="articlelist-list-item-right-make-right-common d-flex jc-end ai-center pointSB">
                  <i
                    class="iconfont icon-linedesign-01"
                    @click="$router.push(`/home/articledetail?articleid=${item.articleid}`)"
                  ></i>
                  <div>{{item.comment ? item.comment : 0}}</div>
                </div>
                <!-- 浏览数量 -->
                <div class="articlelist-list-item-right-make-right-count d-flex jc-end ai-center pointSB">
                  <i class="iconfont icon-xianshi"></i>
                  <div>{{item.count ? item.count : 0}}</div>
                </div>
                <!-- 点赞数量 -->
                <div
                  class="articlelist-list-item-right-make-right-common d-flex jc-end ai-center pointSB"
                  @click="handleClickAddLike(item)"
                >
                  <i class="iconfont icon-dianzan"></i>
                  <div>{{item.like ? item.like : 0}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <div
      class="articlelist-pageing"
      v-if="flag"
    >
      <g-pageing
        :num="total"
        @g-getpage="handleClickChangePage"
      ></g-pageing>
    </div>
  </div>
</template>

<script>
import tag from '@/components/tag/index.vue';
import pageing from '@/components/pageing/index.vue';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  props: {
    http: {
      type: String,
      default: 'getArticleList'
    },
    category: {
      type: String,
      default: ''
    },
    flag: {
      default: true
    },
    text: {
      type: String,
      default: ''
    }
  },
  components: {
    'g-tag': tag,
    'g-pageing': pageing
  },
  // name: 'articlelist',
  data() {
    return {
      query: {
        page: 1,
        num: 3,
        userid: '',
        category: ''
      },
      total: 1,
      articlelist: [],
      noarticleText: '没有文章，快去发表文章吧~'
    };
  },
  created() {
    const _self = this;
    if (_self.flag) {
      _self.handleClickChangePage(1);
    }
  },
  mounted() {},
  methods: {
    // 点赞
    handleClickAddLike(item) {
      var _self = this;
      if (!JSON.parse(localStorage.getItem('tyqUser'))) {
        _self.$gMessage({
          title: '请先登录!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      let userid = JSON.parse(localStorage.getItem('tyqUser')).userid;
      _self.$set(item, 'userid', userid);
      _self.$set(item, 'status', 1);
      _self.$http.post('/addLike', item).then(res => {
        console.log(res);
        _self.$gMessage({
          title: res.data.msg,
          duration: 2000,
          type: 'success'
        });
        if (res.data.msg.indexOf('取消点赞') != -1) {
          _self.$set(item, 'like', item.like - 1);
        } else if (res.data.msg.indexOf('点赞成功') != -1) {
          _self.$set(item, 'like', item.like + 1);
        }
      });
    },
    // 获取改变的页码
    handleClickChangePage(num) {
      // 使用$emit传值,用形参接收
      var _self = this;
      // console.log(num);
      _self.$set(_self.query, 'page', num);
      _self.$set(_self.query, 'category', _self.category);
      // _self.$set(_self.query, 'userid', _self.tyqUser.userid);
      _self.$http.post(`/${_self.http}`, _self.query).then(res => {
        // console.log(res.data);
        if (!res.data.flag) {
          _self.$gMessage({
            title: '文章列表获取失败',
            duration: 2000,
            type: 'error'
          });
        } else {
          const reg = /(<\/?.+?\/?>|&nbsp;)/g;
          res.data.res.forEach((item, index) => {
            // console.log(item.content);
            // 把所有的标签都删除，并且长度超过90，只取90个字符+'...'
            item.content =
              item.content.length > 90
                ? item.content
                    .replace(reg, '')
                    .substr(0, 90)
                    .concat('...')
                : item.content.replace(reg, '');
          });
          // Object.assign(_self.articleList, res.data.res);
          _self.articlelist = res.data.res;
          console.log(res.data);
          _self.total = Math.ceil(res.data.total[0].total / _self.query.num);
          console.log(_self.total, 'total');
        }
      });
    },
    // 搜索文章列表
    handleSearch() {
      const _self = this;
      if (!_self.text) return false;
      _self.$http.get(`/getArticleListByText?text=${_self.text}`).then(res => {
        console.log(res);
        const reg = /(<\/?.+?\/?>|&nbsp;)/g;
        res.data.res.forEach((item, index) => {
          // console.log(item.content);
          // 把所有的标签都删除，并且长度超过90，只取90个字符+'...'
          item.content =
            item.content.length > 90
              ? item.content
                  .replace(reg, '')
                  .substr(0, 90)
                  .concat('...')
              : item.content.replace(reg, '');
        });
        _self.articlelist = res.data.res;
        _self.noarticleText = '搜索内容不存在~';
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.articlelist {
  .articlelist-list {
    .articlelist-list-noarticle {
      padding: 1.25rem 0;
      font-size: 1.375rem;
    }
    .articlelist-list-item {
      padding: 1.5625rem 0;
      border-bottom: 0.125rem solid #bfab86;
      &:hover {
        background: #ffffff;
      }
      .articlelist-list-item-left {
        position: relative;
        width: 10.625rem;
        height: 8.5625rem;
        margin: 0 1.25rem 0 0;
        overflow: hidden;
        img {
          height: 100%;
          transition: all 0.5s;
          &:hover {
            transform: translate(-50%, -50%) scale(1.3);
          }
        }
      }
      .articlelist-list-item-right {
        .articlelist-list-item-right-title {
          max-width: 18.75rem;
          padding: 0 0 0.5rem 0;
          font-size: 1.25rem;
          font-weight: 600;
          &:hover {
            color: rgb(2, 82, 82);
            text-decoration: underline;
          }
        }
        .articlelist-list-item-right-make {
          width: 100%;
          .articlelist-list-item-right-make-tagtime {
            .iconfont {
              color: #60c5e7;
              margin: 0 0.3125rem;
            }
          }
          .articlelist-list-item-right-make-right {
            div {
              margin: 0 0.1875rem;
            }
          }
        }
      }
    }
  }
  .articlelist-pageing {
    margin: 1.25rem 0;
  }
}
</style>