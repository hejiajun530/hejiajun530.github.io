<template>
  <div class="styleCss">
    <!-- 水球  效果 -->
    <div class="water-ball">
      <div class="water-ball-wave">water-ball</div>
    </div>
    <!-- 聚光灯文字效果 -->
    <div class="spot-lamp">
      <span>Y</span><span>E</span><span>L</span><span>L</span><span>O</span><span>W</span>
    </div>
    <!-- 文字分割 -->
    <div class="split-font">
      <div class="text">to be or not to be</div>
      <div class="inner-text">that's a question</div>
      <div class="text">to be or not to be</div>
    </div>
    <!-- 毛玻璃 目前只适用于谷歌浏览器，需要兼容需使用canvas -->
    <div class="maoboli">
      <div class="maoboli-box">
        目前只适用于谷歌浏览器，需要兼容需使用canvas <br />
        And uncover image!
      </div>
    </div>
    <!-- 按钮效果 第一种 -->
    <div class="btn-one">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </div>
    <!-- 按钮效果 第二种 -->
    <div class="btn-two">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </div>
    <!-- 按钮效果 第三种 -->
    <div class="btn-thr">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Button
    </div>
    <!-- 按钮效果 第四种 -->
    <div class="btn-four">sunbutton</div>
    <!-- 太极 -->
    <div class="taiji"></div>
    <!-- 两面翻转 -->
    <div class="overturn-box">
      <div class="overturn">
        <div class="overturn-front">111</div>
        <div class="overturn-back">aaa</div>
      </div>
    </div>
    <!-- 文字滚动 -->
    <div class="fontroll">
      <div class="fontroll_l"><span>祁阳第一卤粉</span></div>
      <div class="fontroll_r"><span>祁阳第一卤粉</span></div>
    </div>
    <!-- 3d导航栏 -->
    <ul class="navbar">
      <li class="navbar-list">
        <div class="navbar-list-item">
          <div class="navbar-list-item-front">湖南</div>
          <div class="navbar-list-item-back">祁阳</div>
        </div>
      </li>
      <li class="navbar-list">
        <div class="navbar-list-item">
          <div class="navbar-list-item-front">湖南</div>
          <div class="navbar-list-item-back">祁阳</div>
        </div>
      </li>
      <li class="navbar-list">
        <div class="navbar-list-item">
          <div class="navbar-list-item-front">湖南</div>
          <div class="navbar-list-item-back">祁阳</div>
        </div>
      </li>
      <li class="navbar-list">
        <div class="navbar-list-item">
          <div class="navbar-list-item-front">湖南</div>
          <div class="navbar-list-item-back">祁阳</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
/* 水球 */
.water-ball,
.water-ball-wave {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  padding: 20px 0 0 0;
  color: #000;
  overflow: hidden;
}
.water-ball {
  padding: 10px;
  border: 3px solid darkturquoise;
}
.water-ball-wave {
  background: darkturquoise;
  box-sizing: border-box;
}
.water-ball-wave::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -60%);
  width: 135%;
  height: 135%;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 40%;
  animation: waterwave 5s linear infinite;
}
@keyframes waterwave {
  100% {
    transform: translate(-50%, -60%) rotate(360deg);
  }
}
/* 聚光灯文字效果 */
.spot-lamp {
  width: 500px;
  font-size: 5em;
  position: relative;
  color: #333;
  background: rgba(243, 70, 4, 0.3);
  box-shadow: 0 0 10px yellow;
  animation: rotate 5s infinite;
  padding: 5px 10px;
  border-radius: 10px;
}
.spot-lamp::after {
  content: "YELLOW";
  position: absolute;
  color: transparent;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 5px 10px;
  background: -webkit-linear-gradient(
    left,
    #c23616,
    #192a56,
    #00d2d3,
    yellow,
    #6d214f,
    #2e86de,
    #4cd137,
    #e84118
  );
  background-clip: text;
  -webkit-background-clip: text;
  clip-path: circle(80px at 0% 50%);
  -webkit-clip-path: circle(80px at 0% 50%);
  animation: light 5s infinite;
}
@keyframes rotate {
  0% {
    filter: hue-rotate(0deg);
  }
  100% {
    filter: hue-rotate(360deg);
  }
}
@keyframes light {
  0% {
    clip-path: circle(80px at 0% 50%);
    -webkit-clip-path: circle(80px at 0% 50%);
  }
  50% {
    clip-path: circle(80px at 100% 50%);
    -webkit-clip-path: circle(80px at 100% 50%);
  }
  100% {
    clip-path: circle(80px at 0% 50%);
    -webkit-clip-path: circle(80px at 0% 50%);
  }
}
/* 文字分割 */
.split-font {
  position: relative;
  width: 100%;
  height: 120px;
  text-align: center;
  transition: 0.3s;
  cursor: pointer;
}
.split-font .text {
  position: absolute;
  top: 0;
  width: 100%;
  font-size: 120px;
  font-weight: bold;
  font-family: "Barlow", sans-serif;
  height: 120px;
  line-height: 120px;
  text-transform: uppercase;
  transition: 0.3s;
}
.split-font .text:nth-child(1) {
  clip-path: polygon(100% 0, 100% 50%, 0% 50%, 0 10%);
}
.split-font .text:nth-child(3) {
  clip-path: polygon(100% 49%, 100% 100%, 0% 100%, 0 49%);
}
.split-font .inner-text {
  font-family: "Ubuntu", sans-serif;
  position: absolute;
  top: 60px;
  width: 100%;
  height: 0;
  font-size: 70px;
  overflow: hidden;
  transform: scale(1, 0);
  transition: 0.3s;
}
.split-font:hover .inner-text {
  height: 80px;
  transform: translate(0, -45px) scale(1, 1);
}
.split-font:hover .text:nth-child(1) {
  transform: translate(0, -35px);
}
.split-font:hover .text:nth-child(3) {
  transform: translate(0, 45px);
}
/* 毛玻璃 */
.maoboli {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 350px;
  background: url(../assets/bk.jpg);
  background-size: 100% 100%;
}
.maoboli-box {
  width: 300px;
  height: 150px;
  -webkit-backdrop-filter: blur(5px);
  -moz-backdrop-filter: blur(5px);
  -o-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
}
/* 按钮效果 第一种 */
.btn-one {
  position: relative;
  color: #1670f0;
  width: 80px;
  padding: 30px 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #0c002b;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;
  margin: 50px 50px 50px 0;
}
.btn-one::before {
  content: "";
  display: inline-block;
  width: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}
.btn-one span {
  position: absolute;
  transition: all 0.3s linear;
  z-index: 999;
}
.btn-one span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to right, #0c002b, #1779ff);
  background: linear-gradient(to right, #0c002b, #1779ff);
  transform: translate(-100%);
}
.btn-one span:nth-child(2) {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to bottom, #0c002b, #1779ff);
  background: linear-gradient(to bottom, #0c002b, #1779ff);
  transform: translate(0, -100%);
}
.btn-one span:nth-child(3) {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to left, #0c002b, #1779ff);
  background: linear-gradient(to left, #0c002b, #1779ff);
  transform: translate(100%);
}
.btn-one span:nth-child(4) {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to top, #0c002b, #1779ff);
  background: linear-gradient(to top, #0c002b, #1779ff);
  transform: translate(0, 100%);
}
.btn-one:hover span:nth-child(1) {
  transform: translate(0);
}
.btn-one:hover span:nth-child(2) {
  transform: translate(0, 0);
}
.btn-one:hover span:nth-child(3) {
  transform: translate(0);
}
.btn-one:hover span:nth-child(4) {
  transform: translate(0, 0);
}
/* 按钮效果 第二种 */
.btn-two {
  position: relative;
  width: 200px;
  color: #1670f0;
  padding: 30px 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #0c002b;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  border: 2px solid transparent;
  cursor: pointer;
  box-sizing: border-box;
}
.btn-two::before {
  content: "";
  display: inline-block;
  width: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 1;
}
.btn-two span {
  position: absolute;
  transition: all 0.3s linear;
  z-index: 999;
}
.btn-two span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to right, #0c002b, #1779ff);
  background: linear-gradient(to right, #0c002b, #1779ff);
  transform: translate(-100%);
}
.btn-two span:nth-child(2) {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to bottom, #0c002b, #1779ff);
  background: linear-gradient(to bottom, #0c002b, #1779ff);
  transform: translate(0, -100%);
}
.btn-two span:nth-child(3) {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(to left, #0c002b, #1779ff);
  background: linear-gradient(to left, #0c002b, #1779ff);
  transform: translate(100%);
}
.btn-two span:nth-child(4) {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(to top, #0c002b, #1779ff);
  background: linear-gradient(to top, #0c002b, #1779ff);
  transform: translate(0, 100%);
}
.btn-two:hover span:nth-child(1) {
  transform: translate(100%);
  transition-delay: 0;
}
.btn-two:hover span:nth-child(2) {
  transform: translate(0, 100%);
  transition-delay: 0.3s;
}
.btn-two:hover span:nth-child(3) {
  transform: translate(-100%);
  transition-delay: 0.6s;
}
.btn-two:hover span:nth-child(4) {
  transform: translate(0, -100%);
  transition-delay: 0.9s;
}
.btn-two:hover {
  transition-delay: 1.2s;
  color: #255784;
  background: #2196f3;
  border: 2px solid #2196f3;
  box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
}
/* 按钮效果 第三种 */
.btn-thr {
  position: relative;
  width: 80px;
  color: #1670f0;
  padding: 30px 60px;
  letter-spacing: 2px;
  text-transform: uppercase;
  background: #0c002b;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  cursor: pointer;
  margin: 50px 0 0 0;
}
.btn-thr::before {
  content: "";
  display: inline-block;
  width: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  bottom: 2px;
  background: rgba(255, 255, 255, 0.05);
  z-index: -1;
}
.btn-thr span {
  position: absolute;
  background: #2196f3;
  transition: all 0.3s linear;
  z-index: 999;
}
.btn-thr span:nth-child(1) {
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 300%;
  height: 2px;
}
.btn-thr span:nth-child(1)::before,
.btn-thr span:nth-child(3)::before {
  content: "";
  position: absolute;
  top: 0;
  display: block;
  width: 5%;
  height: 100%;
  background: #0c002b;
  transform: skew(60deg);
  z-index: 999;
}
.btn-thr span:nth-child(1)::before {
  left: 35%;
}
.btn-thr span:nth-child(2) {
  top: 0;
  right: 0;
  width: 2px;
  height: 100%;
}
.btn-thr span:nth-child(3) {
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 300%;
  height: 2px;
}
.btn-thr span:nth-child(3)::before {
  right: 35%;
}
.btn-thr span:nth-child(4) {
  top: 0;
  left: 0;
  width: 2px;
  height: 100%;
}
.btn-thr:hover span:nth-child(1) {
  transform: translate(-26%);
}
.btn-thr:hover span:nth-child(3) {
  transform: translate(-74%);
}
/* 按钮效果 第四种 */
.btn-four {
  position: relative;
  width: 80px;
  color: #fff;
  padding: 20px 100px;
  border-radius: 70px;
  background: -webkit-linear-gradient(
    90deg,
    #03a9f4,
    #f441a5,
    #ffeb3b,
    #03a9f4
  );
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  text-transform: uppercase;
  cursor: pointer;
  margin: 50px 0 0 0;
}
.btn-four::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  background: -webkit-linear-gradient(
    90deg,
    #03a9f4,
    #f441a5,
    #ffeb3b,
    #03a9f4
  );
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 80px;
  filter: blur(30px);
  opacity: 0.5;
  /* z-index: -1; */
}
.btn-four:hover {
  animation: sun 8s infinite;
}
.btn-four:hover::before {
  animation: sun 8s infinite;
}
@keyframes sun {
  100% {
    background-position: 400% 0;
  }
}
/* 太极 */
.taiji {
  position: relative;
  width: 200px;
  height: 400px;
  border-left: 200px solid #000;
  background-color: #fff;
  border-radius: 50%;
  animation: rotat 1s linear infinite;
}
@keyframes rotat {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.taiji::before,
.taiji::after {
  content: "";
  display: block;
  width: 50px;
  height: 50px;
  margin-left: -100px;
  border-radius: 50%;
}
.taiji::before {
  border: 75px solid #000;
  background-color: #fff;
}
.taiji::after {
  border: 75px solid #fff;
  background-color: #000;
}
/* 两面翻转 */
.overturn {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  transition: all 1s linear;
  transform-style: preserve-3d;
  cursor: pointer;
}
.overturn-front,
.overturn-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 300px;
  color: #fff;
  border-radius: 50%;
}
.overturn-front {
  background-color: pink;
  z-index: 1;
}
.overturn-back {
  background-color: purple;
  transform: rotateY(180deg);
}
.overturn-box {
  display: inline-block;
}
.overturn-box:hover .overturn {
  transform: rotateY(180deg);
}
/* 文字滚动 */
.fontroll {
  position: relative;
  width: 300px;
  height: 200px;
  margin: 50px auto;
  /*transform: translateZ(300px) rotateY(60deg);*/
  transform-style: preserve-3d;
  perspective: 1000px;
}
.fontroll_l,
.fontroll_r {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 600px;
  height: 150px;
  line-height: 150px;
  font-size: 50px;
  color: #fff;
}
.fontroll_l {
  left: -300px;
  background-color: purple;
  transform: rotateY(-60deg);
}
.fontroll_r {
  right: -300px;
  background-color: pink;
  transform: rotateY(60deg);
}

@keyframes move {
  0% {
    transform: translateX(600px);
  }
  100% {
    transform: translateX(-600px);
  }
}
.fontroll_r span,
.fontroll_l span {
  display: block;
  transform: translateX(600px);
  animation: move 1.5s linear infinite;
}
.fontroll_l span {
  animation-delay: 0.75s;
}
/* 3d导航栏 */
.navbar .navbar-list {
  list-style: none;
  float: left;
  perspective: 1000px;
}
.navbar-list-item {
  position: relative;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  transform-style: preserve-3d;
  transition: all 0.5s linear;
  cursor: pointer;
}
.navbar-list-item-front,
.navbar-list-item-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
.navbar-list-item-front {
  background-color: pink;
  z-index: 1;
  transform: translateZ(15px);
}
.navbar-list-item-back {
  background-color: purple;
  transform: translateY(15px) rotateX(-90deg);
}
.navbar-list-item:hover {
  transform: rotateX(90deg);
}
</style>