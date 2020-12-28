<template>
  <div
    class="search text-left"
    :style="phoneFlag ? 'padding: 0;' : ''"
  >
    <!-- <input type="text" @input="handleInputSearch" placeholder="搜索文章"> -->
    <div class="search-box d-flex jc-start ai-center">
      <input
        type="text"
        v-model="text"
        placeholder="搜索文章"
        class="search-search"
      >
      <div style="width: 15.625rem;">
        <g-select
          v-model="tag"
          placeholder="请选择文章标签"
          multiple
        >
          <g-options
            v-for="item in tagList"
            :key="item.id"
            :value="item"
          ></g-options>
        </g-select>
      </div>
      <button
        @click="handleInputSearchDou"
        class="search-btn pointSB"
      >搜索</button>
    </div>
    <!-- 过往故事 文章列表 -->
    <div class="search-articlelist">
      <!-- <articlelist http="getArticleListStory"></articlelist> -->
      <articlelist
        :articlelist="articlelist"
        :noarticleText="noarticleText"
      ></articlelist>
    </div>
  </div>
</template>

<script>
import select from '@/components/select/index';
import options from '@/components/select/options';
import articlelist from './article/articlelist';
import mixin from '@/mixins.js';
export default {
  mixins: [mixin],
  components: {
    articlelist,
    'g-select': select,
    'g-options': options
  },
  data() {
    return {
      text: '', // 搜索内容
      douTimer: null, // 防抖定时器
      doudelay: 500, // 防抖时间
      tagList: ['js', 'css', 'html'], // 标签列表
      tag: [], // 标签字符串
      articlelist: [], // 文章列表
      noarticleText: '没有文章，快去发表文章吧~' // 没有文章时，显示的文字
    };
  },
  // watch: {
  //   text() {
  //     const _self = this;
  //     _self.handleInputSearchDou();
  //   }
  // },
  methods: {
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
    },
    // 搜索文章列表
    handleInputSearch() {
      const _self = this;
      if (!_self.text) return false;
      let tag = '';
      _self.tag.map((item, index) => {
        // console.log(item, index)
        // 把数组转为逗号隔开的字符串    使用三元表达式让第一个不加逗号
        tag += index == 0 ? item : ',' + item;
      });
      let query = {
        text: _self.text,
        tag: tag
      };
      _self.$http.post(`/getArticleListByText`, query).then(res => {
        console.log(res);
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
        _self.articlelist = res.data.res;
        _self.noarticleText = '搜索内容不存在！';
      });
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
  padding: 0 0.625rem;
  .search-box {
    height: 4.375rem;
    .search-search {
      width: 18.75rem;
      height: 35px;
      border: 0.0625rem solid #dddddd;
      border-radius: 2.1875rem;
      padding: 0 0 0 0.9375rem;
    }
    .search-select {
      width: 14.6875rem;
      margin: 0 0.3125rem;
    }
    .search-btn {
      padding: 0.4375rem 0.625rem;
      border-radius: 0.3125rem;
      background: #000000;
      color: #ffffff;
    }
  }
}
</style>