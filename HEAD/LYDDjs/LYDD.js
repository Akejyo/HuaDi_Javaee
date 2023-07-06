//页面box出现的动画
window.onload = function() {

    var timer = setInterval(appear, 1);
    var val1 = 0.01;
    var Shell = document.getElementById('body');

    function appear() {
        Shell.style.opacity = val1;
        val1 += 0.01;
        if (val1 >= 1.0) { //把setInterval关了
            clearInterval(timer);
        }
    }
    document.querySelector("#t1B").onclick = function() {
        document.querySelector("#t1").scrollIntoView(true);
    }
    document.querySelector("#t2B").onclick = function() {
        document.querySelector("#t2").scrollIntoView(true);
    }
}