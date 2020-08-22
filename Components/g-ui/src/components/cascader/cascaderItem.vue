<template>
  <div class="cascader-item">
    <div class="cascader-item-left">
      <div
        class="cascader-item-left-option"
        @click="select(item)"
        v-for="(item, index) in options"
        :key="index"
      >
        <span>{{item.label}}</span>
        <span v-if="item.children">&gt;</span>
      </div>
    </div>
    <div
      class="cascader-item-right"
      v-if="lists && lists.length"
    >
      <CascaderItem
        :options="lists"
        :selectedItems="selectedItems"
        :level="level + 1"
        @change="change"
      ></CascaderItem>
    </div>
  </div>
</template>
<script>
export default {
  name: "CascaderItem",
  props: ["options", "selectedItems", "level"],
  data() {
    return {};
  },
  computed: {
    lists() {
      return (
        this.selectedItems[this.level] &&
        this.selectedItems[this.level].children
      );
    }
  },
  methods: {
    select(item) {
      this.$emit("change", { level: this.level, item: item });
    },
    change(newValue) {
      this.$emit("change", newValue);
    }
  }
};
</script>
<style scoped>
.cascader-item {
  width: 200%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
}
.cascader-item-left {
  width: 300px;
  border: 1px solid #dedede;
  box-sizing: border-box;
  background-color: #ffffff;
}
.cascader-item-left-option {
  width: 300px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
}
.cascader-item-left-option:hover {
  background-color: #f5f5f5;
}
.cascader-item-left-option span:nth-child(1) {
  width: 260px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>