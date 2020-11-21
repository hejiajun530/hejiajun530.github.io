<template>
  <div class="articlelist">
    <!-- 文章列表{{articlelist}} -->
    <div class="articlelist-list">
      <div
        class="articlelist-list-noarticle"
        v-if="articlelist.length <= 0"
      >
        没有文章，快去发表文章吧~
      </div>
      <div
        class="articlelist-list-item d-flex jc-start"
        v-for="item in articlelist"
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
                <i class="iconfont icon-linedesign-01"></i>
                <div>{{item.common ? item.common : 0}}</div>
              </div>
              <!-- 浏览数量 -->
              <div class="articlelist-list-item-right-make-right-count d-flex jc-end ai-center pointSB">
                <i class="iconfont icon-xianshi"></i>
                <div>{{item.count ? item.count : 0}}</div>
              </div>
              <!-- 点赞数量 -->
              <div class="articlelist-list-item-right-make-right-common d-flex jc-end ai-center pointSB">
                <i class="iconfont icon-dianzan"></i>
                <div>{{item.like ? item.like : 0}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toymd } from '@/commons/date.js';
import tag from '@/components/tag/index.vue';
export default {
  props: {
    articlelist: {
      type: Array
    }
  },
  components: {
    'g-tag': tag
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // toymd 时间转换格式
    toymd: toymd
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
      padding: 25px 0;
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
          padding: 0 0 8px 0;
          font-size: 20px;
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
}
</style>