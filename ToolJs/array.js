function unique() {
  return this.filter(function (item, index, arr) {
    return arr.indexOf(item, 0) === index;
  })
}

Array.prototype.unique = unique;// 数组去重