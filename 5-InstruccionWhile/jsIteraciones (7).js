function mostrar() {
	var i = 0;
	var res = 0;
	var num
	var SoN
	var preg = "Ingrese un numero";

	do {
		num = parseInt(prompt(preg));
		i++;
		res = res + num;
		SoN = prompt("Quiere seguir ingresando numeros Si o NO.").toLowerCase();

		while (SoN != "s" && SoN != "si" && SoN != "n" && SoN != "no") {
			SoN = prompt("Error, ingrese Si quiere seguir o NO ingresando numeros. \nDatos validos (s,si,S,SI,n,no,N,NO).");
		}

		preg = "Ingreso " + i + " numeros";

	} while (SoN == "s" || SoN == "si")

	if (i == 1) {
		document.getElementById("suma").value = num;
		document.getElementById("promedio").value = num;
	} else {
		document.getElementById("suma").value = res;
		document.getElementById("promedio").value = parseFloat((res / i).toFixed(2));
	}


} //FIN DE LA FUNCIÓN 