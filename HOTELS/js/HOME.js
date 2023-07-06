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

 // 1
 function jump1() {
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
             window.location.href = "Hotel1/info.html";
         }
     }
 }

 // 2
 function jump2() {
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
             window.location.href = "Hotel2/info.html";
         }
     }
 }

 // 3
 function jumpRescueVehicle() {
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
             window.location.href = "Hotel3/info.html";
         }
     }
 }

 // 4
 function jumpGuide() {
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
             window.location.href = "Hotel4/info.html";
         }
     }
 }