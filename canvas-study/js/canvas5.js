let canvas = document.querySelector('#myCanvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');

// 鼠标位置
let mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2
}

// 点击触发事件
window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})

// 窗口大小改变触发事件
window.addEventListener('resize', function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
})

// 随机数-整数
function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 随机数-小数
function randomFloatNum(max, min) {
  return Math.random() * (max - min + 1) + min;
}
// 颜色数组
let colorArray = ['#0029FA', '#8D07F6', '#FFFF05', '#4BF88', '#F2B134', '#6F4A70', '#FF6275', '#00B5C4'];

// 创建小球
function Ball(x, y, radius, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.theta = randomFloatNum(0, 2 * Math.PI);
  this.speed = 0.05;
  this.distance = randomNum(90, 70);
  this.dragSpeed = 0.05;
  this.lastMouse = {
    x: x,
    y: y
  }

  this.draw = function (lastPosition) {
    ctx.beginPath();// 重新绘制路径
    // ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    // ctx.fillStyle = this.color;
    // ctx.fill();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }

  this.update = function () {
    let lastPosition = {
      x: this.x,
      y: this.y
    }

    // 拖拽效果
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * this.dragSpeed;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * this.dragSpeed;

    this.x = this.lastMouse.x + Math.cos(this.theta) * this.distance;
    this.y = this.lastMouse.y + Math.sin(this.theta) * this.distance;

    this.theta += this.speed;
    this.draw(lastPosition);
  }
}

// 初始化小球
let ballArray;
function init() {
  ballArray = [];
  for (let i = 0; i < 50; i++) {
    // let radius = randomNum(20, 15);
    // let x = randomNum(canvas.width - radius, radius);
    // let y = randomNum(canvas.height - radius, radius);
    // let dx = randomNum(5, -5);
    // let dy = randomNum(2, 1);
    let color = colorArray[randomNum(colorArray.length, 0)];
    ballArray.push(new Ball(mouse.x, mouse.y, 3, color));
  }
}

// 动画函数
function animation() {
  requestAnimationFrame(animation);
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 每一帧给之前的帧蒙上一层透明的白色
  ctx.fillStyle ='rgba(255, 255, 255, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let b of ballArray) {
    b.update();
  }
}
init();
animation();