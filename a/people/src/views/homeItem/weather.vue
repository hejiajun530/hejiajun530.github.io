<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      // 保存 天气接口获取的城市名称，同时搜索时使用
      citySearch: '',
      // 天气数据
      weatherData: '',
      // 地址信息
      addressData: '',
      // 临时数据
      tempdata: '',
      // 判断定位是否成功
      locationFlag: 'wait' // wait 定位中... success 定位成功，显示天气  error 定位失败 addressError 地址不存在
    };
  },
  mounted() {
    var _self = this;
    // 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
    _self.$nextTick(function() {
      if (_self.$parent.phoneFlag) {
        _self.getLocationPhone();
      } else {
        _self.getLocationPC();
      }
    });
  },
  methods: {
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
    }
  }
};
</script>

<style lang="scss" scoped>
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
</style>