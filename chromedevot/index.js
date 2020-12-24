window.onload = function () {
  // window.DOMContentLoaded = function () {
  // setInterval(function () {
  // console.log(document.getElementsByName('__main_iframe__'));
  // console.log(document.getElementsByName('__main_iframe__')[0].parentNode);
  let rrDom = document.getElementsByName('__main_iframe__')[0]; // 人人电影网右下角广告
  if (rrDom) {
    rrDom.parentNode.remove();
  }
  let runDom = document.querySelector('#HMRichBox'); // Runing Man电影网右下角广告
  let runLeftDom = document.querySelector('#HMcoupletDivleft');
  let runRightDom = document.querySelector('#HMcoupletDivright');
  if (runDom) {
    runDom.remove();
  }
  if (runLeftDom) {
    runLeftDom.remove();
  }
  if (runRightDom) {
    runRightDom.remove();
  }
  console.log('111');
  // }, 1000);
}