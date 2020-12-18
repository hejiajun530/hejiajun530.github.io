<template>
  <div class="userdetail text-left">
    <h2><i>{{userinfo.username}}</i>的文章列表</h2>
      <articlelist :articlelist="articlelist"></articlelist>
      <div class="articlelist-pageing">
        <g-pageing
          :num="total"
          @g-getpage="handleClickChangePage"
        ></g-pageing>
      </div>
  </div>
</template>

<script>
import articlelist from '../other/article/articlelist';
import pageing from '@/components/pageing/index';
export default {
  components: {
    articlelist,
    'g-pageing': pageing
  },
  data() {
    return {
      userid: '',
      userinfo: '',
      query: {
        page: 1,
        num: 3,
        category: ''
      },
      total: 1,
      articlelist: []
    };
  },
  created() {
    const _self = this;
    _self.userid = _self.$route.query.userid;
    console.log(_self.userid);
    _self.handleGetUser();
    _self.handleClickChangePage(1);
  },
  mounted() {},
  methods: {
    // 根据用户id获取用户信息
    handleGetUser() {
      const _self = this;
      _self.$http.get(`/getUserById?userid=${_self.userid}`).then(res => {
        _self.userinfo = res.data[0];
        console.log(_self.userinfo);
      });
    },
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
  }
};
</script>

<style lang="scss" scoped>
.userdetail {
  h2 {
    i {
      font-size: 30px;
      color: orangered;
      margin: 0 10px 0 0;
    }
  }
}
</style>