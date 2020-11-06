// 价格，没隔三位加逗号
function toThreeComma(data) {
  var num1 = data.toString().split('.')[0];
  var result = '';
  while (num1.length > 3) {
    result = ',' + num1.slice(-3) + result;
    num1 = num1.slice(0, num1.length - 3);
  }
  if (num1) { result = num1 + result; }
  result = result + '.' + data.toString().split('.')[1];
  return result;
};
console.log(toThreeComma(39600354.0334));// 39, 600, 354.0334
console.log(toThreeComma(8354.0334));// 8,354.0334
console.log(toThreeComma(423439600354.0334));// 423,439,600,354.0334
console.log(toThreeComma(600354.0334));// 600,354.0334
