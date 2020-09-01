<template>
  <div
    class="mobile"
    ref="mobile"
  >
    <input
      type="text"
      v-model.trim="nullChecking"
      @blur="handleBlurInputNullChecking"
      placeholder="空表单验证"
    >
    <input
      type="text"
      v-model="numberChecking"
      @input="handleBlurInputNubmerChecking"
      placeholder="只能输入数字后小数点后两位"
    >
    <div @click="handleCallPhone">移动WEB页面JS一键拨打号码咨询功能</div>
    <div
      v-for="item in testArr"
      :key="item.id"
      @click="handleClickGetArrIndex(item.id)"
    >{{item.name}}</div>
    <div
      v-show="goTopShow"
      class="goTop"
      @click="handleClickGoTop"
    >返回顶部</div>
    <div
      class="strong"
      @click="handleClickStrong"
    >缓存时效性</div>
    <button @click="handleClickCopy('复制11111')">复制</button>
    <button @click="handleClickCopy('复制22222')">复制</button>
    <button @click="handleClickCopy('复制33333')">复制</button>
    <button @click="handleClickCopy('复制55555')">复制</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nullChecking: "",
      numberChecking: "",
      callPhone: "15343263273",
      testArr: [
        { id: 1, name: "张三", age: 15 },
        { id: 2, name: "李四", age: 16 },
        { id: 3, name: "王五", age: 18 },
        { id: 5, name: "唐州", age: 18 }
      ],
      getArrIndex: "",
      goTopShow: false
    };
  },
  mounted() {
    // 因为监听是针对window的，所以增加监听后每个页面都会监听，只对某个页面进行监听的话需要在destroyed中将监听移除
    window.addEventListener("scroll", this.getScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.getScroll);
  },
  methods: {
    // 表单验证
    handleBlurInputNullChecking() {
      var _self = this;
      var regCn = /^[\u0391-\uFFE5]+$/; //只能时汉字
      var regEmail = /^[_0-9a-z-]+@([0-9a-z][0-9a-z-]+\.)+[a-z]{2,4}$/; //邮箱验证
      var regPhone = /^[1][3,4,5,7,8,9][0-9]{9}$/; // 手机号验证
      var regUrl = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/; //验证url地址
      var regIdenitiy = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //验证身份证号码
      if (!_self.nullChecking.trim()) {
        console.log("表单不能为空");
      }
      // if (!regIdenitiy.test(_self.nullChecking.trim())) {
      //   // console.log("不是汉字");
      //   // console.log("不是邮箱");
      //   // console.log("不是手机号");
      //   // console.log("不是url地址");
      //   // console.log("不是身份证");
      // }
    },
    // 只能输入数字后小数点后两位
    handleBlurInputNubmerChecking() {
      var _self = this;
      _self.numberChecking = _self.numberChecking.replace(/[^\d.]/g, "");
      _self.numberChecking = _self.numberChecking.replace(/\.{2,}/g, ".");
      _self.numberChecking = _self.numberChecking.replace(/^\./g, "");
      _self.numberChecking = _self.numberChecking.replace(
        /^(-)*(\d+)\.(\d\d).*$/,
        "$1$2.$3"
      );
      if (_self.numberChecking.indexOf(".") < 0 && _self.numberChecking != "") {
        //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
        _self.numberChecking = parseInt(_self.numberChecking);
      }
    },
    // 拨打电话
    handleCallPhone() {
      var _self = this;
      var a = document.createElement("a");
      a.href = "tel:" + _self.callPhone;
      a.click();
    },
    // 获取数组下标id
    handleClickGetArrIndex(id) {
      var _self = this;
      _self.testArr.filter((item, index) => {
        if (item.id == id) {
          _self.getArrIndex = index;
          return index;
        }
      });
      _self.$gMessage({
        title: _self.getArrIndex,
        duration: 2000,
        type: "success"
      });
      console.log(_self.getArrIndex);
    },
    // 监听页面滚动
    getScroll(e) {
      var _self = this;
      // console.log(document.documentElement.scrollTop);
      // console.log(window.pageYOffset);
      if (window.pageYOffset > 20) {
        _self.goTopShow = true;
      } else {
        _self.goTopShow = false;
      }
    },
    // 返回顶部
    handleClickGoTop() {
      var _self = this;
      let timer = null;
      var i = window.pageYOffset;
      timer = setInterval(function() {
        if (window.pageYOffset > 0) {
          // console.log("111");
          window.scrollTo(0, i);
        } else {
          clearInterval(timer);
          timer = null;
          console.log("回到顶部");
        }
        i -= 20;
      }, 10);
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
    },
    // 缓存时效性
    handleClickStrong() {
      var _self = this;
      _self.saveStrong("test", "存缓存时效性!", 1, "minutes");
    },
    // 缓存存储
    saveStrong(key, value, time, type) {
      var _self = this;
      if (type == "day") {
        time = time * 24 * 60 * 60 * 1000;
      } else if (type == "hours") {
        time = time * 60 * 60 * 1000;
      } else if (type == "minutes") {
        time = time * 60 * 1000;
      }
      localStorage.setItem(key, value);
      setTimeout(() => {
        localStorage.removeItem(key);
      }, time);
    },
    // 复制文字
    handleClickCopy(info) {
      var _self = this;
      var spanCreate = document.createElement("input");
      spanCreate.value = info;
      document.body.appendChild(spanCreate);
      spanCreate.select();
      document.execCommand("Copy");
      _self.$gMessage({
        title: "复制成功"
      });
      spanCreate.remove();
    }
  }
};
</script>
<style scoped>
.mobile {
  position: relative;
  height: 150%;
}
.goTop {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 80px;
  height: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  cursor: pointer;
}
.strong {
  width: 80px;
  height: 80px;
  line-height: 80px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  cursor: pointer;
}
</style>