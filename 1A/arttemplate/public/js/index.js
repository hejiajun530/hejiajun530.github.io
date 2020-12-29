if (!sessionStorage.getItem('user')) {
  window.location.href = "http://localhost:3000";
}
function toAdd() {
  window.location.href = "http://localhost:3000/add";
}
function toLogin() {
  window.location.href = "http://localhost:3000";
}
function search() {
  let name = $('.name').val();
  $('#tb').empty();
  $.get("http://localhost:3000/web/getTeacherList?name=" + name, function (data) {
    console.log(data);
    data.forEach((item, index) => {
      $('#tb').append(`
        <tr>
          <td>
            <img src="${item.avator}">
          </td>
          <td>${item.name}</td>
          <td>${item.bianhao}</td>
          <td>${item.phone}</td>
          <td>${item.grade}</td>
          <td>${item.zhiwu}</td>
          <td>
            <button class="modify" onclick="modify(${item.id})">修改</button>
            <button class="del" onclick="del(${item.id})">删除</button>
          </td>
        </tr>
      `)
    })
  });
}
search();

function modify(id) {
  console.log(id)
  window.location.href = "http://localhost:3000/add?id=" + id;
}
function del(id) {
  console.log(id)
  $.get('http://localhost:3000/web/delTeacher?id=' + id, function (data) {
    console.log(data);
    search();
  })
}

function addliuyan() {
  let body = {
    username: JSON.parse(sessionStorage.getItem('user'))[0].username,
    content: $('.content').val(),
  }
  if (!$('.content').val()) {
    $('.liuyanerrmsg').text('留言内容不能为空');
    return false;
  }
  console.log(body);
  $.ajax({
    url: 'http://localhost:3000/web/addLiuyan',
    type: 'post',
    data: body,
    //processData: false, // 告诉jQuery不要去处理发送的数据
    contentType: "application/x-www-form-urlencoded;charset=utf-8", // 告诉jQuery不要去设置Content-Type请求头
    success: function (data) {
      console.log(data);
      if (data && data.protocol41) {
        getLiuyan();
        $('.liuyanerrmsg').text('');
      }
    }
  })
}
function getLiuyan() {
  $('#ly').empty();
  $.get("http://localhost:3000/web/getLiuyan?name=" + name, function (data) {
    console.log(data);
    data.forEach((item, index) => {
      $('#ly').append(`
        <tr>
          <td>${item.username}</td>
          <td>${item.content}</td>
          <td>${formatTime(item.createTime)}</td>
        </tr>
      `)
    })
  });
}
function formatTime(item) {
  let date = new Date(item);
  return date.getFullYear() + '-' + towNumber(date.getMonth() + 1) + '-' + towNumber(date.getDate()) + ' ' + towNumber(date.getHours()) + ':' + towNumber(date.getMinutes()) + ':' + towNumber(date.getSeconds());
}
function towNumber(item) {
  return item = Number(item) < 10 ? '0' + item : item;
}
getLiuyan();