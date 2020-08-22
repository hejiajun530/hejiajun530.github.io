<template>
  <div class="table">
    <slot></slot>
  </div>
</template>
<script>
import tableColumn from "./tableColumn";
export default {
  props: ["tableData"],
  data() {
    return {};
  },
  components: {
    "g-tableColumn": tableColumn
  }
};
</script>
<style scoped>
.table {
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
}
</style>