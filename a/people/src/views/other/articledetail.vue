<template>
  <div class="articledetail text-left">
    <div class="articledetail-title">
      <strong>您当前的位置：</strong><i>首页</i><span>&gt;</span><i>文章详情</i>
    </div>
    <div class="articledetail-box">
      <!-- 文章标题 -->
      <div class="articledetail-box-title">{{model.title}}</div>
      <div class="articledetail-box-tag d-flex jc-start ai-center">
        <!-- 作者 -->
        <div class="articledetail-box-tag-name">
          <i class="iconfont icon-gerenxinxi"></i>
          <span>{{model.username}}</span>
        </div>
        <!-- 发表时间 -->
        <div class="articledetail-box-tag-time">
          <i class="iconfont icon-dingdanxiangqing-chuangjianshijian"></i>
          <span>{{toymd(model.createTime, 'yy-mm-dd hh:mm:ss')}}</span>
        </div>
      </div>
      <!-- 文章内容 -->
      <div
        class="articledetail-box-content"
        v-html="model.content"
      ></div>
    </div>
  </div>
</template>

<script>
import { toymd } from '@/commons/date.js';
export default {
  data() {
    return {
      model: ''
    };
  },
  watch: {
    $route(to, from) {
      var _self = this;
      // console.log(to);
      // console.log(from);
      _self.handleGetArticleById();
    }
  },
  created() {
    var _self = this;
    _self.handleGetArticleById();
  },
  mounted() {},
  methods: {
    // 转换时间格式
    toymd: toymd,
    // 根据id获取文章
    handleGetArticleById() {
      var _self = this;
      if (_self.$route.query.articleid) {
        _self.postFlag = false;
        _self.$http
          .get(
            `/getArticleByArticleId?articleid=${_self.$route.query.articleid}`
          )
          .then(res => {
            console.log(res.data);
            _self.model = res.data.res[0];
            _self.handleAddArticleCount();
          });
      }
    },
    // 增加浏览记录
    handleAddArticleCount() {
      var _self = this;
      let count = _self.model.count + 1;
      _self.$set(_self.model, 'count', count);
      _self.$http.post('/editArticleById', _self.model).then(res => {
        // console.log(res.data);
        // if (res.data.flag) {
        //   _self.$gMessage({
        //     title: '修改成功',
        //     duration: 2000,
        //     type: 'success'
        //   });
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.articledetail {
  padding: 0 0.625rem;
  .articledetail-title {
    padding: 0 0 0.9375rem 0;
    margin: 0 0 1.25rem 0;
    border-bottom: 0.3125rem solid orangered;
    span {
      margin: 0 0.625rem;
    }
  }
  .articledetail-box {
    .articledetail-box-title {
      font-size: 1.375rem;
      font-weight: 600;
      padding: 0 0 0.9375rem 0;
    }
    .articledetail-box-tag {
      font-size: 0.75rem;
      color: #888888;
      .articledetail-box-tag-name {
        margin: 0 1.875rem 0 0;
      }
      .iconfont {
        margin: 0 0.5rem 0 0;
        font-size: 0.75rem !important;
      }
    }
    .articledetail-box-content {
      width: 100%;
      margin: 1.5625rem 0;
      text-indent: 2em !important;
      line-height: 1.875rem;
      overflow: hidden;
      p img,
      img,
      audio {
        width: 100% !important;
      }
    }
  }
}
</style>