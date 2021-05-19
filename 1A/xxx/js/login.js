// 控制密码是否显示
$('.showPas').on('click', function () {
  if ($('.password').attr('type') == 'password') {
    $('.password').attr('type', 'text');
    $('.showPas').text('隐藏密码');
    console.log($('.password'), 111)
  } else {
    $('.password').attr('type', 'password');
    $('.showPas').text('显示密码');
    console.log($('.password'), 222)
  }
})

$('.loginBtn').on('click', function () {
  var username = $('.username').val();
  var password = $('.password').val();
  if (!username) {
    $('.errmsg').text('用户名不能为空!');
    return false;
  }
  if (username.length < 2 || username.length > 10) {
    $('.errmsg').text('用户名长度为2-10位!');
    return false;
  }
  if (!password) {
    $('.errmsg').text('密码不能为空!');
    return false;
  }
  if (password.length < 5 || password.length > 10) {
    $('.errmsg').text('密码长度为5-10位!');
    return false;
  }
  if (username != 'admin' && password != 'admin') {
    $('.errmsg').text('用户名或密码不正确!');
    return false;
  }
  window.location.href = "index.html";
  $('.errmsg').text('');
})