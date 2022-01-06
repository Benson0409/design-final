var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");

btn1.onclick = function() {
    img1.style.display = "block";


    img2.style.display = "none";
    img3.style.display = "none";
}
btn2.onclick = function() {
    img2.style.display = "block";

    img1.style.display = "none";

    img3.style.display = "none";
}
btn3.onclick = function() {
    img3.style.display = "block";

    img1.style.display = "none";
    img2.style.display = "none";

}