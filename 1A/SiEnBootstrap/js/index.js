// 头部滚轮事件
$(document).on('mousewheel DOMMouseScroll', onMouseScroll);
function onMouseScroll(e) {
  // e.preventDefault();
  var wheel = e.originalEvent.wheelDelta || -e.originalEvent.detail;
  var delta = Math.max(-1, Math.min(1, wheel));
  if (delta < 0) {//向下滚动
    console.log('向下滚动');
    // setTimeout(function () {
    $('.header').addClass('default');
    // }, 500);
  } else {//向上滚动
    console.log('向上滚动');
    // setTimeout(function () {
    $('.header').removeClass('default');
    // }, 500);
  }
}

// 侧边固定小按钮事件
$('.slider1-item').on('mouseenter', function () {
  $(this).css({
    width: '175px',
    background: 'rgb(228,57,42)',
    paddingLeft: '17px'
  })
  $(this).find('img').addClass('default');
})
$('.slider1-item').on('mouseleave', function () {
  $(this).css({
    width: '50px',
    background: 'rgb(0,0,34)',
    paddingLeft: '0px'
  })
  $(this).find('img').removeClass('default');
})
$('.slider2-item.wei').on('mouseenter', function () {
  $('.weixin').stop().slideToggle("slow");
})
$('.slider2-item.wei').on('mouseleave', function () {
  $('.weixin').stop().slideToggle("slow");
})
$('.slider2-item.back').on('click', function () {
  $('.header').removeClass('default');
  $('body,html').animate({ scrollTop: 0 });
})


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
    animRemove(index);
    animAdd(index);
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
    animRemove(index);
    let i = index == 0 ? 3 : index;
    animAdd(i);
  })
}
animAdd(1);
function animAdd(idx) {
  console.log(idx);
  if (idx == 1) {
    setTimeout(function () {
      $('.jq-swiper-item .a1').show();
      $('.jq-swiper-item .a1').find('h5').addClass('fadeInDown')
      $('.jq-swiper-item .a1').find('h2').addClass('fadeInRight')
      $('.jq-swiper-item .a1').find('h3').addClass('fadeInUp')
    }, 500)
  } else if (idx == 2) {
    setTimeout(function () {
      $('.jq-swiper-item .a2').show();
      $('.jq-swiper-item .a2').find('h2').addClass('fadeInRight')
      $('.jq-swiper-item .a2').find('h3').addClass('fadeInDown')
      $('.jq-swiper-item .a2').find('h4').addClass('fadeInUp')
      $('.jq-swiper-item .a2').find('h6').addClass('fadeInUp')
    }, 500)
  } else if (idx == 3) {
    setTimeout(function () {
      $('.jq-swiper-item .a3').show();
      $('.jq-swiper-item .a3').find('h2').addClass('fadeInDown')
      $('.jq-swiper-item .a3').find('h3').addClass('fadeInRight')
      $('.jq-swiper-item .a3').find('h4').addClass('fadeInUp')
    }, 500)
  }
}
function animRemove(idx) {
  $('.jq-swiper-item .a1').hide();
  $('.jq-swiper-item .a1').find('h5').removeClass('fadeInDown')
  $('.jq-swiper-item .a1').find('h2').removeClass('fadeInRight')
  $('.jq-swiper-item .a1').find('h3').removeClass('fadeInUp')

  $('.jq-swiper-item .a2').hide();
  $('.jq-swiper-item .a2').find('h2').removeClass('fadeInRight')
  $('.jq-swiper-item .a2').find('h3').removeClass('fadeInDown')
  $('.jq-swiper-item .a2').find('h4').removeClass('fadeInUp')
  $('.jq-swiper-item .a2').find('h6').removeClass('fadeInUp')

  $('.jq-swiper-item .a3').hide();
  $('.jq-swiper-item .a3').find('h2').removeClass('fadeInDown')
  $('.jq-swiper-item .a3').find('h3').removeClass('fadeInRight')
  $('.jq-swiper-item .a3').find('h4').removeClass('fadeInUp')
}
// 自动轮播
// function autoplay() {
//   timer = setInterval(function () {
//     next();
//   }, 2000);
// }
// autoplay()
// 鼠标进入 取消自动播放
// $('.jq-swiper-box').on('mouseenter', function () {
//   clearInterval(timer);
// })
// $('.jq-swiper-box').on('mouseleave', function () {
//   autoplay()
// })


// 思恩服务
$('.serve-list-item').on('mouseenter', function () {
  $(this).find('.pic').show();
  $(this).find('.pic-icon').animate({
    top: '0'
  })
})
$('.serve-list-item').on('mouseleave', function () {
  var _self = this;
  $(_self).find('.pic-icon').animate({
    top: '-134px'
  }, function () {
    $(_self).find('.pic').hide();
  })
})

// 思恩案例
$('.exmp-list-item').on('mouseenter', function () {
  $(this).find('.hover').stop().animate({
    top: '0'
  })
})
$('.exmp-list-item').on('mouseleave', function () {
  $(this).find('.hover').stop().animate({
    top: '-100%'
  })
})

// 思恩动态
$('.done-list-item').on('mouseenter', function () {
  $(this).find('.hover .img').stop().animate({
    top: '0'
  })
  $(this).find('.hover .pad').stop().animate({
    bottom: '-10px'
  })
})
$('.done-list-item').on('mouseleave', function () {
  $(this).find('.hover .img').stop().animate({
    top: '-55%'
  })
  $(this).find('.hover .pad').stop().animate({
    bottom: '-190px'
  })
})