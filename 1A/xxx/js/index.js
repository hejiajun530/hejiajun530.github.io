// 轮播图
let swiperItems = document.querySelectorAll('.jq-swiper-item');
let swiperWidth = document.querySelector('.jq-swiper-box').clientWidth;
$('.jq-swiper').css('width', (swiperItems.length + 2) * swiperWidth);
let timer = null;

// 复制节点 为无缝轮播做准备
var clonedNodeLast = swiperItems[0].cloneNode(true); // 克隆节点  
var clonedNodeFirst = swiperItems[swiperItems.length - 1].cloneNode(true); // 克隆节点  
$('.jq-swiper').append(clonedNodeLast);
$('.jq-swiper').prepend(clonedNodeFirst);
$('.jq-swiper').css('left', -swiperWidth + 'px');

// 生成下方小圆点
for (let i = 0; i < swiperItems.length; i++) {
  let div = `<div class="jq-swiper-cricle-item" data-index="${i + 1}"></div>`;
  $('.jq-swiper-cricle').append(div);
}

// 上一张
let moveFlag = true;
let index = 1;
$('.jq-swiper-cricle-item').eq(index - 1).addClass('active').siblings().removeClass('active');
$('.jq-swiper-prev').on('click', function () {
  if (!moveFlag) {
    return false;
  }
  moveFlag = false;
  index--;
  $('.jq-swiper-cricle-item').eq(index - 1).addClass('active').siblings().removeClass('active');
  // console.log($('.jq-swiper-cricle-item').eq(index - 1));
  $('.jq-swiper').stop().animate({ left: -(swiperWidth * index) + 'px' }, function () {
    console.log(index, swiperItems.length)
    moveFlag = true;
    console.log(moveFlag)
    if (index < 1) {
      console.log('111')
      index = swiperItems.length;
      $('.jq-swiper').css('left', -swiperItems.length * swiperWidth + 'px');
    }
  })
})
// 下一张
$('.jq-swiper-next').on('click', next);
function next() {
  if (!moveFlag) {
    return false;
  }
  moveFlag = false;
  index++;
  $('.jq-swiper-cricle-item').eq(index - 1).addClass('active').siblings().removeClass('active');
  // console.log($('.jq-swiper-cricle-item').eq(index - 1));
  $('.jq-swiper').stop().animate({ left: -swiperWidth * index + 'px' }, function () {
    console.log(index, swiperItems.length)
    moveFlag = true;
    console.log(moveFlag)
    if (index >= swiperItems.length) {
      index = 0;
      console.log('111')
      $('.jq-swiper').css('left', '0px');
    }
  })
}

// 点击小圆点
$('.jq-swiper-cricle-item').on('click', function () {
  console.log($(this).attr('data-index'));
  index = $(this).attr('data-index');
  $('.jq-swiper-cricle-item').eq(index - 1).addClass('active').siblings().removeClass('active');
  $('.jq-swiper').stop().animate({ left: -swiperWidth * index + 'px' }, function () {
    console.log(index, swiperItems.length)
    moveFlag = true;
    console.log(moveFlag)
    if (index >= swiperItems.length) {
      index = 0;
      console.log('111')
      $('.jq-swiper').css('left', '0px');
    }
  })
})

// 自动轮播
function autoplay() {
  timer = setInterval(function () {
    next();
  }, 2000);
}
autoplay()

// 鼠标进入 取消自动播放
$('.jq-swiper-box').on('mouseenter', function () {
  clearInterval(timer);
})
$('.jq-swiper-box').on('mouseleave', function () {
  autoplay()
})

// 渲染轮播图中侧边栏
var sliderList = ['手机电话卡', '电池回收', '废料回收', '空气清新剂', '自行车', '新能源汽车'];
var sliderBoxList = [['手机电话卡', '电信', '联通', '移动'],
['电池回收', '7号电池', '5号电池', '7号电池', '5号电池', '7号电池', '5号电池'],
['废料回收', '过期奶粉', '临期食品', '过期牛奶', '含金废料', '活性炭', '碳化钨'],
['空气清新剂', '西兰', 'Glade', '花仙子', '爱家AllJoy'],
['自行车', '山地车', '美利达', '捷安特', '自行车', '千里达'],
['新能源汽车', '探岳', '新迈腾', '速腾', '高尔夫·纯电', '宝来', '蔚领C-TREK', 'ID.4 CROZZ']];
sliderList.map((item, index) => {
  var itemDom = `<div class="jq-swiper-slider-item" date-index="${index}">
    <div>${item}</div>
    <div>&gt;</div>
  </div>`;
  $('.jq-swiper-slider').append(itemDom);
})

$('.jq-swiper-slider-item').on('mouseenter', function () {
  $('.jq-swiper-slider-box').empty();
  $('.jq-swiper-slider-box-box').show();
  let itemBoxIndex = $(this).attr('date-index')
  // console.log(itemBoxIndex);
  var itemBoxDom = '';
  sliderBoxList[itemBoxIndex].map((item, index) => {
    itemBoxDom = `
      <div class="jq-swiper-slider-box-item">${sliderBoxList[itemBoxIndex][index]}</div>
    `;
    $('.jq-swiper-slider-box').append(itemBoxDom);
  })
})
$('.jq-swiper-slider-item').on('mouseleave', function () {
  $('.jq-swiper-slider-box-box').hide();
})