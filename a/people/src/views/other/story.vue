<template>
  <div
    class="story"
    :style="phoneFlag ? 'padding: 0;' : ''"
  >
    <!-- 过往故事标题 -->
    <hometitle><strong>过往故事</strong></hometitle>
    <!-- 过往故事 文章列表 -->
    <div class="homeindex-articlelist">
      <articlelist :articlelist="articlelist"></articlelist>
      <div class="articlelist-pageing">
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
import hometitle from '../hometitle';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    articlelist,
    'g-pageing': pageing,
    hometitle
  },
  data() {
    return {
      query: {
        page: 1,
        num: 3,
        category: '过往故事'
      },
      total: 1,
      articlelist: []
    };
  },
  methods: {
    // 获取改变的页码
    handleClickChangePage(num) {
      // 使用$emit传值,用形参接收
      var _self = this;
      // console.log(num);
      _self.$set(_self.query, 'page', num);
      // _self.$set(_self.query, 'category', '');
      // if (_self.userid && _self.http == 'getArticleListById') {
      //   _self.$set(_self.query, 'userid', _self.userid);
      // }
      _self.$http.post(`/getArticleList`, _self.query).then(res => {
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
  .homeindex-articlelist {
    margin: 1.25rem 0 0 0;
    .articlelist-pageing {
      padding: 1.25rem 0;
    }
  }
}
</style>