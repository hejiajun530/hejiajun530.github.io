// 动态添加css或js
if (phoneFlag == '移动端') {
  console.log("移动端");
  // css
  let linkNode = document.createElement("link");
  linkNode.setAttribute("rel", "stylesheet");
  linkNode.setAttribute("type", "text/css");
  linkNode.setAttribute("href", "./css/index-phone.css");
  document.head.appendChild(linkNode);
  // js
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = './index-phone.js';
  document.body.appendChild(script);
} else {
  console.log("pc端");
  // css
  let linkNode = document.createElement("link");
  linkNode.setAttribute("rel", "stylesheet");
  linkNode.setAttribute("type", "text/css");
  linkNode.setAttribute("href", "./css/index-pc.css");
  document.head.appendChild(linkNode);
  // js
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = './index-pc.js';
  document.body.appendChild(script);
}