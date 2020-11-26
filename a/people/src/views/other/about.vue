<template>
  <div class="about">
    <!-- <input type="text" @input="handleInputSearch" placeholder="搜索文章"> -->
    <input type="text" v-model="text" placeholder="搜索文章">
    <button @click="handleInputSearch">搜索</button>
    <!-- 过往故事 文章列表 -->
    <div class="about-articlelist">
      <!-- <articlelist http="getArticleListStory"></articlelist> -->
      <articlelist :text="text" :flag="false" ref="articlelistDom"></articlelist>
    </div>
  </div>
</template>

<script>
import articlelist from './article/articlelist';
export default {
  components: {
    articlelist,
  },
  data() {
    return {
      text: ''
    };
  },
  methods: {
    // 搜索功能
    handleInputSearch() {
      const _self = this;
      if (!_self.text) {
        _self.$gMessage({
          title: '值不能为空!',
          duration: 2000,
          type: 'error'
        })
        return false;
      }
      _self.$refs.articlelistDom.handleSearch();
    }
  },
  created() {
    const _self = this;
    // _self.handleInputSearch();
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
</style>