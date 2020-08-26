<template>
  <div class="home">
    <h1>首页</h1>
    <!-- alert 弹出框 -->
    <button @click="handleClickAlertShow">alert</button>
    <!-- message 消息提示 -->
    <button @click="handleClickMessageShow">message</button>
    <!-- load 加载动画 -->
    <button @click="handleClickLoadShow">loading</button>
    <!-- 气泡提示 -->
    <g-pop
      ref="pop"
      title="标题1"
      content="内容1"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
    <g-pop
      ref="pop"
      title="标题2"
      content="内容2"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
    <g-pop
      ref="pop"
      title="标题3"
      content="内容3"
    >
      <button @click="handleClickPopShow">pop</button>
    </g-pop>
    <!-- warn 提示 -->
    <g-warn
      type="success"
      title="成功提示"
    ></g-warn>
    <g-warn
      type="warn"
      title="警告提示"
    ></g-warn>
    <g-warn
      type="info"
      title="信息提示"
    ></g-warn>
    <g-warn
      type="error"
      title="错误提示"
    ></g-warn>
    <!-- advert 广告条 -->
    <g-advert
      direction="column"
      :title="title"
      type="info"
    ></g-advert>
    <g-advert
      direction="row"
      :title="title"
      type="success"
    ></g-advert>
    <!-- 轮播图 -->
    <div class="banner">
      <g-swiper
        :imglist="imglist"
        duration="5000"
      ></g-swiper>
    </div>
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
    <!-- timeCount 倒计时
    nowTime 为空时，自动取现在的时间 -->
    <g-timeCount
      :nowTime="nowTime"
      :targetTime="targetTime"
    ></g-timeCount>
    <g-timeCount
      nowTime="2020-10-19 00:00:00"
      targetTime="2020-10-19 13:13:15"
    ></g-timeCount>
    <g-timeCount targetTime="2020-08-30 13:13:15"></g-timeCount>
    <!-- 日历 -->
    <g-rili @g-riliStartTime="handleGetTime"></g-rili>
    <!-- 星级评分
    type 0 可以选择 1 只用于显示，不可修改 -->
    <g-star
      :type="0"
      @g-starIndex="handleGetStarIndex"
    ></g-star>
    <g-star
      :type="1"
      :showIndex="3.2"
    ></g-star>
    <!-- 计数器 -->
    <g-count @g-countNum="handleGetCountNum"></g-count>
    <!-- upload 上传图片
    type=0时 @g-uploadList 只有一个参数
    type=2时 @g-uploadList 有两个参数 -->
    <g-upload
      :type="0"
      :multiple="true"
      @g-uploadList="handleGetUploadList"
    ></g-upload>
    <g-upload
      :type="2"
      :multiple="false"
      @g-uploadList="handleGetUploadList"
    ></g-upload>
    <!-- dateSelect 日期选择器 -->
    <g-dateSelect @g-dateSelectTime="handleGetDateSelectTime"></g-dateSelect>
    <!-- cascader 级联 -->
    <g-cascader
      :options="options"
      @g-cascaderValue="handleGetCascaderValue"
    ></g-cascader>
    <!-- 单选框 -->
    <g-radio
      :radioGroup="radioGroup"
      @g-radioIndex="handleGetRadioIndex"
    ></g-radio>
    <!-- 多选框g-checkbox -->
    <g-checkbox
      :checkboxGroup="checkboxGroup"
      id="domain"
      @g-checkboxIndex="handleGetCheckboxIndex"
    ></g-checkbox>
    <!-- switch 开关组件 -->
    <g-switch @g-switchFlag="handleGetSwitchFlag"></g-switch>
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
import pop from "@/components/pop/index";
import warn from "@/components/warn/index";
import advert from "@/components/advert/index";
import swiper from "@/components/swiper/index";
import select from "@/components/select/index";
import timeCount from "@/components/timeCount/index";
import rili from "@/components/rili/index";
import star from "@/components/star/index";
import count from "@/components/count/index";
import upload from "@/components/upload/index";
import dateSelect from "@/components/dateSelect/index";
import cascader from "@/components/cascader/index";
import radio from "@/components/radio/index";
import checkbox from "@/components/checkbox/index";
import gswitch from "@/components/switch/index";
import table from "@/components/table/index";
import tableColumn from "@/components/table/tableColumn";
export default {
  data() {
    return {
      nowTime: new Date(),
      targetTime: "2020-10-19 09:33:15",
      gAlertShow: false,
      imglist: [
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg"
      ],
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
      title: [
        "这是广告语111111",
        "这是广告语22222",
        "这是广告语33333",
        "这是广告语55555"
      ],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "cascader",
                  label: "cascader 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      radioGroup: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"],
      checkboxGroup: ["软件技术", "会计专业", "英语专业", "历史专业", "教师"],
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
    "g-pop": pop,
    "g-warn": warn,
    "g-advert": advert,
    "g-swiper": swiper,
    "g-select": select,
    "g-timeCount": timeCount,
    "g-rili": rili,
    "g-star": star,
    "g-count": count,
    "g-upload": upload,
    "g-dateSelect": dateSelect,
    "g-cascader": cascader,
    "g-radio": radio,
    "g-checkbox": checkbox,
    "g-switch": gswitch,
    "g-table": table,
    "g-tableColumn": tableColumn
  },
  mounted() {
    var _self = this;
    // setInterval(function() {
    //   _self.startTime = new Date().getTime();
    // }, 1000);
  },
  methods: {
    // 显示alert
    handleClickAlertShow() {
      var _self = this;
      _self.$gAlert({
        title: "标题",
        content: "这是一段弹出框内容!",
        btn: {
          confirmVal: "确1定",
          cancelVal: "取1消"
        },
        success: function(res) {
          console.log(res);
        }
      });
      // console.log(test);
    },
    // 显示message
    handleClickMessageShow() {
      var _self = this;
      _self.$gMessage({
        title: "这是一个消息弹出框内容!",
        duration: 2000,
        type: "success"
      });
    },
    // 显示loading
    handleClickLoadShow() {
      var _self = this;
      _self.$gLoad(true);
      setTimeout(function() {
        _self.$gLoad(false);
      }, 5000);
    },
    // 显示pop
    handleClickPopShow(e) {
      var _self = this;
      _self.$refs.pop.handleClickPopTop(e);
    },
    // 获取select下拉框组件选择的值 数组形式
    handleGetSelectValue(value) {
      var _self = this;
      console.log(value);
    },
    // 获取日历的 日期
    handleGetTime(startTime, endTime) {
      var _self = this;
      console.log(startTime, endTime);
    },
    // 获取星级评分的 值
    handleGetStarIndex(num) {
      var _self = this;
      console.log(num, "获取星级评分的值");
    },
    // 获取计数器的 值
    handleGetCountNum(num) {
      var _self = this;
      console.log(num, "获取计数器的值");
    },
    // 获取upload的数组
    handleGetUploadList(list, name) {
      var _self = this;
      console.log(list, name);
    },
    // 获取日期选择器的 日期
    handleGetDateSelectTime(startTime, endTime) {
      var _self = this;
      console.log(startTime, endTime);
    },
    // 获取级联的值
    handleGetCascaderValue(value) {
      var _self = this;
      console.log(value, "获取级联的值");
    },
    // 获取单选按钮的值
    handleGetRadioIndex(value) {
      var _self = this;
      console.log(value, _self.radioGroup[value]);
    },
    // 获取多选按钮的值
    handleGetCheckboxIndex(value) {
      var _self = this;
      console.log(value);
    },
    // 获取switch开关的值
    handleGetSwitchFlag(value) {
      var _self = this;
      console.log(value);
    },
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

<style scoped>
.home {
  background: #dddddd;
  padding: 50px 0 0 0;
}
.banner {
  width: 600px;
  height: 300px;
}
button {
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  cursor: pointer;
}
</style>