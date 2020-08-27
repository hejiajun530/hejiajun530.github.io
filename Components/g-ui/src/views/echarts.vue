<template>
  <div class="home-alert">
    <!-- echarts 图表 -->
    <div class="echarts-content">
      <g-echarts
        type="bar"
        :data="barData"
      ></g-echarts>
    </div>
    <div class="echarts-content">
      <g-echarts
        type="barNew"
        :data="barNewData"
      ></g-echarts>
    </div>
    <div class="echarts-content">
      <g-echarts
        type="line"
        :data="lineData"
      ></g-echarts>
    </div>
    <div class="echarts-content">
      <g-echarts type="lineNew"></g-echarts>
    </div>
    <div class="echarts-content">
      <g-echarts
        type="pie"
        :data="pieData"
      ></g-echarts>
    </div>
    <div class="echarts-content">
      <g-echarts
        type="pieNew"
        :data="pieNewData"
      ></g-echarts>
    </div>
  </div>
</template>
<script>
import echarts from "@/components/echarts/index";
export default {
  data() {
    return {
      barData: {
        name: [
          "旅游行业",
          "教育培训",
          "游戏行业",
          "医疗行业",
          "电商行业",
          "社交行业",
          "金融行业"
        ],
        value: [200, 300, 300, 900, 1300, 1200, 600]
      },
      barNewData: {
        name: ["HTML5", "CSS3", "JavaScrip", "VUE", "NODE"],
        value: [702, 350, 610, 793, 664],
        baifenbi: [70, 34, 60, 78, 69],
        all: [100, 100, 100, 100, 100]
      },
      lineData: {
        yearData: [
          {
            data: [
              // 两个数组是因为有两条线
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
          }
        ],
        value: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月"
        ]
      },
      pieData: [
        { value: 1, name: "0岁以下" },
        { value: 4, name: "20-29岁" },
        { value: 2, name: "30-39岁" },
        { value: 2, name: "40-49岁" },
        { value: 1, name: "50岁以上" }
      ],
      pieNewData: [
        { value: 20, name: "云南" },
        { value: 26, name: "北京" },
        { value: 24, name: "山东" },
        { value: 25, name: "河北" },
        { value: 20, name: "江苏" },
        { value: 25, name: "浙江" },
        { value: 30, name: "四川" },
        { value: 42, name: "湖北" }
      ]
    };
  },
  components: {
    "g-echarts": echarts
  },
  methods: {}
};
</script>
<style scoped>
.echarts-content {
  width: 450px;
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  margin: 10px 0;
}
</style>