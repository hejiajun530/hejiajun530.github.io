<template>
  <div class="table-tyq">
    <slot></slot>
  </div>
</template>
<script>
import tableColumn from './tableColumn';
export default {
  props: ['data'],
  watch: {
    data() {
      // console.log(this.tableData);
      console.log('tableData-chage');
    }
  },
  data() {
    return {};
  },
  components: {
    'g-tableColumn': tableColumn
  }
};
</script>
<style>
.table-tyq {
  display: flex;
  justify-content: flex-start;
  /* background-color: #ffffff; */
  overflow-x: auto;
}
.table-tyq .table-column-item {
  height: 60px;
}
/* .table-tyq .table-column-item:nth-child(even) {
  background: #ffffff;
}
.table-tyq .table-column-item:nth-child(odd) {
  background: pink;
} */
</style>