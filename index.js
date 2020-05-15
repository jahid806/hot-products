var i = 0;
var txt = '- Pro Apple';
var speed = 200;

function myfun() {
  if (i < txt.length) {
    document.getElementById("m").innerHTML += txt.charAt(i);
    i++;
    setTimeout(myfun, speed);
  }
}