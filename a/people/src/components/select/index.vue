<template>
  <div
    class="select"
    v-clickOutSide="handleClickSelectHide"
  >
    <div
      class="select-input"
      :class="optionFlag ? 'active' : ''"
      @click="handleClickOpstionShow"
    >
      <!-- 有值时 -->
      <template v-if="value.length">
        <!-- 单选 -->
        <span v-if="!multiple">{{value}}</span>
        <!-- 多选 -->
        <template v-else>
          <div
            class="select-input-tag"
            v-for="item in value"
            :key="item.id"
            @click="handleClickDel(item)"
          >{{item}}</div>
        </template>
      </template>
      <!-- 无值时 -->
      <template v-else>
        {{placeholder}}
      </template>
    </div>
    <div
      class="select-options"
      v-show="optionFlag"
      @click="handleClickChooseValue"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { clickOutSide } from "@/commons/directive.js";
export default {
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {}
  },
  watch: {
    value() {
      const _self = this;
      // _self.$emit("input", 234);
    }
  },
  data() {
    return {
      optionFlag: false,
      list: []
    };
  },
  directives: {
    clickOutSide
  },
  created() {
    var _self = this;
    if (_self.multiple) {
      _self.list = _self.value;
    }
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 显示选择框
    handleClickOpstionShow() {
      const _self = this;
      _self.optionFlag = true;
    },
    // 隐藏选择框
    handleClickSelectHide() {
      const _self = this;
      _self.optionFlag = false;
    },
    // 选择
    handleClickChooseValue(e) {
      const _self = this;
      let data = e.target.innerText;
      // console.log(data);
      if (!_self.multiple) {
        // 单选
        _self.$emit("input", data);
      } else {
        // 多选
        // 如果数组中有这个值，就删除，没有就添加
        if (_self.list.indexOf(data) != -1) {
          // 删除
          _self.list.splice(_self.list.indexOf(data), 1);
        } else {
          // 添加
          _self.list.push(data);
        }
        _self.$emit("input", _self.list);
      }
    },
    // 删除数组中已有的值
    handleClickDel(item) {
      const _self = this;
      _self.list.splice(_self.list.indexOf(item), 1);
    }
  }
};
</script>
<style scoped>
.select {
  position: relative;
  width: 100%;
  text-align: left;
}
.select-input {
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 35px;
  line-height: 35px;
  border: 1px solid #dddddd;
  border-radius: 3px;
  padding: 0 0 0 10px;
}
.select-input::after,
.select-input.active::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 5px;
  border: 8px solid;
}
.select-input::after {
  transform: translate(0, -25%);
  border-color: #888888 transparent transparent transparent;
}
.select-input.active::after {
  transform: translate(0, -75%);
  border-color: transparent transparent #888888 transparent;
}
.select-input-tag {
  padding: 0 5px;
  margin: 5px 5px 5px 0;
  background: #dddddd;
  font-size: 14px;
  border-radius: 3px;
}
.select-options {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(0, 100%);
  width: 100%;
  background: #ffffff;
  z-index: 999;
}
</style>