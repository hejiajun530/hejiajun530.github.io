// 动画函数
function animate(obj, target, fn) {
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    if (obj.offsetLeft >= Math.abs(target)) {
      clearInterval(obj.timer);
      fn && fn();
    }
    obj.style.left = obj.offsetLeft + step + "px";
  }, 15);
}