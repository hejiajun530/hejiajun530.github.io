<template>
  <div class="search text-left">
    <!-- <input type="text" @input="handleInputSearch" placeholder="搜索文章"> -->
    <input
      type="text"
      v-model="text"
      placeholder="搜索文章"
      class="search-search"
    >
    <!-- <g-select
      :selectList='tagList'
      chooseIndex='1'
      @g-selectValue="handleGetSelectValueTag"
      id="tips"
    ></g-select> -->
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
import select from '@/components/select/index';
import articlelist from './article/articlelist';
export default {
  components: {
    articlelist,
    'g-select': select
  },
  data() {
    return {
      text: '',
      douTimer: null,
      doudelay: 500,
      tagList: ['js', 'css', 'html'],
      tag: ''
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
    },
    // 获取select下拉框组件选择的值 数组形式  标签
    handleGetSelectValueTag(value) {
      var _self = this;
      console.log(value);
      _self.tag = '';
      value.map((item, index) => {
        // console.log(item, index)
        // 把数组转为逗号隔开的字符串    使用三元表达式让第一个不加逗号
        _self.tag += index == 0 ? item : ',' + item;
      });
      console.log(_self.tag);
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