<template>
  <div class="user text-left">
    <h2>用户列表</h2>
    <div class="user-search">
      <input
        type="text"
        v-model="name"
        placeholder="请输入用户名搜索"
        class="user-search-input"
      >
      <button
        class="user-search-btn pointSB"
        @click="handleClickGetUser"
      >搜索</button>
    </div>
    <userlist :userlist="userlist"></userlist>
    <g-pageing
      :num="total"
      @g-getpage="handleClickChangePage"
    ></g-pageing>
    <!-- <g-tab :tablist="tablist">
      {{tablist}}
    </g-tab> -->
  </div>
</template>

<script>
// import tab from '@/components/tab/index';
import pageing from '@/components/pageing/index';
import userlist from './userlist/index';
export default {
  components: {
    // 'g-tab': tab
    userlist,
    'g-pageing': pageing
  },
  data() {
    return {
      userlist: [],
      query: {
        page: 1,
        num: 7,
        userid: ''
      },
      total: 0,
      name: ''
      // tablist: ['所有用户', '已关注用户']
    };
  },
  created() {
    const _self = this;
    _self.handleClickChangePage(1);
  },
  mounted() {
    const _self = this;
  },
  methods: {
    // 获取用户列表
    handleClickChangePage(num) {
      const _self = this;
      _self.$set(_self.query, 'page', num);
      _self.$set(_self.query, 'userid', _self.$parent.tyqUser.userid);
      _self.$http.post('/getUserList', _self.query).then(res => {
        console.log(res);
        _self.userlist = res.data.res;
        _self.total = Math.ceil(res.data.res[0].total / _self.query.num);
      });
    },
    // 通过用户名搜索
    handleClickGetUser() {
      const _self = this;
      if (_self.name) {
        _self.$http.get(`/getUser?username=${_self.name}`).then(res => {
          console.log(res);
          _self.userlist = res.data;
          _self.total = 0;
        });
      } else {
        _self.handleClickChangePage(1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  .user-search {
    padding: 1.25rem 0;
    .user-search-input {
      width: 18.75rem;
      height: 2.1875rem;
      border: 0.0625rem solid #dddddd;
      border-radius: 2.1875rem;
      padding: 0 0 0 0.9375rem;
    }
    .user-search-btn {
      width: 5rem;
      height: 2.1875rem;
      background: #000000;
      color: #ffffff;
      border-radius: 2.1875rem;
      margin: 0 0 0 0.625rem;
    }
  }
}
</style>