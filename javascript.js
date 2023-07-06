 //页面box出现的动画
 window.onload = function() {

     var timer = setInterval(appear, 1);
     var val1 = 0.01,
         val2 = 0.01;
     var Sun = document.getElementById('sun');
     var Box = document.getElementById('body_box');

     function appear() {

         Box.style.opacity = val1;
         Sun.style.opacity = val2;
         val1 += 0.01;
         val2 += 0.005;
         if (val2 >= 1.0) { //把setInterval关了
             clearInterval(timer);
         }
     }
 }

 function jump_login() { // 跳转到登录
     var timer = setInterval(disappear, 1);
     var val1 = 1;
     var Sun = document.getElementById('sun');
     var Box = document.getElementById('body_box');

     function disappear() {
         Box.style.opacity = val1;
         Sun.style.opacity = val1;
         val1 -= 0.01;
         if (val1 <= 0) {
             clearInterval(timer);
             window.location.href = "HOME_login.html";
         }
     }
 }

 function jump_register() { // 跳转到注册
     var timer = setInterval(disappear, 1);
     var val1 = 1;
     var Sun = document.getElementById('sun');
     var Box = document.getElementById('body_box');
     `qs`

     function disappear() {
         Box.style.opacity = val1;
         Sun.style.opacity = val1;
         val1 -= 0.01;
         if (val1 <= 0) {
             clearInterval(timer);
             window.location.href = "HOME_register.html";
         }
     }
 }

 //Submit_login
 function Submit_login() {

     var Name = document.getElementById("name"),
         Password = document.getElementById("password");
     var wrong = document.getElementById('wrong');
     //输入空
     if (Name.value == "" || Password.value == "") {
         submitWrong();
         wrong.innerHTML = "Please enter the user name and password";
         return;
     }
     var name = Name.value,
         password = Password.value;
     //用户名不存在
     if (!localStorage.getItem(name)) {
         submitWrong();
         wrong.innerHTML = "The user name does not exist";
         return;
     }
     var user = localStorage.getItem(name);
     var user_info = JSON.parse(user);
     if (password != user_info.password) {
         submitWrong();
         wrong.innerHTML = "Incorrect password";
         return;
     } else {
         submitRight();
         wrong.innerHTML = " ";
         alert("Log in successfully");
         window.location.href = "PersonInfo.html";
     }
 }


 //Submit_register
 function Submit_register() {
     var Name = document.getElementById("name"),
         Password = document.getElementById("password"),
         Password2 = document.getElementById("password2"),
         Email = document.getElementById("email");
     var name,
         password,
         password2,
         email;
     //不合法
     if (!Name.checkValidity() || !Password.checkValidity() || !Name.checkValidity() || !Email.checkValidity()) {
         submitWrong();
         return;
     }
     //获得值
     name = Name.value,
         password = Password.value,
         password2 = Password2.value,
         email = Email.value;
     //两次密码不一样
     if (password != password2) {
         submitWrong();
         alert("The two passwords are different");
         return;
     }
     var user = {
         "name": name,
         "password": password,
         "email": email
     };
     localStorage.setItem(name, JSON.stringify(user));
     console.log("Registration saved");
     alert("Registration succeeded");
 }
 //Submit不合法变色
 function submitWrong() {
     document.getElementById("submit").style.color = "red";
 }
 //Submit合理
 function submitRight() {
     document.getElementById("submit").style.color = "white";
 }