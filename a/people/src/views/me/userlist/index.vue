<template>
  <div class="userlist">
    <!-- {{userlist}} -->
    <div
      class="userlist-item d-flex jc-start ai-center"
      v-for="item in userlist"
      :key="item.userid"
    >
      <div class="userlist-item-avator">
        <img
          :src="item.avator"
          v-if="item.avator"
        >
        <img
          src="@/assets/logo.png"
          v-else
        >
      </div>
      <div class="userlist-item-info d-flex jc-between ai-center flex-1">
        <div
          class="userlist-item-info-username pointSB"
          @click="$router.push(`/me/userdetail?userid=${item.userid}`)"
        >{{item.username}}{{item.email ? '-' + item.email : ''}}</div>
        <div class="userlist-item-info-make">
          <!-- <button @click="$router.push(`/me/chat?userid=${item.userid}`)">聊天</button> -->
          {{item.articleNum}}篇文章
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userlist: {
      type: Array
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.userlist {
  .userlist-item {
    height: 70px;
    padding: 5px;
    border-bottom: 1px solid #dddddd;
    &:hover {
      background: #ffffff;
    }
    .userlist-item-avator {
      height: 100%;
      img {
        height: 100%;
      }
    }
    .userlist-item-info {
      padding: 0 0 0 10px;
      font-size: 20px;
      .userlist-item-info-username {
        &:hover {
          color: orangered;
          text-decoration: underline;
        }
      }
    }
  }
}
</style>