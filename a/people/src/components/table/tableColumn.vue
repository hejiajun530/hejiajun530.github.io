<template>
  <div class="table-column">
    <div class="table-column-label">{{label}}</div>
    <div
      class="table-column-item text-ellipsis"
      :style="'width: '+width+'px;'"
      v-for="(item,index) in $parent.data"
      :key="index"
    >
      <template>
        <!--  v-if="type" -->
        <slot :row="item"></slot>
      </template>
      <!-- <template v-else>
        {{item[prop]}}
      </template> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ['label', 'prop', 'type', 'width'], // "tableData",
  data() {
    return {
      max: 0,
      arr: []
    };
  },
  mounted() {
    var _self = this;
    // _self.$nextTick(() => {
    //   var doms = document.querySelectorAll(".table-column-item");
    //   var num = 0;
    //   for (let i = 0; i < doms.length; i++) {
    //     _self.arr.push(doms[i].clientHeight);
    //   }
    //   _self.getMax(_self.arr);
    // });
  },
  methods: {
    // 取两数之中最大值
    // getMax(arr) {
    //   var _self = this;
    //   arr.forEach((item, index) => {
    //     if (item > _self.max) {
    //       _self.max = item;
    //     }
    //   });
    //   var doms = document.querySelectorAll(".table-column-item");
    //   for (let i = 0; i < doms.length; i++) {
    //     doms[i].style.height = _self.max + 5 + "px";
    //   }
    //   // console.log(_self.max);
    // }
  }
};
</script>
<style scoped>
.table-column {
  min-width: 100px;
  text-align: left;
}
.table-column:last-child {
  flex: 1;
}
.table-column-label,
.table-column-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dedede;
  padding: 10px 10px 10px 5px;
  box-sizing: border-box;
}
.table-column-label {
  height: 50px;
}
</style>