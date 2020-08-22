<template>
  <div>
    <div
      class="cascader"
      v-clickOutSide="handleClickHide"
    >
      <!-- @mouseLeave="handleClickcascaderShow" -->
      <div
        class="cascader-title"
        :class="cascaderShow ? 'active' : ''"
        @click="handleClickcascaderShow"
      >
        <!-- 单选 -->
        <div>{{reusltPath ? reusltPath : '请选择'}}</div>
      </div>
      <div
        class="cascader-box"
        v-show="cascaderShow"
      >
        <CascaderItem
          :options="options"
          :selectedItems="selectedItems"
          :level="0"
          @change="change"
        ></CascaderItem>
      </div>
    </div>
  </div>
</template>
<script>
import CascaderItem from "./cascaderItem";
import { clickOutSide } from "../../commons/directive";
export default {
  props: ["options"],
  data() {
    return {
      // 控制下拉框是否显示
      cascaderShow: false,
      // 用户自己选择项
      selectedItems: []
    };
  },
  directives: {
    clickOutSide
  },
  mounted() {
    var _self = this;
  },
  computed: {
    reusltPath() {
      var _self = this;
      _self.$emit(
        "g-cascaderValue",
        _self.selectedItems.map(item => item.label).join("/")
      );
      return _self.selectedItems.map(item => item.label).join("/");
    }
  },
  components: {
    CascaderItem
  },
  methods: {
    // 控制 cascader隐藏
    handleClickHide() {
      var _self = this;
      _self.cascaderShow = false;
    },
    // 控制 cascader显示
    handleClickcascaderShow() {
      var _self = this;
      if (_self.cascaderShow) {
        _self.cascaderShow = false;
      } else {
        _self.cascaderShow = true;
      }
    },
    change(newValue) {
      this.selectedItems.splice(newValue.level, 1, newValue.item);
      this.selectedItems.splice(newValue.level + 1);
    }
  }
};
</script>
<style scoped>
/* cascader */
.cascader {
  width: 300px;
  height: 30px;
  background-color: #ffffff;
  text-align: left;
}
.cascader-title,
.cascader-option {
  background-color: #ffffff;
  padding: 0 30px 0 10px;
  line-height: 30px;
  box-sizing: border-box;
}
.cascader-title {
  position: relative;
  width: 300px;
  min-height: 30px;
  border: 1px solid #dddddd;
}
.cascader-title::after,
.cascader-title.active::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border: 5px solid;
}
.cascader-title::after {
  transform: translate(0, -20%);
  border-color: #666666 transparent transparent transparent;
}
.cascader-title.active::after {
  transform: translate(0, -70%);
  border-color: transparent transparent #666666 transparent;
}
.cascader-box {
  position: relative;
  width: 300px;
  height: 200px;
  /* border: 1px solid #dddddd; */
  border-top: 0;
  font-size: 14px;
  box-sizing: border-box;
  z-index: 999;
}
</style>