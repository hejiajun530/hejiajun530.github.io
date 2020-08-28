let canvas = document.querySelector('#myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

let randomNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
let randomFloatNum = function (min, max) {
  return Math.random() * (max - min + 1) + min;
}
// 颜色数组
// let colorArray = ['#fff'];
let colorArray = ['#0029FA', '#8D07F6', '#FFFF05', '#4BF88', '#F2B134', '#6F4A70', '#FF6275', '#00B5C4'];

function Rain(x, y, dx, dy, vr, mr, h, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.vr = vr;
  this.mr = mr;
  this.h = h;
  this.speed = 0.05;
  this.radius = radius;
  this.color = color;

  this.draw = function (lastPosition) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  this.update = function () {
    let lastPosition = {
      x: this.x,
      y: this.y
    }
    if (this.y + this.radius < this.h) {
      this.y += this.dy;
      this.draw(lastPosition);
    } else if (this.radius < this.mr) {
      this.radius += this.vr;
      ctx.strokeStyle = this.color;
      ctx.beginPath();//重新拿起笔，一个笔画多个会连起来
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);//先构思
      // can.fill();//开始画实心圆(x, y, r, 绘制起始点， 绘制的终点)
      ctx.stroke();
    }
  }
}

let rainArray;
function init() {
  rainArray = [];
  setInterval(function() {
    for (let i = 0; i < 10; i++) {
      let radius = randomFloatNum(2, 3);
      let x = randomNum(radius, canvas.width - radius);
      let h = randomNum(0.8 * canvas.height, 0.9 * canvas.height);
      let dy = randomFloatNum(3, 4);
      let vr = randomFloatNum(0.25, 0.3);
      let mr = randomFloatNum(50, 55);
      let color = colorArray[randomNum(0, colorArray.length)];
      rainArray.push(new Rain(x, radius, 0, dy, vr, mr, h, radius, color));
    }
  }, 500);
}

function animation() {
  requestAnimationFrame(animation);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let r of rainArray) {
    r.update();
  }
}
init();
animation()