<template>
  <div class="checkbox">
    <div
      class="checkbox-item"
      :class="id"
      v-for="(item, index) in checkboxGroup"
      :key="index"
      @click="handleClickChoosecheckbox(index)"
    >
      <div class="checkbox-item-img"><img :src="checkboxImg.checkbox"></div>
      <div class="checkbox-item-text">{{item}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["checkboxGroup", "id"],
  data() {
    return {
      checkboxIndexList: [],
      checkboxImg: {
        checkbox: require("./checkbox.png"),
        checkboxActive: require("./checkbox-active.png")
      }
    };
  },
  methods: {
    // 选择单选按钮
    handleClickChoosecheckbox(index) {
      var _self = this;
      var doms = document.querySelectorAll(`.${_self.id}.checkbox-item`);
      var imgs = document.querySelectorAll(
        `.${_self.id}.checkbox-item .checkbox-item-img img`
      );
      // 清空所有active类名
      for (let i = 0; i < doms.length; i++) {
        doms[i].classList.remove("active");
        imgs[i].src = _self.checkboxImg.checkbox;
        imgs[i].classList.remove("active");
      }
      if (_self.checkboxIndexList.indexOf(index) == -1) {
        // 数组里为空的添加
        _self.checkboxIndexList.push(index);
      } else {
        // 数组里有的删除
        _self.checkboxIndexList = _self.checkboxIndexList.filter(
          (item, idx) => {
            return item != index;
          }
        );
      }
      _self.checkboxIndexList.forEach((item, idx) => {
        doms[item].classList.add("active");
        imgs[item].src = _self.checkboxImg.checkboxActive;
        imgs[item].classList.add("active");
      });
      _self.$emit("g-checkboxIndex", _self.checkboxIndexList);
    }
  }
};
</script>
<style scoped>
* {
  display: inline-block;
}
.checkbox {
  display: flex;
  justify-content: flex-start;
}
.checkbox-item.active {
  color: #1296db;
}
.checkbox-item,
.checkbox-item-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5px;
  cursor: pointer;
}
.checkbox-item-img,
.checkbox-item-img img {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.checkbox-item-img img {
  border: 1px solid #666666;
}
.checkbox-item-img img.active {
  border: 1px solid #1296db;
}
</style>