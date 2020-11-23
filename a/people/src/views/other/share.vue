<template>
  <div class="story">
    <!-- 技术分享标题 -->
    <hometitle><strong>技术分享</strong></hometitle>
    <!-- 技术分享 文章列表 -->
    <div class="homeindex-articlelist">
      <articlelist http="getArticleListShare"></articlelist>
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