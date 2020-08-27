<template>
  <div class="home-alert">
    <!-- table 表格 -->
    <g-table :data="tableData">
      <g-tableColumn
        label="日期"
        prop="date"
        width="300"
      ></g-tableColumn>
      <g-tableColumn
        label="姓名"
        width="200"
        prop="name"
      ></g-tableColumn>
      <g-tableColumn
        label="地址"
        prop="address"
      ></g-tableColumn>
      <g-tableColumn
        label="操作"
        type="make"
      >
        <template slot-scope="scope">
          <button @click="handleClickDelTabelData(scope.row)">删除</button>
        </template>
      </g-tableColumn>
    </g-table>
  </div>
</template>
<script>
import table from "@/components/table/index";
import tableColumn from "@/components/table/tableColumn";
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "小唐",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "小文",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 4,
          date: "2016-05-03",
          name: "唐州",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  components: {
    "g-table": table,
    "g-tableColumn": tableColumn
  },
  methods: {
    // 删除表格数据
    handleClickDelTabelData(row) {
      var _self = this;
      // console.log(row);
      _self.$gAlert({
        title: "提示",
        content: `您确定要删除'${row.name}'吗?`,
        success: res => {
          if (res == "confirm") {
            console.log(res);
            _self.tableData = _self.tableData.filter((item, index) => {
              return item.id != row.id;
            });
            console.log(_self.tableData);
          }
        }
      });
    }
  }
};
</script>