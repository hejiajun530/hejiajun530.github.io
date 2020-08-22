<template>
  <div class="table-column">
    <div class="table-column-label">{{label}}</div>
    <div
      class="table-column-item"
      v-for="(item,index) in tableData"
      :key="index"
    >{{item[prop]}}</div>
  </div>
</template>
<script>
export default {
  props: ["label", "prop", "tableData"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.table-column {
  min-width: 100px;
}
.table-column-label,
.table-column-item {
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dedede;
  padding: 0 5px;
  box-sizing: border-box;
}
</style>