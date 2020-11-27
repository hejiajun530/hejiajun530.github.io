<template>
  <div class="comment">
    <div class="comment-post text-left">
      <!-- 跳转到登录页面或显示头像 -->
      <div class="comment-post-login d-flex jc-center ai-center pointSB">
        <div v-if="tyqUser && tyqToken">
          <img
            :src="tyqUser.avator"
            v-if="tyqUser && tyqUser.avator"
          >
          <img
            src="@/assets/logo.png"
            v-else
          >
        </div>
        <span
          v-else
          @click="$router.push('/login')"
        >登录</span>
      </div>
      <!-- 输入评论内容 -->
      <div class="comment-post-textarea">
        <textarea
          v-model="content"
          placeholder="既然来了，就说几句吧..."
        ></textarea>
      </div>
      <!-- 上传图片和发表评论 -->
      <div class="comment-post-make d-flex jc-between ai-center">
        <div class="d-flex jc-start ai-center">
          <img
            :src="item"
            v-for="(item, index) in imglist"
            :key="item.id"
            @click="imglist.splice(index, 1)"
          >
          <g-upload
            title="点击图片可以删除列表中的图片"
            @g-uploadList="handleGetUploadList"
            v-if="imglist.length < 3"
          ></g-upload>
        </div>
        <div
          class="comment-post-make-btn pointSB"
          @click="handleClickPostComment"
        >畅言一下</div>
      </div>
      <!-- 热门评论列表 -->
      <!-- <commentlist
        commentTitle="热门评论"
        http="getCommentListRe"
      ></commentlist> -->
      <!-- 评论列表标题 -->
      <div class="comment-post-list d-flex jc-between ai-end">
        <div class="comment-post-list-title">评论</div>
        <div class="comment-post-list-sum"><span>{{commentSum}}</span>条评论</div>
      </div>
      <!-- 最新评论列表 -->
      <commentlist
        ref="commentlist"
        commentTitle="最新评论"
        http="getCommentListById"
      ></commentlist>
      <!-- :commentlist="commentlist" -->
    </div>
  </div>
</template>

<script>
import upload from '@/components/upload/index';
import commentlist from './commentlist';
import mixin from '@/mixins.js';
export default {
  mixins: [mixin],
  components: {
    'g-upload': upload,
    commentlist
  },
  props: {
    articleid: {
      type: Number
    }
  },
  data() {
    return {
      content: '',
      imglist: [],
      commentlist: [],
      commentSum: 0
    };
  },
  created() {
    const _self = this;
    // _self.handleGetCommentList();
    _self.handleGetCommentSum();
  },
  mounted() {},
  methods: {
    // 获取upload的数组
    handleGetUploadList(file) {
      var _self = this;
      // console.log(file);
      let formData = new FormData();
      formData.append('file', file);
      // 上传图片
      _self.$http.post('/upload', formData).then(res => {
        _self.imglist.push(res.data.url);
        console.log(_self.imglist);
      });
    },
    // 评论数量
    handleGetCommentSum() {
      const _self = this;
      _self.$http
        .get(`/getCommentSum?articleid=${_self.articleid}`)
        .then(res => {
          _self.commentSum = res.data.res[0].commentSum;
          // console.log(_self.commentSum);
        });
    },
    // 发表评论
    handleClickPostComment() {
      const _self = this;
      // _self.$refs.commentlist.test(1);
      // return false;
      if (!_self.tyqUser && !_self.tyqToken) {
        _self.$gMessage({
          title: '请先登录!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      if (!_self.content) {
        _self.$gMessage({
          title: '内容不能为空!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      let imgstr = '';
      _self.imglist.forEach((item, index) => {
        imgstr += `<img src='${item}'/>`;
      });
      let content = `<p>${_self.content}</p>` + imgstr;
      let body = {
        articleid: _self.articleid,
        userid: _self.tyqUser.userid,
        comment: content
      };
      console.log(body);
      _self.$http.post('/addComment', body).then(res => {
        console.log(res);
        if (res.data.res.affectedRows == 1) {
          _self.$gMessage({
            title: '评论成功!',
            duration: 2000
          });
          _self.$refs.commentlist.handleClickChangePage(1);
        }
      });
    }
    // 查询评论列表
    // handleGetCommentList() {
    //   const _self = this;
    //   _self.$http
    //     .get(`/getCommentListById?articleid=${_self.articleid}`)
    //     .then(res => {
    //       _self.commentlist = res.data.res;
    //       console.log(_self.commentlist);
    //     });
    // }
  }
};
</script>

<style lang="scss" scoped>
.comment {
  // background: #fffbf0;
  .comment-post {
    position: relative;
    padding: 1.875rem 0 0 0;
    .comment-post-login {
      position: absolute;
      top: 0;
      left: 0.625rem;
      width: 2.5rem;
      height: 2.5rem;
      border: 0.0625rem solid orangered;
      background: #fffbf0;
      font-size: 0.875rem;
      border-radius: 50%;
      z-index: 1;
      overflow: hidden;
      div,
      img {
        height: 100%;
      }
    }
    .comment-post-textarea {
      position: relative;
      textarea {
        width: 100%;
        min-height: 6.25rem;
        padding: 1.25rem;
        background: transparent;
        border: 0.0625rem solid orangered;
        border-radius: 0.625rem;
      }
    }
    .comment-post-make {
      height: 5.625rem;
      img {
        height: 5rem;
        margin: 0 0.625rem 0 0;
      }
      .comment-post-make-btn {
        padding: 0.625rem 1.25rem;
        color: #ffffff;
        background: orangered;
        border-radius: 0.625rem;
      }
    }
    .comment-post-list {
      color: orangered;
      border-bottom: 0.0625rem solid orangered;
      margin: 1.875rem 0 0 0;
      .comment-post-list-title {
        font-size: 1.25rem;
        padding: 0.3125rem 1.25rem;
        border: 0.0625rem solid orangered;
        border-bottom: 0.0625rem solid #fffbf0;
        border-radius: 0.625rem 0.625rem 0 0;
        margin: 0 0 -0.0625rem 0;
      }
      .comment-post-list-sum {
        span {
          font-size: 1.5rem;
          font-weight: 900;
          margin: 0 0.3125rem 0 0;
        }
      }
    }
  }
}
</style>