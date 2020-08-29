let canvas = document.querySelector('#myCanvas');

canvas.width = document.body.clientWidth;
canvas.height = document.body.clientHeight;

// 绘制上下文
let ctx = canvas.getContext('2d');

// 鼠标坐标
let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

// 最大图形半径
let maxRadius = 30;

window.addEventListener('mousemove', function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
})

window.addEventListener('resize', function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

// Ball(坐标x, 坐标y, x移动距离, y移动距离, 半径, 颜色)
function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = color;

  // 绘制圆形
  this.draw = function () {
    ctx.beginPath(); // 重新绘制路径
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  // 位置移动
  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // 鼠标交互
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}
// 创建图形，需要 new 一个，之后调用draw方法
// let ball = new Ball(300, 300, 10, 10, 100, 'red');

// 球数组
var ballArray;
function init() {
  ballArray = [];
  // 颜色数组
  var colorArray = ['#0029FA', '#8D07F6', '#FFFF05', '#4BF88', '#F2B134', '#6F4A70', '#FF6275', '#00B5C4'];

  for (let i = 0; i < 1000; i++) {
    let radius = Math.random() * 4 + 1;
    let x = Math.random() * (canvas.width - 2 * radius) + radius;
    let y = Math.random() * (canvas.height - 2 * radius) + radius;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    let color = colorArray[Math.floor(Math.random() * (colorArray.length - 0) + 0)];
    ballArray.push(new Ball(x, y, dx, dy, radius, color));
  }
}

function animation() {
  requestAnimationFrame(animation);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let b of ballArray) {
    b.update();
  }
}
init();
animation();