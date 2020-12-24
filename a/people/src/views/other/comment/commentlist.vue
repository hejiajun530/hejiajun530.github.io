<template>
  <div class="commentlist">
    <div
      class="commentlist-nocomment text-center"
      v-if="commentlist.length <= 0"
    >还没有评论，快去评论吧~</div>
    <template v-if="commentlist.length > 0">
      <div class="commentlist-title">{{commentTitle}}</div>
      <!-- 评论列表 -->
      <div
        class="commentlist-item d-flex jc-start ai-start"
        v-for="item in commentlist"
        :key="item.id"
      >
        <div class="commentlist-item-avator">
          <img :src="item.avator">
        </div>
        <div class="commentlist-item-box flex-1">
          <div class="commentlist-item-box-nametime d-flex jc-between ai-center">
            <div class="commentlist-item-box-nametime-username">{{item.username}}</div>
            <div class="commentlist-item-box-nametime-time">{{toymd(item.createTime, 'yy-mm-dd hh:mm:ss')}}</div>
          </div>
          <div
            class="commentlist-item-box-comment"
            v-html="item.comment"
          ></div>
          <!-- 点赞数量 -->
          <div
            class="commentlist-item-box-like d-flex jc-end ai-center pointSB"
            @click="handleClickAddLike(item)"
          >
            <i class="iconfont icon-dianzan"></i>
            <div>{{item.like ? item.like : 0}}</div>
          </div>
        </div>
      </div>
      <!-- 分页 -->
      <div class="commentlist-pageing">
        <g-pageing
          :num="total"
          @g-getpage="handleClickChangePage"
        ></g-pageing>
      </div>
    </template>
  </div>
</template>

<script>
import pageing from '@/components/pageing/index';
export default {
  props: {
    // commentlist: {
    //   type: Array
    // },
    http: {
      default: 'getCommentListById'
    },
    commentTitle: {
      type: String,
      default: '最新评论'
    }
  },
  components: {
    'g-pageing': pageing
  },
  data() {
    return {
      query: {
        page: 1,
        num: 2,
        articleid: ''
      },
      total: 0,
      commentlist: []
    };
  },
  created() {
    const _self = this;
    _self.handleClickChangePage(1);
  },
  mounted() {},
  methods: {
    test(num) {
      console.log(num, 'test');
    },
    // 点赞
    handleClickAddLike(item) {
      var _self = this;
      // if (!JSON.parse(localStorage.getItem('tyqUser'))) {
      if (!JSON.parse(sessionStorage.getItem('tyqUser'))) {
        _self.$gMessage({
          title: '请先登录!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      // let userid = JSON.parse(localStorage.getItem('tyqUser')).userid;
      let userid = JSON.parse(sessionStorage.getItem('tyqUser')).userid;
      _self.$set(item, 'userid', userid);
      _self.$set(item, 'status', 1);
      // console.log(item);
      _self.$http.post('/addCLike', item).then(res => {
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
      _self.$set(_self.query, 'articleid', _self.$parent.articleid);
      _self.$http.post(`/${_self.http}`, _self.query).then(res => {
        _self.commentlist = res.data.res;
        console.log(res.data.res);
        if (_self.commentlist.length && _self.commentlist[0].total) {
          _self.total = Math.ceil(_self.commentlist[0].total / _self.query.num);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.commentlist {
  .commentlist-title {
    position: relative;
    font-size: 1.25rem;
    font-weight: 600;
    color: orangered;
    padding: 0 0 0 1.25rem;
    margin: 0.625rem 0 1.25rem 0;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 0.375rem;
      height: 1.5625rem;
      background: orangered;
      border-radius: 0.375rem;
    }
  }
  .commentlist-nocomment {
    font-size: 1.25rem;
    padding: 1.25rem 0;
  }
  .commentlist-item {
    min-height: 6.875rem;
    padding: 0.8125rem 0 0.6875rem;
    border-bottom: 0.0625rem dashed #dddddd;
    .commentlist-item-avator {
      width: 3.875rem;
      padding: 0 1.25rem 0 0;
      img {
        width: 100%;
      }
    }
    .commentlist-item-box {
      .commentlist-item-box-nametime {
        .commentlist-item-box-nametime-username {
          color: orangered;
        }
        .commentlist-item-box-nametime-time {
          color: #cccccc;
        }
      }
      .commentlist-item-box-comment {
        font-size: 1.125rem;
        /deep/img {
          height: 6.25rem !important;
        }
      }
    }
  }
  .commentlist-pageing {
    margin: 1.25rem 0;
  }
}
</style>