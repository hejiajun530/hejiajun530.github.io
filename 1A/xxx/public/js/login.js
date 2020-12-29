$('.showPas').on('click', function () {
  console.log($('.password').attr('type'));
  if ($('.password').attr('type') == 'password') {
    $('.password').attr('type', 'text');
    $('.showPas').text('隐藏密码');
  } else {
    $('.password').attr('type', 'password');
    $('.showPas').text('显示密码');
  }
})
$('.loginbtn').on('click', function () {
  let username = $('.username').val();
  let password = $('.password').val();
  // 判断用户
  if (!username) {
    $('.usernameMsg').text('用户名不能为空');
    return false;
  }
  if (username.length < 2 || username.length > 10) {
    $('.usernameMsg').text('用户名长度为2-10');
    return false;
  }
  $('.usernameMsg').text('');
  // 判断密码
  if (!password) {
    $('.passwordMsg').text('密码不能为空');
    return false;
  }
  if (password.length < 5 || password.length > 10) {
    $('.passwordMsg').text('密码长度为5-10');
    return false;
  }
  $('.passwordMsg').text('');
  console.log(username, password);
  $.get(`http://localhost:3000/web/login?username=${username}&password=${password}`, function (data) {
    console.log(data);
    if (data.length && data[0].username == username) {
      sessionStorage.setItem('user', JSON.stringify(data));
      window.location.href = 'http://localhost:3000/index';
    } else {
      $('.userMsg').text('用户不存在或密码错误');
    }
  });
})