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

 // 跳转到景区信息
 function jumpScenic() {
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
             window.location.href = "Scenic.html";
         }
     }
 }

 // 跳转到星级酒店
 function jumpHotel() {
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
             window.location.href = "../HOTELS/HOME.html";
         }
     }
 }

 // 跳转到旅行社
 function jumpTravelAgency() {
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
             window.location.href = "../TravelAgency/HOME.html";
         }
     }
 }

 // 跳转到导游
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
             window.location.href = "Guide.html";
         }
     }
 }



 // 跳转到停车场
 function jumpParkingLot() {
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
             window.location.href = "ParkingLot.html";
         }
     }
 }

 // 跳转到游客
 function jumpTourist() {
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
             window.location.href = "Tourist.html";
         }
     }
 }

 // 跳转到应急处理
 function jumpSOS() {
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
             window.location.href = "SOS.html";
         }
     }
 }