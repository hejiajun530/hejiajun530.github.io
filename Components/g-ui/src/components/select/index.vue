<template>
  <div
    class="select"
    v-clickOutSide="handleClickSelectHide"
  >
    <!-- @mouseLeave="handleClickSelectShow" -->
    <div
      class="select-title"
      :class="selectShow ? 'active' : ''"
      @click="handleClickSelectShow"
    >
      <!-- 单选 -->
      <div v-if="chooseIndex == 0">{{selectList[selectIndex]}}</div>
      <!-- 多选 -->
      <div
        v-if="chooseIndex == 1"
        class="select-title-list"
      >
        <div v-if="chooseList.length == 0">请选择学校</div>
        <div
          class="select-title-list-item"
          v-for="(subitem, idx) in chooseList"
          :key="idx"
        >
          <span>{{subitem}}</span> <span @click.stop="handleClickDelChoose(idx)">×</span></div>
      </div>
    </div>
    <div
      class="select-box"
      v-show="selectShow"
    >
      <!--  :class="index == selectIndex ? 'active' : ''" -->
      <div
        class="select-option"
        @click="handleClickChooseSelect(index, $event)"
        v-for="(item, index) in selectList"
        :key="index"
      >{{item}}
      </div>
    </div>
  </div>
</template>
<script>
import { clickOutSide } from "@/commons/directive.js";
export default {
  props: ["selectList", "chooseIndex"],
  data() {
    return {
      // 控制下拉框是否显示
      selectShow: false,
      // 选择下拉框
      selectIndex: 0,
      // 控制模式 0 单选  1 多选
      // chooseIndex: 1,
      // 选择中的下来框
      chooseList: [],
      selectIndexList: []
    };
  },
  directives: {
    clickOutSide
  },
  mounted() {
    var _self = this;
  },
  methods: {
    // 控制 select隐藏
    handleClickSelectHide() {
      var _self = this;
      _self.selectShow = false;
    },
    // 控制 select显示
    handleClickSelectShow() {
      var _self = this;
      if (_self.selectShow) {
        _self.selectShow = false;
      } else {
        _self.selectShow = true;
        var options = document.querySelectorAll(".select-option");
        for (let i = 0; i < options.length; i++) {
          options[i].classList.remove("active");
        }
        _self.selectIndexList.forEach((item, index) => {
          options[item].classList.add("active");
        });
      }
    },
    // 选择下拉框中的值
    handleClickChooseSelect(index, e) {
      var _self = this;
      if (_self.chooseIndex == 0) {
        // 0 单选模式
        _self.selectIndexList = [];
        _self.selectIndex = index;
        _self.selectIndexList.push(index);
      } else if (_self.chooseIndex == 1) {
        // 1 多选模式
        _self.selectIndex = index;
        if (
          _self.chooseList.indexOf(_self.selectList[_self.selectIndex]) == -1
        ) {
          // chooseList数组中没有这个值，就添加
          _self.chooseList.push(_self.selectList[_self.selectIndex]);
          _self.selectIndexList.push(index);
        } else {
          // chooseList数组中有这个值，就删除
          _self.chooseList = _self.chooseList.filter((item, index) => {
            return item != _self.selectList[_self.selectIndex];
          });
          _self.selectIndexList = _self.selectIndexList.filter(
            (item, index) => {
              return item != _self.selectIndex;
            }
          );
        }
      }
      _self.handleClickSelectShow();
    },
    // 删除选中列表中的值
    handleClickDelChoose(index) {
      var _self = this;
      _self.chooseList.splice(index, 1);
      _self.selectIndexList.splice(index, 1);
    }
  }
};
</script>
<style scoped>
/* select */
.select {
  width: 300px;
  height: 30px;
  background-color: #ffffff;
  text-align: left;
}
.select-title,
.select-option {
  background-color: #ffffff;
  padding: 0 30px 0 10px;
  line-height: 30px;
  box-sizing: border-box;
}
.select-title {
  position: relative;
  width: 300px;
  min-height: 30px;
  border: 1px solid #dddddd;
}
.select-title::after,
.select-title.active::after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border: 5px solid;
}
.select-title::after {
  transform: translate(0, -20%);
  border-color: #666666 transparent transparent transparent;
}
.select-title.active::after {
  transform: translate(0, -70%);
  border-color: transparent transparent #666666 transparent;
}
.select-box {
  max-height: 200px;
  border: 1px solid #dddddd;
  border-top: 0;
  font-size: 14px;
  box-sizing: border-box;
  overflow-y: auto;
}
.select-option {
  height: 30px;
}
.select-option:hover {
  background-color: #f5f5f5;
}
.select-option.active {
  background-color: #fff6e5;
}
.select-title-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.select-title-list-item {
  font-size: 12px;
  background-color: #f2f2f2;
  line-height: 20px;
  margin: 5px;
  padding: 5px;
}
.select-title-list-item span:nth-child(2) {
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: #666666;
  text-align: center;
  line-height: 15px;
  color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
}
</style>