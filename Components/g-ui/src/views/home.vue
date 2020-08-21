<template>
  <div class="home">
    <h1>首页</h1>
    <button @click="handleClickAlertShow">alert</button>
    <button @click="handleClickMessageShow">message</button>
    <button @click="handleClickLoadShow">loading</button>
    <button @click="handleClickPopShow">pop</button>
    <g-pop ref="pop"></g-pop>
    <g-warn
      type="success"
      title="成功提示"
    ></g-warn>
    <g-warn
      type="warnning"
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
    <g-advert
      type="column"
      :title="title"
      color="info"
    ></g-advert>
    <g-advert
      type="row"
      :title="title"
      color="success"
    ></g-advert>
    <div class="banner">
      <g-swiper
        :imglist="imglist"
        duration="5000"
      ></g-swiper>
    </div>
    <g-select
      :selectList="selectList"
      chooseIndex="0"
    ></g-select>
    <g-timeCount startTime="2020-10-19 00:00:00" endTime="2020-10-19 12:12:00"></g-timeCount>
  </div>
</template>

<script>
import pop from "../components/pop/index";
import warn from "../components/warn/index";
import advert from "../components/advert/index";
import swiper from "../components/swiper/index";
import select from "../components/select/index";
import timeCount from "../components/timeCount/index";
export default {
  data() {
    return {
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
        "请选择学校",
        "湖南长沙理工",
        "湖南财政",
        "中南科技林业",
        "湖南信息",
        "长沙民政",
        "湖南工商",
        "湖南农业大学"
      ],
      title: ["这是广告语111111", "这是广告语22222", "这是广告语33333"]
    };
  },
  components: {
    "g-pop": pop,
    "g-warn": warn,
    "g-advert": advert,
    "g-swiper": swiper,
    "g-select": select,
    "g-timeCount": timeCount
  },
  methods: {
    // 显示alert
    handleClickAlertShow() {
      var _self = this;
      _self.$gAlert({
        title: "标题",
        msg: "这是一段弹出框内容!",
        btn: {
          confirmVal: "确1定",
          cancelVal: "取1消"
        },
        success: function(res) {
          console.log(res);
        },
        err: function(err) {
          console.log(err);
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
      let title = "这是标题";
      let content = "这是气泡提示框内容";
      _self.$refs.pop.handleClickPopTop(title, content, e);
    }
  }
};
</script>

<style scoped>
.home {
  background: #dddddd;
}
.banner {
  width: 600px;
  height: 300px;
}
</style>