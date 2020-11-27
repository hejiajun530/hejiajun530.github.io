<template>
  <div class="search text-left">
    <!-- <input type="text" @input="handleInputSearch" placeholder="搜索文章"> -->
    <input
      type="text"
      v-model="text"
      placeholder="搜索文章"
      class="search-search"
    >
    <!-- @input="handleInputSearchDou" -->
    <!-- <button @click="handleInputSearch">搜索</button> -->
    <!-- 过往故事 文章列表 -->
    <div class="search-articlelist">
      <!-- <articlelist http="getArticleListStory"></articlelist> -->
      <articlelist
        :text="text"
        :flag="false"
        ref="articlelistDom"
      ></articlelist>
    </div>
  </div>
</template>

<script>
import articlelist from './article/articlelist';
export default {
  components: {
    articlelist
  },
  data() {
    return {
      text: '',
      douTimer: null,
      doudelay: 500
    };
  },
  watch: {
    text() {
      const _self = this;
      _self.handleInputSearchDou();
    }
  },
  methods: {
    // 搜索功能
    handleInputSearch() {
      const _self = this;
      // if (!_self.text) {
      //   _self.$gMessage({
      //     title: '值不能为空!',
      //     duration: 2000,
      //     type: 'error'
      //   });
      //   return false;
      // }
      _self.$refs.articlelistDom.handleSearch();
    },
    // 防抖
    handleInputSearchDou() {
      const _self = this;
      if (_self.douTimer) clearTimeout(_self.douTimer);
      // if (_self.douTimer) return console.log(_self.douTimer);
      _self.douTimer = setTimeout(function() {
        _self.handleInputSearch();
        console.log('setTimeout');
      }, _self.doudelay);
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
.search {
  padding: 0 10px;
  .search-search {
    width: 18.75rem;
    height: 2.1875rem;
    border: 0.0625rem solid #dddddd;
    border-radius: 2.1875rem;
    padding: 0 0 0 0.9375rem;
  }
}
</style>