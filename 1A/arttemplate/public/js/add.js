if (!sessionStorage.getItem('user')) {
  window.location.href = "http://localhost:3000";
}
$('.toIndex').on('click', function () {
  window.location.href = "http://localhost:3000/index";
})
var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
var avatorstr = '';
if (window.location.href.indexOf('id') != -1) {
  $('.add').hide();
  var hrefParams = window.location.href.split('?')[1];
  console.log(hrefParams);
  if (hrefParams) {
    $.get('http://localhost:3000/web/getTeacher?id=' + hrefParams.split('=')[1], function (res) {
      console.log(res);
      let data = res[0];
      avatorstr = data.avator;
      $('.name').val(data.name);
      $('.bianhao').val(data.bianhao);
      $('.phone').val(data.phone);
      $('.grade').val(data.grade);
      $('.zhiwu').val(data.zhiwu);
      $('.upload-img').attr('src', avatorstr);
    });
  }
  function modify() {
    let body = {
      name: $('.name').val(),
      bianhao: $('.bianhao').val(),
      phone: $('.phone').val(),
      grade: $('.grade').val(),
      zhiwu: $('.zhiwu').val(),
      avator: avatorstr,
      id: hrefParams.split('=')[1]
    }
    console.log(body);
    let name = $('.name').val();
    let bianhao = $('.bianhao').val();
    if (!name) {
      $('.errmsg').text('用户名不能为空');
      return false;
    }
    if (!bianhao) {
      $('.errmsg').text('编号不能为空');
      return false;
    }
    if (!myreg.test($('.phone').val())) {
      $('.errmsg').text('手机号格式不正确');
      return false;
    }
    if (!avatorstr) {
      $('.errmsg').text('头像不能为空');
      return false;
    }
    $.ajax({
      url: 'http://localhost:3000/web/updateTeacher',
      type: 'post',
      data: body,
      //processData: false, // 告诉jQuery不要去处理发送的数据
      contentType: "application/x-www-form-urlencoded;charset=utf-8", // 告诉jQuery不要去设置Content-Type请求头
      success: function (data) {
        console.log(data);
        if (data && data.protocol41) {
          window.location.href = "http://localhost:3000/index";
        }
      }
    })
  }
} else {
  $('.modify').hide();
  function add() {
    let body = {
      name: $('.name').val(),
      bianhao: $('.bianhao').val(),
      phone: $('.phone').val(),
      grade: $('.grade').val(),
      zhiwu: $('.zhiwu').val(),
      avator: avatorstr,
    }
    console.log(body);
    let name = $('.name').val();
    let bianhao = $('.bianhao').val();
    if (!name) {
      $('.errmsg').text('用户名不能为空');
      return false;
    }
    if (!bianhao) {
      $('.errmsg').text('编号不能为空');
      return false;
    }
    if (!myreg.test($('.phone').val())) {
      $('.errmsg').text('手机号格式不正确');
      return false;
    }
    if (!avatorstr) {
      $('.errmsg').text('头像不能为空');
      return false;
    }
    $.ajax({
      url: 'http://localhost:3000/web/addTeacher',
      type: 'post',
      data: body,
      //processData: false, // 告诉jQuery不要去处理发送的数据
      contentType: "application/x-www-form-urlencoded;charset=utf-8", // 告诉jQuery不要去设置Content-Type请求头
      success: function (data) {
        console.log(data);
        if (data && data.protocol41) {
          window.location.href = "http://localhost:3000/index";
        }
      }
    })
  }
}

function handleChangeUploadImg(self) {
  console.log(self.files[0]);
  let file = self.files[0];
  let formData = new FormData();
  formData.append('file', file);
  console.log(formData.get('file'), '----------');
  // $.post('http://localhost:3000/web/upload', JSON.stringify(formData), function(data) {
  //   console.log(data);
  // })
  $.ajax({
    url: 'http://localhost:3000/web/upload',
    type: 'post',
    data: formData,
    processData: false, // 告诉jQuery不要去处理发送的数据
    contentType: false, // 告诉jQuery不要去设置Content-Type请求头
    dataType: 'text',
    success: function (res) {
      let data = JSON.parse(res);
      console.log(data);
      $('.upload-img').attr('src', data.url);
      avatorstr = data.url;
    }
  })
}