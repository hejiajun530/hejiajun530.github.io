<template>
  <div class="homeindex">
    <!-- 轮播图  pc端 -->
    <div
      class="homeindex-swiperpc"
      v-if="!phoneFlag"
    >
      <g-swiperAnimate
        :imglist="swiperAnimaImg"
        :configs="configs"
      ></g-swiperAnimate>
    </div>
    <!-- 轮播图  移动端 -->
    <div
      class="homeindex-swiperphone"
      v-else
    >
      <g-swiper
        :imglist="swiperAnimaImg"
        duration="5000"
      ></g-swiper>
    </div>
    <!-- 文章列表 -->
    <div
      class="homeindex-articlelist"
      :style="phoneFlag ? 'padding: 0;' : ''"
    >
      <!-- 最新文章标题 -->
      <div class="articlelist-title d-flex jc-between ai-center">
        <div class="articlelist-title-left">最新文章</div>
        <!-- <div class="articlelist-title-right">过往故事(11) 技术分享(156)</div> -->
      </div>
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
import swiperAnimate from '@/components/swiper/swiperAnimation.vue';
import pageing from '@/components/pageing/index.vue';
import swiper from '@/components/swiper/index.vue';
import articlelist from './article/articlelist';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    'g-swiperAnimate': swiperAnimate,
    'g-pageing': pageing,
    'g-swiper': swiper,
    articlelist
  },
  data() {
    return {
      // swiper
      configs: [
        {
          width: 680,
          height: 100,
          top: 0,
          left: -50,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 2
        }, //0
        {
          width: 680,
          height: 250,
          top: 50,
          left: -100,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 3
        }, //1
        {
          width: 680,
          height: 300,
          top: 25,
          left: 105,
          opacity: 1,
          transform: 'translate(-12.5%, 0) rotateY(0)',
          zIndex: 4
        }, //2
        {
          width: 680,
          height: 250,
          top: 50,
          left: 250,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 3
        }, //3
        {
          width: 680,
          height: 100,
          top: 0,
          left: 450,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 2
        } //4
      ],
      swiperAnimaImg: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg'
      ],
      query: {
        page: 1,
        num: 7,
        category: ''
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
.homeindex {
  min-height: 56.25rem;
  .homeindex-swiperpc {
    width: 45rem;
    height: 21.875rem;
    margin: 0 auto;
    border: 0.0625rem solid #dddddd;
  }
  .homeindex-swiperphone {
    width: 31.25rem;
    height: 21.875rem;
    margin: 0 auto;
    border: 0.0625rem solid #dddddd;
  }
  .homeindex-articlelist {
    margin: 1.25rem 0 0 0;
    padding: 0 0.9375rem;
    .homeindex-articlelist-pageing {
      margin: 1.25rem 0;
    }
    .articlelist-pageing {
      padding: 1.25rem 0;
    }
  }
}
.articlelist-title {
  border-bottom: 0.3125rem solid orangered;
  padding: 0.625rem 0;
  .articlelist-title-left {
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>