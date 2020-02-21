function mostrar() {
	var i = 0;
	var res = 0;
	var num

	while (i < 5) {
		num = parseInt(prompt("Ingrese " + (5 - i) + " numeros"));
		res = res + num;
		i++;
	}

	document.getElementById("suma").value = res;
	document.getElementById("promedio").value = res / i;



} //FIN DE LA FUNCIÓN