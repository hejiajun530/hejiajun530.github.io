let canvas = document.querySelector('#myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

// 点击触发事件
window.addEventListener('mousedown', function () {
  init();
})

// 窗口大小改变触发事件
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

let Gravity = 0.8;
let Firction = 0.8;
// 随机数
function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 颜色数组
let colorArray = ['#0029FA', '#8D07F6', '#FFFF05', '#4BF88', '#F2B134', '#6F4A70', '#FF6275', '#00B5C4'];

// 创建小球
function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();// 重新绘制路径
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  this.update = function () {
    if (this.y + this.dy + this.radius + Gravity > canvas.height) {
      this.dy = -this.dy;
      this.dy *= Firction;
      this.dx *= Firction;
    } else {
      this.dy += Gravity;
    }
    if (this.x + this.dx + this.radius > canvas.width || this.x - this.radius + this.dx < 0) {
      this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

// 初始化小球
let ballArray;
function init() {
  ballArray = [];
  for (let i = 0; i < 500; i++) {
    let radius = randomNum(15, 5);
    let x = randomNum(canvas.width - radius, radius);
    let y = randomNum(canvas.height - radius, radius);
    let dx = randomNum(5, -5);
    let dy = randomNum(2, 1);
    let color = colorArray[randomNum(colorArray.length, 0)];
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

// 动画函数
function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let b of ballArray) {
    b.update();
  }
}
init();
animation();