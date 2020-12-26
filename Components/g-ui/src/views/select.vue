<template>
  <div class="home-alert">
    <!-- select 下拉选择框 -->
    <g-select
      v-model="value1"
      placeholder="请选择专业单选"
    >
      <g-options
        v-for="item in selectList1"
        :key="item.id"
        :value="item"
      ></g-options>
    </g-select>
    <g-select
      v-model="value2"
      placeholder="请选择专业多选"
      multiple
    >
      <g-options
        v-for="item in selectList1"
        :key="item.id"
        :value="item"
      ></g-options>
    </g-select>
  </div>
</template>
<script>
import select from "@/components/select/index";
import options from "@/components/select/options";
export default {
  data() {
    return {
      // 下拉框数据
      selectList: [
        "湖南长沙理工",
        "湖南财政",
        "中南科技林业",
        "湖南信息",
        "长沙民政",
        "湖南工商",
        "湖南农业大学"
      ],
      selectList1: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"],
      value1: "历史专业",
      value2: ["软件技术", "会计专业", "历史专业"]
    };
  },
  components: {
    "g-select": select,
    "g-options": options
  },
  methods: {
    // 获取select下拉框组件选择的值 数组形式
    handleGetSelectValue(value) {
      var _self = this;
      console.log(value);
    }
  }
};
</script>