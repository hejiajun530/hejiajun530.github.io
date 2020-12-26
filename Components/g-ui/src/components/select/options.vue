<template>
  <div class="select-option">
    <div
      v-if="!$parent.multiple"
      class="select-options-item"
      :class="value == $parent.value ? ' active' : ''"
    >{{value}}</div>
    <div
      v-else
      class="select-options-item"
      :class="$parent.value.indexOf(value) != -1 ? ' active' : ''"
    >{{value}}</div>
  </div>
</template>
<script>
import { clickOutSide } from "@/commons/directive.js";
export default {
  props: {
    value: {
      type: String
    }
  },
  data() {
    return {};
  },
  watch: {},
  created() {
    var _self = this;
    // console.log(_self.$parent);
  },
  mounted() {
    var _self = this;
  },
  methods: {}
};
</script>
<style scoped>
.select-option {
  width: 100%;
}
.select-options-item {
  width: 100%;
  height: 35px;
  line-height: 35px;
  border-bottom: 1px solid #dddddd;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  padding: 0 0 0 10px;
}
.select-options-item.active {
  background: pink;
}
</style>