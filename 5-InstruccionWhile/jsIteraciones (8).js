function mostrar() {

	var pos = 0;
	var neg = 1;
	var num;
	var i = 0;
	var i2 = 0;
	var preg = "Ingrese un numero positivo o negativo";
	var son;

	do {

		num = parseInt(prompt(preg));
		while (isNaN(num)) {
			num = parseInt(prompt("El dato ingresado no es un numero intente nuevamente"))
		}

		if (num >= 0) {

			pos = pos + num;
			i++;

		} else {

			neg = neg * num;
			i2++;

		}

		son = prompt("Quiere seguir ingresando numeros SI o NO.").toLowerCase();
		while (son != "s" && son != "n" && son != "si" && son != "no") {
			son = prompt("Dato invalido, ingrese SI quiere seguir ingresando numeros o NO").toLowerCase();
		}

		preg = "Ingrese un numero, ya ingreso " + i + " numeros positivos y " + i2 + " negativos."

	} while (son == "s" || son == "si");


	if (i2 == 0) {
		neg = 0;
	}
	document.getElementById("suma").value = pos;
	document.getElementById("producto").value = neg;

}//FIN DE LA FUNCIÓN