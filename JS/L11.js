var btn1 = document.querySelector('.btn1');
btn1.onclick = function() {

    document.querySelector('#ct1').innerHTML = 'HELLO JAVASCRIPT';
}

var btn2_1 = document.querySelector('.btn2-1');
var btn2_2 = document.querySelector('.btn2-2');
btn2_1.onclick = function() {
    document.querySelector('#myImage').src = "https://www.w3schools.com/js/pic_bulboff.gif"
}
btn2_2.onclick = function() {
    document.querySelector('#myImage').src = "https://www.w3schools.com/js/pic_bulbon.gif"
}

var btn3_1 = document.querySelector('.btn3-1');
var btn3_2 = document.querySelector('.btn3-2');
btn3_1.onclick = function() {
    document.querySelector('#ct3').style.fontSize = "10px";
    document.querySelector('#ct3').style.color = "red";
}
btn3_2.onclick = function() {

    document.querySelector('#ct3').style.fontSize = "36px";
    document.querySelector('#ct3').style.color = "blue";
}

var btn4_1 = document.querySelector('.btn4-1');
var btn4_2 = document.querySelector('.btn4-2');
btn4_1.onclick = function() {
    document.querySelector('#ct4').style.display = "none";

}
btn4_2.onclick = function() {

    document.querySelector('#ct4').style.display = "block";
    document.querySelector('#ct4').style.color = "blue";
    document.querySelector('#ct4').style.fontSize = "36px";
}