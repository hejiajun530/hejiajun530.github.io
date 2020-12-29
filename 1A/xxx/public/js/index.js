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
          <td>${index + 1}</td>
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