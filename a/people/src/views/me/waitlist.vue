<template>
  <div class="waitlist">
    <template v-if="waitlist.length">
      <div
        class="waitlist-item d-flex jc-between ai-center"
        v-for="item in waitlist"
        :key="item.id"
      >
        <div class="waitlist-item-content">{{item.content}}</div>
        <div class="waitlist-item-time">{{item.time}}</div>
        <div class="waitlist-item-btn d-flex jc-between ai-center">
          <div
            class="waitlist-item-btn-istrue waitlist-btn pointSB"
            @click="handleClickChangeStatue(item)"
            :class="item.istrue == 0 ? '' : 'waitlist-no'"
          >{{item.istrue == 0 ? '未完成' : '已完成'}}</div>
          <div
            class="waitlist-item-btn-del waitlist-btn pointSB"
            @click="handleClickDelWait(item)"
          >删除</div>
        </div>
      </div>
    </template>
    <template v-else>
      <h3 style="color: #888888;">空~</h3>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    waitlist: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  created() {
    const _self = this;
  },
  methods: {
    // 改变待做事项状态
    handleClickChangeStatue(item) {
      const _self = this;
      // console.log(item);
      let model = {
        istrue: 1,
        waitid: item.waitid
      };
      if (item.istrue == 0) {
        // 未完成 改为 已完成
        // console.log('未完成');
        _self.$set(model, 'istrue', 1);
        _self.$http.post('/editWait', model).then(res => {
          console.log(res);
          if (res.data.flag) {
            _self.$emit('g-waitlist');
          }
        });
      } else {
        // 已完成 改为 未完成
        // console.log('已完成');
        _self.$set(model, 'istrue', 0);
        _self.$http.post('/editWait', model).then(res => {
          console.log(res);
          if (res.data.flag) {
            _self.$emit('g-waitlist');
          }
        });
      }
    },
    // 删除待做事项
    handleClickDelWait(item) {
      const _self = this;
      console.log(item);
      _self.$gAlert({
        title: '删除待做事项',
        content: `您确定删除文章 '${item.content}' 吗`,
        btn: {
          confirmVal: '确定',
          cancelVal: '取消'
        },
        success: function(res) {
          // console.log(res, 'res--------'); //confirm
          if (res == 'confirm') {
            _self.$http.get(`/delWait?waitid=${item.waitid}`).then(res => {
              console.log(res);
              if (res.data.flag) {
                _self.$gMessage({
                  title: `删除 '${item.content.slice(0, 3)}' 成功`,
                  duration: 2000,
                  type: 'success'
                });
                _self.$emit('g-waitlist');
              }
            });
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.waitlist {
  .waitlist-item {
    padding: 0.9375rem 0;
    border-bottom: 0.0625rem solid #dddddd;
    &:hover {
      background: #ffffff;
    }
    .waitlist-item-content {
      width: 12.5rem;
      word-wrap: break-word;
    }
  }
  .waitlist-btn {
    background: lightcoral;
    margin: 0 0.3125rem;
    padding: 0.3125rem 0.625rem;
    font-size: 0.875rem;
    color: #ffffff;
    border-radius: 0.3125rem;
  }
  .waitlist-no {
    background: #666666 !important;
  }
}
</style>