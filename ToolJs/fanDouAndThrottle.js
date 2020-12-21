// 防抖
var fandouTimer = null;
btn.addEvenlistener('click', function () {
  if (fandouTimer) clearTimeout(fandouTimer);
  fandouTimer = setTimeout(function () {
    console.log('要执行的代码块');
  }, 1000)
})

// 节流
var throttleTimer = null;
btn.addEvenlistener('click', function () {
  if (!throttleTimer) {
    throttleTimer = setTimeout(function () {
      console.log('要执行的代码块');
      throttleTimer = null;
    }, 1000)
  }
})