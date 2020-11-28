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
      <!-- 点赞 -->
      <div class="articledetail-box-make text-center">
        <i
          class="iconfont icon-dianzan pointSB"
          @click="handleClickAddLike"
        ></i>
        <span>{{model.like}}</span>
      </div>
      <div class="articledetail-box-share d-flex jc-start ai-center">
        <span>分享:</span>
        <div
          class="articledetail-box-share-qqkonjian pointSB iconfont icon-QQzone"
          @click="handleClickShareQQKJ"
        ></div>
        <div
          class="articledetail-box-share-weibo pointSB iconfont icon-weibo"
          @click="handleClickShareWB"
        ></div>
        <div class="articledetail-box-share-ewm pointSB iconfont icon-erweima">
          <div class="articledetail-box-share-ewm-box">
            <ewm :url="$route.fullPath"></ewm>
          </div>
        </div>
      </div>
    </div>
    <!-- 评论 -->
    <comment
      :articleid="model.articleid"
      v-if="model.articleid"
    ></comment>
  </div>
</template>

<script>
import comment from './comment/comment';
import ewm from '@/components/ewm/index';
export default {
  components: {
    comment,
    ewm
  },
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
    },
    // 点赞或取消点赞
    handleClickAddLike() {
      const _self = this;
      if (!JSON.parse(localStorage.getItem('tyqUser'))) {
        _self.$gMessage({
          title: '请先登录!',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      let userid = JSON.parse(localStorage.getItem('tyqUser')).userid;
      _self.$set(_self.model, 'userid', userid);
      _self.$set(_self.model, 'status', 1);
      _self.$http.post('/addLike', _self.model).then(res => {
        console.log(res);
        _self.$gMessage({
          title: res.data.msg,
          duration: 2000,
          type: 'success'
        });
        if (res.data.msg.indexOf('取消点赞') != -1) {
          _self.$set(_self.model, 'like', _self.model.like - 1);
        } else if (res.data.msg.indexOf('点赞成功') != -1) {
          _self.$set(_self.model, 'like', _self.model.like + 1);
        }
      });
    },
    // 分享文章到qq空间
    handleClickShareQQKJ() {
      const _self = this;
      // 分享到qq空间
      var p = {
        url: 'http://www.tyq121.top' + _self.$route.fullPath,
        showcount: '1' /*是否显示分享总数,显示：'1'，不显示：'0' */,
        desc: '' /*默认分享理由(可选)*/,
        summary: '' /*分享摘要(可选)*/,
        title: _self.model.title /*分享标题(可选)*/,
        site: '' /*分享来源 如：腾讯网(可选)*/,
        pics: '',
        style: '203',
        width: 98,
        height: 22
      };
      var s = [];
      for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
      }
      var url =
        'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' +
        s.join('&');
      window.open(url);
    },
    // 分享文章到微博
    handleClickShareWB() {
      const _self = this;
      // 微博分享
      var p = {
        // 表示是否显示当前页面被分享数量(1 显示)(可选， 允许为空)
        count: '1',
        //将页面地址转成短域名， 并显示在内容文字后面。(可选， 允许为空)
        url: 'http://www.tyq121.top' + _self.$route.fullPath,
        //用于发布微博的来源显示， 为空则分享的内容来源会显示来自互联网。(可选， 允许为空)
        appkey: '',
        //分享时所示的文字内容， 为空则自动抓取分享页面的title值(可选， 允许为空)
        title: _self.model.title + '(分享自@Gem_01)',
        //自定义图片地址， 作为微博配图(可选， 允许为空)
        pic: '',
        //转发时会 @相关的微博账号(可选， 允许为空)
        ralateUid: '',
        //语言设置(zh_cn | zh_tw)(可选)
        language: 'zh_cn'
      };

      var s = [];
      for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
      }
      var url = 'http://service.weibo.com/share/share.php?' + s.join('&');
      window.open(url);
    },
    // 分享文章qq好友(暂时不支持,可能需要注册为qq开发者)
    handleClickShare() {
      const _self = this;
      var p = {
        /*获取URL，可加上来自分享到QQ标识，方便统计*/
        url: 'http://www.tyq121.top' + _self.$route.fullPath,
        /*分享标题(可选)*/
        title: 'js实现第三方平台分享功能',
        /*分享摘要(可选)*/
        summary: '',
        /*分享图片(可选)*/
        pics:
          'http://localhost:3000/upload/u=4018704012,1354106016&fm=26&gp=0.jpg',
        /*视频地址(可选)*/
        // flash: '',
        /*分享来源(可选) 如：QQ分享*/
        site: 'baidu',
        desc: ''
      };
      var s = [];
      for (var i in p) {
        s.push(i + '=' + encodeURIComponent(p[i] || ''));
      }
      var url =
        'https://connect.qq.com/widget/shareqq/index.html?' + s.join('&');
      window.open(url);
      var shareqqzonestring =
        ' http://connect.qq.com/widget/shareqq/index.html?summary=js分享到qq好友测试&url=http://www.tyq121.top';
      window.open(shareqqzonestring, 'newwindow');
      console.log(_self.$route);
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
      /deep/img,
      /deep/audio {
        max-height: 21.875rem !important;
      }
    }
    .articledetail-box-make {
      padding: 0.9375rem 0;
      font-size: 1.5rem;
      .iconfont {
        font-size: 1.625rem;
      }
    }
    .articledetail-box-share {
      margin: 1.25rem 0;
      div {
        font-size: 26px;
        margin: 0 0.3125rem;
        &:nth-child(2) {
          color: #ffcd00;
        }
        &:nth-child(3) {
          color: #e52425;
        }
        &:nth-child(4) {
          color: #5288f5;
        }
      }
      .articledetail-box-share-ewm {
        position: relative;
        &:hover {
          .articledetail-box-share-ewm-box {
            display: block;
          }
        }
        .articledetail-box-share-ewm-box {
          display: none;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 100%);
          width: 100px;
          height: 100px;
          padding: 5px;
          border: 1px solid #dddddd;
          background: #ffffff;
          z-index: 999;
        }
      }
    }
  }
}
</style>