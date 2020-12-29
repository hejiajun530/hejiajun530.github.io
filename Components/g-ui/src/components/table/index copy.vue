<template>
  <table class="table-tyq">
    <slot></slot>
  </table>
</template>
<script>
import tableColumn from "./tableColumn";
export default {
  props: ["data"],
  watch: {
    data() {
      // console.log(this.tableData);
      console.log("tableData-chage");
    }
  },
  data() {
    return {};
  },
  components: {
    "g-tableColumn": tableColumn
  }
};
</script>
<style>
.table-tyq {
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  overflow-x: auto;
}
.table-tyq .table-column tr {
  height: 60px;
}
.table-tyq .table-column tr td {
  height: 100%;
}
.table-tyq .table-column td:nth-child(even) {
  background: #ffffff;
}
.table-tyq .table-column td:nth-child(odd) {
  background: pink;
}
</style>