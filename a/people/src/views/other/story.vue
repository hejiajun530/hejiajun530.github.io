<template>
  <div class="story">
    <!-- 过往故事标题 -->
    <hometitle><strong>过往故事</strong></hometitle>
    <!-- 过往故事 文章列表 -->
    <div class="homeindex-articlelist">
      <!-- <articlelist http="getArticleListStory"></articlelist> -->
      <articlelist http="getArticleList" category="过往故事"></articlelist>
    </div>
  </div>
</template>

<script>
import hometitle from '../hometitle';
import articlelist from './article/articlelist';
import mixin from '@/mixins';
export default {
  mixins: [mixin],
  components: {
    articlelist,
    hometitle
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    var _self = this;
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
    .homeindex-articlelist-pageing {
      margin: 1.25rem 0;
    }
  }
}
</style>