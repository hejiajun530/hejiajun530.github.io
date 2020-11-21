<template>
  <div class="story">
    <!-- 技术分享标题 -->
    <div class="articlelist-title d-flex jc-between ai-center">
      <div class="articlelist-title-left">技术分享</div>
      <!-- <div class="articlelist-title-right">过往故事(11) 技术分享(156)</div> -->
    </div>
    <!-- 技术分享 文章列表 -->
    <div class="homeindex-articlelist">
      <articlelist :articlelist="articleList"></articlelist>
      <div class="homeindex-articlelist-pageing">
        <g-pageing
          :num="total"
          @g-getpage="handleClickChangePage"
        ></g-pageing>
      </div>
    </div>
  </div>
</template>

<script>
import pageing from '@/components/pageing/index.vue';
import articlelist from './article/articlelist';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    'g-pageing': pageing,
    articlelist
  },
  data() {
    return {
      articleList: [],
      query: {
        page: 1,
        num: 1,
        userid: ''
      },
      total: 1
    };
  },
  methods: {
    // 获取改变的页码
    handleClickChangePage(num) {
      // 使用$emit传值,用形参接收
      var _self = this;
      // console.log(num);
      _self.$set(_self.query, 'page', num);
      // _self.$set(_self.query, 'userid', _self.tyqUser.userid);
      _self.$http.post('/getArticleListShare', _self.query).then(res => {
        console.log(res.data);
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
          _self.articleList = res.data.res;
          _self.total = Math.ceil(res.data.total[0].total / _self.query.num);
          // console.log(_self.total, 'total');
        }
      });
    }
  },
  created() {
    var _self = this;
    _self.handleClickChangePage(1);
  },
  mounted() {
    var _self = this;
  }
};
</script>

<style lang="scss" scoped>
.story {
  padding: 0 10px;
  .articlelist-title {
    border-bottom: 0.3125rem solid orangered;
    padding: 0.625rem 0;
    .articlelist-title-left {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
  .homeindex-articlelist {
    margin: 1.25rem 0 0 0;
    .homeindex-articlelist-pageing {
      margin: 1.25rem 0;
    }
  }
}
</style>