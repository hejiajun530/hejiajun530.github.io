<template>
  <div class="home">
    <div class="home-head">
      <canvas
        id="canvasTime"
        ref="canvasTime"
      >当前浏览器不支持canvas，请更换浏览器后再试</canvas>
      <div
        class="home-head-weather d-flex flex-column jc-around ai-start"
        v-if="locationFlag == 'success'"
      >
        <div class="home-head-weather-top d-flex jc-start ai-end">
          <div class="home-head-weather-top-temperature">{{weatherData.temperature}}&#8451;</div>
          <div class="home-head-weather-top-city">{{weatherData.city}}</div>
        </div>
        <div class="home-head-weather-bottom d-flex ai-end">
          <div class="home-head-weather-bottom-weather">{{weatherData.weather}}</div>
          <div class="home-head-weather-bottom-windpower d-flex">
            <div>风力 {{weatherData.windpower}}</div>
            <div>湿度 {{weatherData.humidity}}</div>
          </div>
        </div>
        <!-- {{tempdata}}
        {{weatherData}}
        {{addressData}} -->
      </div>
      <div
        class="home-head-weather"
        v-if="locationFlag == 'error'"
      >定位失败</div>
      <div
        class="home-head-weather"
        v-if="locationFlag == 'wait'"
      >定位中...</div>
      <div
        class="home-head-weather"
        v-if="locationFlag == 'addressError'"
      >该地址不存在</div>
      <div class="home-head-search d-flex ai-center">
        <input
          type="text"
          v-model="citySearch"
          class="text-center"
          placeholder="输入城市"
        >
        <button @click="getLocationWeather(citySearch)">确定</button>
      </div>
    </div>
    <div class="home-menu-mask"></div>
    <div
      class="home-menu"
      ref="homeMenu"
    >
      <div class="home-menu-list d-flex jc-start ai-center w">
        <div
          class="home-menu-list-item text-center pointSB text-ellipsis"
          :class="$route.path == item.url ? 'active' : ''"
          v-for="(item, index) in menuList"
          :key="index"
          @click="handleClickMenu(index, item.url, $event)"
          @mouseenter="handleMouseEnterAnimate(index, $event)"
          @mouseleave="handleMouseLeaveAnimate(index, $event)"
        >{{item.name}}</div>
        <div
          class="home-menu-bk positionTopLeft"
          ref="homeBk"
        ></div>
        <div class="home-menu-login positionTopRight pointSB">
          <img
            :src="tyqUser.avator"
            @click="loginFlag = !loginFlag"
            v-if="tyqUser && tyqUser.avator"
          >
          <img
            v-else
            src="../assets/logo.png"
            @click="loginFlag = !loginFlag"
          >
          <div
            class="home-menu-login-box"
            v-show="loginFlag"
          >
            <div
              class="home-menu-login-box-loginout text-ellipsis"
              @click="handleClickLoginOut"
            >退出登录</div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-box w">
      <div
        @click="$router.push('/login')"
        style="width: 200px;height: 30px;background: #E7753A;margin: 10px auto;line-height: 30px;color: #ffffff;"
      >登录</div>
      <div
        v-if="tyqUser && tyqToken"
        style="height: 50px;background: #E7753A;"
      >已登录</div>
      <div
        v-else
        style="height: 50px;background: #E7753A;"
      >未登录</div>
      <div
        class="home-box-swiperpc"
        v-if="!phoneFlag"
      >
        <g-swiperAnimate
          :imglist="swiperAnimaImg"
          :configs="configs"
        ></g-swiperAnimate>
      </div>
      <div
        class="home-box-swiperphone"
        v-else
      >
        <g-swiper
          :imglist="swiperAnimaImg"
          duration="5000"
        ></g-swiper>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import swiperAnimate from '@/components/swiper/swiperAnimation.vue';
import swiper from '@/components/swiper/index.vue';
import mixin from '../mixins';
export default {
  mixins: [mixin],
  components: {
    'g-swiperAnimate': swiperAnimate,
    'g-swiper': swiper
  },
  data() {
    return {
      loginFlag: false,
      // 保存 天气接口获取的城市名称，同时搜索时使用
      citySearch: '',
      // 菜单数组
      menuList: [
        {
          name: '首页',
          url: '/home/index'
        },
        {
          name: '心情随笔',
          url: '/home/mood'
        },
        {
          name: '过往故事',
          url: '/home/story'
        },
        {
          name: '技术分享',
          url: '/home/share'
        },
        {
          name: 'Blog留言',
          url: '/home/liuyan'
        },
        {
          name: '关于我',
          url: '/home/about'
        },
        {
          name: 'Me',
          url: '/me'
        }
      ],
      // 数字 canvas  json数组
      digit: [
        [
          [0, 0, 1, 1, 1, 0, 0],
          [0, 1, 1, 0, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 0, 1, 1, 0],
          [0, 0, 1, 1, 1, 0, 0]
        ], //0
        [
          [0, 0, 0, 1, 1, 0, 0],
          [0, 1, 1, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [1, 1, 1, 1, 1, 1, 1]
        ], //1
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 1, 1, 1, 1, 1]
        ], //2
        [
          [1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //3
        [
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 0],
          [0, 0, 1, 1, 1, 1, 0],
          [0, 1, 1, 0, 1, 1, 0],
          [1, 1, 0, 0, 1, 1, 0],
          [1, 1, 1, 1, 1, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 1, 1]
        ], //4
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1, 1, 0],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //5
        [
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 1, 1, 0, 0, 0, 0],
          [1, 1, 0, 0, 0, 0, 0],
          [1, 1, 0, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //6
        [
          [1, 1, 1, 1, 1, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0],
          [0, 0, 1, 1, 0, 0, 0]
        ], //7
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 1, 1, 0]
        ], //8
        [
          [0, 1, 1, 1, 1, 1, 0],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [1, 1, 0, 0, 0, 1, 1],
          [0, 1, 1, 1, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 0, 1, 1],
          [0, 0, 0, 0, 1, 1, 0],
          [0, 0, 0, 1, 1, 0, 0],
          [0, 1, 1, 0, 0, 0, 0]
        ], //9
        [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 0, 0, 0]
        ] //:
      ],
      // 计时器颜色
      colorArray: ['#fff'],
      canvasTimer: null,
      // 天气数据
      weatherData: '',
      // 地址信息
      addressData: '',
      // 临时数据
      tempdata: '',
      // 判断定位是否成功
      locationFlag: 'wait', // wait 定位中... success 定位成功，显示天气  error 定位失败 addressError 地址不存在
      // animationTime: null
      // swiper
      configs: [
        {
          width: 350,
          height: 100,
          top: 0,
          left: -50,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 2
        }, //0
        {
          width: 350,
          height: 250,
          top: 50,
          left: -100,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(45deg)',
          zIndex: 3
        }, //1
        {
          width: 350,
          height: 300,
          top: 25,
          left: 120,
          opacity: 1,
          transform: 'translate(-12.5%, 0) rotateY(0)',
          zIndex: 4
        }, //2
        {
          width: 350,
          height: 250,
          top: 50,
          left: 250,
          opacity: 0.8,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 3
        }, //3
        {
          width: 350,
          height: 100,
          top: 0,
          left: 450,
          opacity: 0,
          transform: 'translate(-12.5%, 0) rotateY(-45deg)',
          zIndex: 2
        } //4
      ],
      swiperAnimaImg: [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2646629351,1830923198&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4184278089,1373760144&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1294082173,3333931346&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1419817777,3647793771&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1618453098,2599275984&fm=26&gp=0.jpg'
      ]
    };
  },
  methods: {
    // 选择菜单
    handleClickMenu(index, url, e) {
      var _self = this;
      _self.animate(_self.$refs.homeBk, _self.handleGetArrIndex(url));
      // 路由跳转
      _self.$router.push(url);
    },
    // 获取路由地址在数组的下标
    handleGetArrIndex(path) {
      var _self = this;
      return _self.menuList.map(item => item.url).indexOf(path);
    },
    // 鼠标移入事件 菜单
    handleMouseEnterAnimate(index, e) {
      var _self = this;
      _self.animate(_self.$refs.homeBk, index);
    },
    // 鼠标移出事件 菜单
    handleMouseLeaveAnimate(index, e) {
      var _self = this;
      _self.animate(
        _self.$refs.homeBk,
        _self.handleGetArrIndex(_self.$route.path)
      );
    },
    // canvas 时间
    handleCanvasTime() {
      var _self = this;
      const canvas = _self.$refs.canvasTime;
      let ctx = canvas.getContext('2d');
      // var H = 30,
      //   W = 200;
      canvas.width = canvas.scrollWidth;
      canvas.height = canvas.scrollHeight;
      var kx = canvas.width < 400 ? 9 : 13;
      /*获取时间数据*/
      var temp = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
      // console.log(temp);
      var data = [];
      //存储时间数字，由十位小时、个位小时、冒号、十位分钟、个位分钟、冒号、十位秒钟、个位秒钟这7个数字组成
      data.push(temp[1], temp[2], 10, temp[3], temp[4], 10, temp[5], temp[6]);
      // console.log(data);
      for (let i = 0; i <= temp.length; i++) {
        _self.handleOneNum(canvas, ctx, i, data[i], kx);
        // _self.addBalls(i, data[i]);
      }
    },
    // canvas 单个数字
    handleOneNum(canvas, ctx, index, num, kx) {
      var _self = this;
      var R = canvas.height / 20 - 1;
      for (let i = 0; i < _self.digit[num].length; i++) {
        for (let j = 0; j < _self.digit[num][i].length; j++) {
          if (_self.digit[num][i][j] == 1) {
            // 开始绘制
            ctx.beginPath();
            ctx.fillStyle =
              _self.colorArray[
                Math.floor(Math.random() * _self.colorArray.length)
              ];
            ctx.arc(
              kx * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
              i * 2 * (R + 1) + (R + 1),
              R < 1 ? 1 : 2.3,
              0,
              2 * Math.PI
            );
            // ctx.arc(
            //   13 * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
            //   i * 2 * (R + 1) + (R + 1),
            //   R < 1 ? 0.9 : R,
            //   0,
            //   2 * Math.PI
            // );
            // 结束绘制
            ctx.closePath();
            ctx.fill();
          }
        }
      }
    },
    // 动画函数
    animate(obj, target, fn) {
      var _self = this;
      target = target * _self.$refs.homeBk.offsetWidth;
      clearInterval(obj.timer);
      obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == Math.abs(target)) {
          clearInterval(obj.timer);
          fn && fn();
        }
        obj.style.left = obj.offsetLeft + step + 'px';
      }, 15);
    },
    // 高德地图 获取地址
    getLocationPC() {
      var _self = this;
      _self.$http
        .get(
          `https://restapi.amap.com/v3/ip?ip=${localStorage.getItem(
            'tyqIp'
          )}&key=${localStorage.getItem('tyqKKK')}`
        )
        .then(res => {
          if (res.data.status == '1') {
            _self.getLocationWeather(res.data.adcode);
          } else {
            _self.locationFlag = 'error';
          }
          _self.addressData = res.data;
          console.log(res, 'addressData');
        });
    },
    // 根据城市获取实时天气
    getLocationWeather(city) {
      var _self = this;
      _self.$http
        .get(
          `https://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=${localStorage.getItem(
            'tyqKKK'
          )}&extensions=base`
        )
        .then(result => {
          if (result.data.status == '1') {
            _self.locationFlag = 'success';
            if (result.data.count == 0) {
              _self.locationFlag = 'addressError';
            }
          } else {
            _self.locationFlag = 'error';
            return false;
          }
          _self.weatherData = result.data.lives[0];
          _self.citySearch = _self.weatherData.city;
          console.log(result, 'weatherData');
          // _self.tempdata =
          //   JSON.stringify(_self.weatherData) + '----getLocationPhone-weather';
        });
    },
    // 移动端通过高德地图获取 地址
    getLocationPhone() {
      const self = this;
      var geolocation;
      AMap.plugin('AMap.Geolocation', function() {
        geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：无穷大
          maximumAge: 0, //定位结果缓存0毫秒，默认：0
          convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true, //显示定位按钮，默认：true
          buttonPosition: 'LB', //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });

        // 获取当前位置信息
        geolocation.getCurrentPosition();
        // 监听获取位置信息成功的回调函数
        AMap.event.addListener(geolocation, 'complete', onComplete);
        // 监听获取位置信息错误的回调函数
        AMap.event.addListener(geolocation, 'error', onError);

        function onComplete(data) {
          // data是具体的定位信息
          console.log('定位成功信息：', data);
          // self.tempdata =
          //   JSON.stringify(data.position.lng) +
          //   JSON.stringify(data.position.lat) +
          //   '----getLocationPhone-success';
          self.$http
            .get(
              `https://restapi.amap.com/v3/geocode/regeo?key=${localStorage.getItem(
                'tyqKKK'
              )}&location=${data.position.lng + ',' + data.position.lat}`
            )
            .then(res => {
              // self.tempdata =
              // JSON.stringify(res.data.regeocode.addressComponent.city) +
              // '----getLocationPhone-success--res';
              // {"data":{"status":"1","regeocode":{"addressComponent":{"city":[],"province":"北京市","adcode":"110105","district":"朝阳区","towncode":"110105026000","streetNumber":{"number":"6号","location":"116.482005,39.990056","direction":"东南","distance":"63.2126","street":"阜通东大街"},"country":"中国","township":"望京街道","businessAreas":[{"location":"116.470293,39.996171","name":"望京","id":"110105"},{"location":"116.494356,39.971563","name":"酒仙桥","id":"110105"},{"location":"116.492891,39.981321","name":"大山子","id":"110105"}],"building":{"name":"方恒国际中心B座","type":"商务住宅;楼宇;商务写字楼"},"neighborhood":{"name":"方恒国际中心","type":"商务住宅;楼宇;商住两用楼宇"},"citycode":"010"},"formatted_address":"北京市朝阳区望京街道方恒国际中心B座"},"info":"OK","infocode":"10000"},"status":200,"statusText":"OK","headers":{"content-type":"application/json;charset=utf-8"},"config":{"url":"https://restapi.amap.com/v3/geocode/regeo?key=a854e5e05754704fd908693f96e745fe&location=116.481488,39.990464","method":"get","headers":{"Accept":"application/json, text/plain, */*"},"baseURL":"http://localhost:3000/web/api","transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1},"request":{}}
              if (res.data.status == '1') {
                self.getLocationWeather(
                  res.data.regeocode.addressComponent.city
                );
              } else {
                self.locationFlag = 'error';
              }
            });
        }

        function onError(data) {
          // 定位出错
          console.log('定位失败错误：', data);
          // self.tempdata = JSON.stringify(data) + '----getLocationPhone-error';
          self.locationFlag = 'error';
        }
      });
    },
    // 退出登录
    handleClickLoginOut() {
      var _self = this;
      localStorage.removeItem('tyqUser');
      localStorage.removeItem('tyqToken');
      _self.$router.push('/login');
    }
  },
  created() {
    var _self = this;
    // console.log(_self.tyqUser, 'parent-tyqUser');
    // console.log(_self.tyqToken, 'parent-tyqToken');
  },
  mounted() {
    var _self = this;
    // 右上角时间
    _self.handleCanvasTime();
    _self.canvasTimer = setInterval(function() {
      _self.handleCanvasTime();
    }, 1000);
    // bk位置 根据路由地址 改变
    let index = _self.handleGetArrIndex(_self.$route.path);
    _self.$refs.homeBk.style.left =
      index * _self.$refs.homeBk.offsetWidth + 'px';
    // console.log(localStorage.getItem('tyqIp'), 'ip');
    // console.log(localStorage.getItem('tyqcityname'), 'cityname');
    // console.log(localStorage.getItem('tyqKKK'), 'tyqKKK');
    // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
    _self.$nextTick(function() {
      if (_self.phoneFlag) {
        _self.getLocationPhone();
      } else {
        _self.getLocationPC();
      }
    });
    console.log(_self.$refs.homeMenu.offsetTop, 'top');
    let menuTop = _self.$refs.homeMenu.offsetTop;
    // 因为监听是针对window的，所以增加监听后每个页面都会监听，只对某个页面进行监听的话需要在destroyed中将监听移除
    window.addEventListener('scroll', function() {
      // 页面往下滚动超过 xx 就显示返回顶部盒子
      if (window.pageYOffset > menuTop) {
        _self.$refs.homeMenu.style.position = 'fixed';
        _self.$refs.homeMenu.style.top = '0px';
      } else {
        _self.$refs.homeMenu.style.position = 'absolute';
        _self.$refs.homeMenu.style.top = menuTop + 'px';
      }
    });
  },
  beforeDestroy() {
    var _self = this;
    _self.canvasTimer = null;
    _self.handleCanvasTime = function() {};
  }
};
</script>

<style lang="scss" scoped>
.home-head {
  width: 100%;
  height: 12.5rem;
  background: url('../assets/img/homehead.jpg') no-repeat center 61%;
  background-size: 100%;
  .home-head-weather {
    position: absolute;
    top: 0;
    left: 0;
    color: #ffffff;
    max-width: 18.75rem;
    height: 6.25rem;
    padding: 0 0 0 0.625rem;
    .home-head-weather-top-temperature {
      font-size: 3.75rem;
    }
    .home-head-weather-top-city,
    .home-head-weather-bottom-weather {
      position: relative;
      font-size: 1.75rem;
      padding: 0 1.25rem 0 0;
    }
    .home-head-weather-top-city {
      padding-bottom: 0.5rem;
      padding: 0 0 0.4rem 0.625rem;
    }
    .home-head-weather-bottom-weather::after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0.125rem;
      right: 0.3125rem;
      height: 45%;
      border-right: 0.1875rem solid #ffffff;
    }
    .home-head-weather-bottom-windpower {
      font-size: 1.125rem;
      div {
        padding: 0 0.3125rem;
      }
    }
  }
  .home-head-search {
    position: absolute;
    top: 7.3rem;
    left: 0.625rem;
    width: 11rem;
    input {
      width: 7rem;
      height: 2.5rem;
      background: transparent;
      color: #ffffff;
      border-radius: 0.625rem;
      border: 0.0625rem solid #f1f1fe;
      margin-right: 0.625rem;
    }
    button {
      font-size: 1rem;
      width: 3.5rem;
      height: 2.5rem;
      background: #ffffff;
      border-radius: 0.625rem;
    }
  }
  #canvasTime {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    width: 405px;
    height: 60px;
  }
}
.home-menu-mask {
  height: 3.125rem;
}
.home-menu {
  position: absolute;
  top: 12.5rem;
  width: 100%;
  height: 3.125rem;
  background: #bfab86;
  .home-menu-list {
    position: relative;
    height: 100%;
    .home-menu-list-item {
      width: 6.25rem;
      height: 100%;
      font-size: 1.125rem;
      color: #ffffff;
      line-height: 3.125rem;
      transition: all 0.3s;
      &:hover,
      &.active {
        color: #222222;
      }
      z-index: 1;
    }
    .home-menu-bk {
      width: 6.25rem;
      height: 100%;
      background: #fffbf0;
      border-top: 0.1875rem solid #f77825;
      z-index: 0;
    }
    .home-menu-login {
      width: 5.625rem;
      height: 100%;
      img {
        height: 100%;
        border-radius: 50%;
      }
      .home-menu-login-box {
        position: absolute;
        top: 3.125rem;
        left: 0;
        width: 100%;
        background: #000000;
        color: #ffffff;
        div {
          width: 5.625rem;
          height: 1.875rem;
          line-height: 1.875rem;
        }
      }
    }
  }
}
.home-box {
  .home-box-swiperpc {
    width: 500px;
    height: 350px;
  }
  .home-box-swiperphone {
    width: 31.25rem;
    height: 21.875rem;
  }
}
</style>