// 数组去重
function unique() {
  return this.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  })
}

// 根据输出内容来获取在数组中的下标
function getIndex(data, path) {
  return this.map(item => path ? item['' + path + ''] : item).indexOf(data);
}
// var arr = ['data', 'aa'];
// var arr = [{
//   name: 'aa',
//   url: '/home'
// }, {
//   name: 'bb',
//   url: '/me'
// }];
// console.log(arr.getIndex('aa'));//1
// console.log(arr.getIndex('/home', 'url'));//0

Array.prototype.unique = unique;// 数组去重
Array.prototype.getIndex = getIndex;// 获取下标