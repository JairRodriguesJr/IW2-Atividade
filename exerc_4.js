//não consegui fazer todos funcionando ao mesmo tempo
//onmouseover
document.getElementById("d").onmouseover = function() {mouseOver()};
document.getElementById("d").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("d").style.color = "#865cc2";
}

function mouseOut() {
  document.getElementById("d").style.color = "black";
}

//onfocus
document.getElementById("fn").onfocus = function() {myFunction()};

function myFunction() {
  document.getElementById("fn").style.backgroundColor = "#ff006f";
}

//onchange
document.getElementById("a").onchange = function() {myFunction()};

function myFunction() {
  var x = document.getElementById("a");
  x.value = x.value.toUpperCase();
}

//onclick
//document.getElementById("de").onclick = function() {myFunction()};

//function myFunction() {
  //document.getElementById("de").innerHTML = "Você clicou!";
//}