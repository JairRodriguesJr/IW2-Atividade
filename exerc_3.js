//id

let h = document.getElementById('x');
// mudar a cor
h.style.color= 'red'

//tagname
const element = document.getElementsByTagName("h2");

document.getElementById("2").innerHTML = 'Esse texto (index 0) é: ' + element[0].innerHTML;

//className
const c = document.getElementsByClassName("exemplo_cor");
c[0].style.backgroundColor = "red";
