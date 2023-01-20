const descBtn1 = document.getElementById("ind-desc-btn1");
const descBtn2 = document.getElementById("ind-desc-btn2");
const descBtn3 = document.getElementById("ind-desc-btn3");
const descBtn4 = document.getElementById("ind-desc-btn4");
const descBtn5 = document.getElementById("ind-desc-btn5");
const descBtn6 = document.getElementById("ind-desc-btn6");
const descBtn7 = document.getElementById("ind-desc-btn7");
const descBtn8 = document.getElementById("ind-desc-btn8");

var i = 0;
var txt = ' Lorem ipsum dolor sit amet';
var speed = 90;
function typeWriter1() {
    if (i < txt.length) {
        document.getElementById("ind-desc-btn1").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}

var j = 0;
var txt = ' Lorem ipsum dolor sit amet';
var speed = 90;
function typeWriter2() {
    if (j < txt.length) {
        document.getElementById("ind-desc-btn2").innerHTML += txt.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}

var k = 0;
var txt = '  Lorem ipsum dolor sit amet';
var speed = 90;
function typeWriter3() {
    if (k < txt.length) {
        document.getElementById("ind-desc-btn3").innerHTML += txt.charAt(k);
        k++;
        setTimeout(typeWriter3, speed);
    }
}

var l = 0;
var txt = '  Lorem ipsum dolor sit';
var speed = 90;
function typeWriter4() {
    if (l < txt.length) {
        document.getElementById("ind-desc-btn4").innerHTML += txt.charAt(l);
        l++;
        setTimeout(typeWriter4, speed);
    }
}

var m = 0;
var txt = '  Lorem ipsum dolor sit';
var speed = 90;
function typeWriter5() {
    if (m < txt.length) {
        document.getElementById("ind-desc-btn5").innerHTML += txt.charAt(m);
        m++;
        setTimeout(typeWriter5, speed);
    }
}

var n = 0;
var txt = ' Lorem ipsum dolor sit';
var speed = 90;
function typeWriter6() {
    if (n < txt.length) {
        document.getElementById("ind-desc-btn6").innerHTML += txt.charAt(n);
        n++;
        setTimeout(typeWriter6, speed);
    }
}

var o = 0;
var txt = '  Lorem ipsum dolor sit';
var speed = 90;
function typeWriter7() {
    if (o < txt.length) {
        document.getElementById("ind-desc-btn7").innerHTML += txt.charAt(o);
        o++;
        setTimeout(typeWriter7, speed);
    }
}

var p = 0;
var txt = '  Lorem ipsum dolor sit';
var speed = 90;
function typeWriter8() {
    if (p < txt.length) {
        document.getElementById("ind-desc-btn8").innerHTML += txt.charAt(p);
        p++;
        setTimeout(typeWriter8, speed);
    }
}

