<template>
  <div class="userdetail text-left">
    <h2><i>{{userinfo.username}}</i>的文章列表</h2>
    <articlelist
      http="getArticleListById"
      :userid="userid"
    ></articlelist>
  </div>
</template>

<script>
import articlelist from '../other/article/articlelist';
export default {
  components: {
    articlelist
  },
  data() {
    return {
      userid: '',
      userinfo: ''
    };
  },
  created() {
    const _self = this;
    _self.userid = _self.$route.query.userid;
    console.log(_self.userid);
    _self.handleGetUser();
  },
  mounted() {},
  methods: {
    // 根据用户id获取用户信息
    handleGetUser() {
      const _self = this;
      _self.$http.get(`/getUserById?userid=${_self.userid}`).then(res => {
        _self.userinfo = res.data[0];
        console.log(_self.userinfo);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.userdetail {
  h2 {
    i {
      font-size: 30px;
      color: orangered;
      margin: 0 10px 0 0;
    }
  }
}
</style>