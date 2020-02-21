function mostrar() {

	var numero = parseInt(prompt("ingrese un número entre 0 y 9."));

	while (isNaN(numero) || numero < 0 || numero > 9) {
		numero = parseInt(prompt("Dato no valido, ingrese un número entre 0 y 9."));
	}

	document.getElementById("Numero").value = numero;


} //FIN DE LA FUNCIÓN