// 回到顶部
function handleClickTop() {
  var _self = this;
  let timer = null;
  var i = window.pageYOffset;
  timer = setInterval(function () {
    if (window.pageYOffset > 0) {
      window.scrollTo(0, i);
    } else {
      clearInterval(timer);
      timer = null;
      console.log('回到顶部');
    }
    i -= 20;
  }, 10);
}