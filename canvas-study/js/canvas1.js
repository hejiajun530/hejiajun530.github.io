let canvas = document.querySelector('#myCanvas');

let ctx = canvas.getContext('2d');

// 绘制矩形  fillStyle填充颜色   fillRect绘制矩形
// ctx.fillStyle = "#f00";
// ctx.fillRect(0, 0, 300, 200);

// 绘制线条  moveTo(开始坐标x,开始坐标y)  lineTo(结束坐标x,结束坐标y)
// ctx.moveTo(30, 10);
// ctx.lineTo(500, 300);
// ctx.stroke();

// 绘制圆形  arc(坐标x,坐标y,半径,起始角度,结束角度,true(逆时针)/false(顺时针))
// ctx.arc(100, 100, 50, 0, 2 * Math.PI);
// ctx.stroke();

// 绘制文字  fillText('文字内容', 坐标x, 坐标y)
// ctx.font = "30px Arial";
// ctx.fillText('Hello Canvas World！', 10, 50);

// 绘制空心文字  strokeText('文字内容', 坐标x, 坐标y)
// ctx.font = "30px Arial";
// ctx.strokeText('Hello Canvas World！', 10, 50);

// 颜色渐变
// 创建渐变 createLinearGradient(x,y,x1,y1) - 创建线条渐变
// var grd = ctx.createLinearGradient(0, 0, 300, 0);
// grd.addColorStop(0, 'red');
// grd.addColorStop(1, 'black');
// 填充渐变
// ctx.fillStyle = grd;
// ctx.fillRect(20, 20, 300, 150);

// 颜色渐变
// 创建渐变 createRadialGradient(x,y,r,x1,y1,r1) - 创建一个径向/圆渐变
// var grd = ctx.createRadialGradient(150, 75, 0, 150, 75, 300);
// grd.addColorStop(0, 'red');
// grd.addColorStop(1, 'white');
// // 填充渐变
// ctx.fillStyle = grd;
// ctx.fillRect(20, 20, 300, 150);

// 绘制图片  drawImage(图片, 坐标x, 坐标y, 宽, 高)
var img = document.querySelector('#img');
ctx.drawImage(img, 10, 10, 300, 150);