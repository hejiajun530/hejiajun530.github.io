<template>
  <div class="home-alert">
    <!-- select 下拉选择框
    title/id/chooseIndex必填 chooseIndex 0 单选  1 多选
    @g-selectValue是获取选择的值的方法 -->
    <g-select
      title="请选择学校"
      id="school"
      :selectList="selectList"
      chooseIndex="0"
      @g-selectValue="handleGetSelectValue"
    ></g-select>
    <g-select
      title="请选择领域"
      id="domain"
      :selectList="selectList1"
      chooseIndex="1"
      @g-selectValue="handleGetSelectValue"
    ></g-select>
  </div>
</template>
<script>
import select from "@/components/select/index";
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
      selectList1: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"]
    };
  },
  components: {
    "g-select": select
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