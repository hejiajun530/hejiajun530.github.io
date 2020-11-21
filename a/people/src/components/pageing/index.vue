<template>
  <div class="pageing">
    <div
      class="pageing-prev pageing-box"
      v-if="index > 1"
      @click="handleClickChangeNum('prev')"
    >&lt;</div>
    <template v-for="item in num">
      <div
        class="pageing-num pageing-box"
        :class="item == index ? 'active' : ''"
        :key="item"
        v-if="item <= 2 || item >= num - 1"
        @click="handleClickChangeNum(item)"
      >{{item}}</div>
      <div
        class="pageing-num pageing-box"
        :class="index > 2 && index < num - 1 ? 'active' : ''"
        :key="item"
        v-if="num >= 5 && item == 3"
      >{{item + '/' + num}}</div>
    </template>
    <div
      class="pageing-next pageing-box"
      v-if="index < num"
      @click="handleClickChangeNum('next')"
    >&gt;</div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      default: 1
    }
  },
  data() {
    return {
      index: 1
    };
  },
  methods: {
    // 选择页码
    handleClickChangeNum(idx) {
      var _self = this;
      if (idx == 'prev') {
        _self.index -= 1;
      } else if (idx == 'next') {
        _self.index += 1;
      } else {
        _self.index = idx;
      }
      // 使用$emit传值,用形参接收
      _self.$emit('g-getpage', _self.index);
    }
  }
};
</script>

<style lang="scss" scoped>
.pageing {
  width: 100%;
  height: 1.875rem;
  display: flex;
  justify-content: flex-end;
  .pageing-box {
    width: 1.875rem;
    height: 1.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: skyblue;
    margin: 0 0.3125rem;
    border-radius: 0.3125rem;
    cursor: pointer;
    &:hover,
    &.active {
      color: #ffffff;
      background: darkturquoise;
    }
  }
}
</style>