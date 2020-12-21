// 轮播图设置
let index = 0; // 移动的盒子 当前盒子 控制图片/主体盒子
let square = 0; // 控制圆点
let swiperTimer = null; // 自动轮播停驶器
let swiper = document.querySelector('.tyq-touch-swiper'); // 最外层的盒子
let swiperBox = document.querySelector('.tyq-touch-swiper-box'); // 需要移动的盒子
let swiperPrev = document.querySelector('.tyq-touch-swiper-prev'); // 上一张
let swiperNext = document.querySelector('.tyq-touch-swiper-next'); // 下一张
let swiperCricle = document.querySelector('.tyq-touch-swiper-cricle'); // 小圆点盒子
let animation = true;



// 动态添加轮播内容
let arr = [{
  title: '轮播11111',
  content: '112111111111111111111111111111111111'
}, {
  title: '轮播22222',
  content: '222222222222222222222222222222222222'
}, {
  title: '轮播33333',
  content: '333333333333333333333333333333333333'
}, {
  title: '轮播44444',
  content: '444444444444444444444444444444444444'
}, {
  title: '轮播55555',
  content: '555555555555555555555555555555555555'
}]
arr.forEach((item, index) => {
  let swiperItems = document.createElement('div');
  swiperItems.className = 'tyq-touch-swiper-box-item';
  swiperItems.innerHTML = `<h1>${item.title}</h1><p>${item.content}</p>`;
  swiperBox.appendChild(swiperItems);
})





let swiperItem = document.querySelectorAll('.tyq-touch-swiper-box-item'); // 每一块区域的盒子
swiperBox.style.width = (swiper.clientWidth * (swiperItem.length + 1)) + 'px'; // 需要移动的盒子 设置宽度  为了做到自适应
swiperItem.forEach((item, index) => {
  // 每一块区域的盒子 设置宽高  为了做到自适应
  item.style.width = swiper.clientWidth + 'px';
  item.style.height = swiper.clientHeight + 'px';
})
// 动态添加小圆点
swiperItem.forEach((item, index) => {
  let cricle = document.createElement('div');
  cricle.className = 'tyq-touch-swiper-cricle-item';
  cricle.setAttribute('data-index', index);
  swiperCricle.appendChild(cricle);
})
swiperCricle.children[0].classList.add('active');

// 拷贝第一个 swiper-item 到最后作为无限轮播
let lastSwiperItem = swiperItem[0].cloneNode(true);
swiperBox.appendChild(lastSwiperItem);
// 清空小圆点的 active类名
function delCricleActive() {
  swiperItem.forEach((item, index) => {
    swiperCricle.children[index].classList.remove('active');
  })
}

// 下一张
function handleClickSwiperNext() {
  if (animation) {
    if (index == swiperItem.length) {
      // 移动到最后一张时，swiper盒子 回到第一张
      swiperBox.style.left = '0px';
      index = 0;
    }
    index++;
    // 控制小圆点颜色
    square = square < swiperItem.length - 1 ? index : 0;
    delCricleActive(); // 清空小圆点的 active类名
    swiperCricle.children[square].classList.add('active');
    // 盒子移动
    animate(swiperBox, -index * swiper.clientWidth);
  }
}
// 上一张
function handleClickSwiperPrev() {
  if (animation) {
    if (index <= 0) {
      // 移动到第一张时，swiper盒子 回到最后一张
      swiperBox.style.left = -(swiperBox.clientWidth - swiperItem[0].clientWidth) + 'px';
      index = swiperItem.length - 1;
    } else {
      index--;
    }
    // 控制小圆点颜色
    square = square > 0 ? index : swiperItem.length - 1;
    delCricleActive(); // 清空小圆点的 active类名
    swiperCricle.children[square].classList.add('active');
    // 盒子移动
    animate(swiperBox, -index * swiper.clientWidth);
  }
}
// 小圆点控制 盒子移动
function handleClickSwiperCricle(e) {
  if (animation) {
    if (e.target.getAttribute('data-index')) {// 用于控制只点击小圆点才会调用方法
      let num = e.target.getAttribute('data-index');
      // 控制小圆点颜色
      delCricleActive(); // 清空小圆点的 active类名
      swiperCricle.children[num].classList.add('active');
      index = num;
      // 盒子移动
      animate(swiperBox, -index * swiper.clientWidth);
    }
  }
}
// 自动轮播
function swiperAutoPlay() {
  swiperTimer = setInterval(function () {
    handleClickSwiperNext()
  }, 2000);
}
// 启动自动轮播
swiperAutoPlay();



// 方法调用
swiperPrev.addEventListener('click', handleClickSwiperPrev);
swiperNext.addEventListener('click', handleClickSwiperNext);
swiperCricle.addEventListener('click', handleClickSwiperCricle);
swiper.addEventListener('mouseenter', function () {
  // 停止自动轮播
  clearInterval(swiperTimer);
})
swiper.addEventListener('mouseleave', function () {
  // 启动自动轮播
  swiperAutoPlay();
})
let startX, moveX, left;
swiperBox.addEventListener('touchstart', function (e) {
  console.log('start');
  // 停止自动轮播
  clearInterval(swiperTimer);
  startX = e.targetTouches[0].pageX;
  left = typeof swiperBox.style.left == 'string' ? swiperBox.style.left.substr(0, swiperBox.style.left.length - 2) : swiperBox.style.left;
})
// 手指滑动  touchmove   计算手指移动的距离，并且移动盒子
swiperBox.addEventListener("touchmove", function (e) {
  if (animation) {
    moveX = e.targetTouches[0].pageX - startX;
    // console.log(moveX, Number(left));
    // 盒子移动
    swiperBox.style.left = Number(left) + moveX + 'px';
  }
});
swiperBox.addEventListener("touchend", function (e) {
  console.log('end');
  // 启动自动轮播
  swiperAutoPlay();
  // 如果移动距离大于50px 那么就播放上一张或下一张
  console.log('end');
  if (Math.abs(moveX) > 80) {
    if (moveX > 0) {
      handleClickSwiperPrev();
    } else {
      handleClickSwiperNext();
    }
  } else {
    swiperBox.style.left = '0px';
  }
});

// 动画函数
function animate(obj, target, fn) {
  var _self = this;
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    animation = false;
    // console.log(obj.offsetLeft, target);
    if (Math.abs(obj.offsetLeft) == Math.abs(target)) { // 到达位置后 停止
      clearInterval(obj.timer);
      animation = true;
      fn && fn();
    }
    obj.style.left = obj.offsetLeft + step + 'px';
    // console.log(animation)
  }, 15);
}