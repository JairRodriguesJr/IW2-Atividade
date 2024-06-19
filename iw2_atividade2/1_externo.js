function Calc(){
	 let hora = document.getElementById("lhora").value;
	 let total = document.getElementById("ltotal").value;
	 let valor = document.getElementById("valor");
	 
valor.innerHTML =parseInt(hora)  * parseInt(total);
}

