<template>
  <div class="wait">
    <!-- 添加待做事项 -->
    <div class="wait-header d-flex jc-start ai-center">
      <div class="wait-header-content">
        <input
          type="text"
          class="me-input"
          v-model="model.content"
          placeholder="待做事项内容"
        >
      </div>
      <div class="wait-header-time">
        <input
          type="text"
          class="me-input"
          v-model="model.time"
          placeholder="待做事项时间"
        >
      </div>
      <div
        class="wait-header-btn me-button"
        @click="handleClickAddWait"
      >添加</div>
    </div>
    <!-- 待做事项列表 -->
    <div class="wait-content text-left">
      <!-- 未完成 -->
      <h2>未完成事项</h2>
      <waitlist
        :waitlist="waitListNo"
        @g-waitlist="handleGetWaitList"
      ></waitlist>
      <!-- 已完成 -->
      <h2>已完成事项</h2>
      <waitlist
        :waitlist="waitListYes"
        @g-waitlist="handleGetWaitList"
      ></waitlist>
    </div>
  </div>
</template>

<script>
import waitlist from './waitlist';
export default {
  components: {
    waitlist
  },
  data() {
    return {
      model: {
        content: '',
        time: '',
        userid: '',
        istrue: 0
      },
      waitListNo: [],
      waitListYes: []
    };
  },
  created() {
    const _self = this;
    _self.handleGetWaitList();
    // console.log(_self.$parent.tyqUser.userid);
  },
  mounted() {
    const _self = this;
  },
  methods: {
    // 添加待做事项
    handleClickAddWait() {
      const _self = this;
      if (!_self.model.content) {
        _self.$gMessage({
          title: '内容不能为空',
          duration: 2000,
          type: 'error'
        });
        return false;
      }
      _self.$set(_self.model, 'userid', _self.$parent.tyqUser.userid);
      _self.$http.post('/addWait', _self.model).then(res => {
        console.log(res);
        if (res.data.flag) {
          // _self.$gMessage({
          //   title: res.data.msg,
          //   duration: 2000
          // });
          _self.model.content = '';
          _self.model.time = '';
          _self.handleGetWaitList();
        } else {
          _self.$gMessage({
            title: '添加失败',
            duration: 2000,
            type: 'error'
          });
        }
      });
    },
    // 获取待做事项列表
    handleGetWaitList() {
      const _self = this;
      _self.$http
        .get(`/getWaitList?userid=${_self.$parent.tyqUser.userid}`)
        .then(res => {
          console.log(res);
          _self.waitListNo = res.data.res.filter((item, index) => {
            return item.istrue == 0;
          });
          _self.waitListYes = res.data.res.filter((item, index) => {
            return item.istrue == 1;
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wait {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  /* 火狐滚动条隐藏 */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  .wait-header {
    .wait-header-content,
    .wait-header-time,
    .wait-header-btn {
      margin-right: 0.3125rem;
    }
  }
  .wait-content {
    h2 {
      padding: 20px 0 5px 0;
    }
  }
}
</style>