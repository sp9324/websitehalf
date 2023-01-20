var i = 0;
var txt = 'Action movies';
var speed = 90;

window.onload = function typeWriter() {
    window.scrollTo(0,0);
    if (i < txt.length) {
        document.getElementById("main-heading").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

const arrow1 = document.getElementById("arrow1");
const arrow2 = document.getElementById("arrow2");
const arrow3 = document.getElementById("arrow3");
const arrow4 = document.getElementById("arrow4");

const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const image4 = document.getElementById("image4");

arrow1.addEventListener("click", function () {
    window.scrollTo(0, 700);
})
arrow2.addEventListener("click", function () {
    window.scrollTo(0, 1386);
})
arrow3.addEventListener("click", function () {
    window.scrollTo(0, 2088);
})
arrow4.addEventListener("click", function () {
    window.scrollTo(0, 2788);
})
  