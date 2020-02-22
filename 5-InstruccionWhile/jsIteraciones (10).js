function mostrar() {

	var ipos = 0;
	var ineg = 0;
	var i0 = 0;
	var neg = 0;
	var pos = 0;
	var np = 0;
	var preg = "Ingrese un numero";
	var son;
	var prpos;
	var prneg;


	do {

		num = parseInt(prompt(preg));
		while (isNaN(num)) {
			num = parseInt(prompt("El dato ingresado no es un numero intente nuevamente."))
		}

		if (num > 0) {

			pos = pos + num;
			ipos++;

		} else if (num < 0) {

			neg = neg + num;
			ineg++;

		} else {
			i0++;
		}

		if (num % 2 == 0) {
			np++;
		}

		son = prompt("Quiere seguir ingresando numeros SI o NO").toLowerCase();
		while (son != "s" && son != "n" && son != "si" && son != "no") {
			son = prompt("Dato invalido, ingrese SI quiere seguir ingresando numeros o NO").toLowerCase();
		}

		preg = "Ingrese otro numero actualmente ingreso " + parseInt(ipos + ineg) + " numeros";

	} while (son == "s" || son == "si");

	if (ipos == 0) {
		prpos = 0;
	} else {
		prpos = parseFloat((pos / ipos).toFixed(2));
	}

	if (ineg == 0) {
		prneg = 0;
	} else {
		prneg = parseFloat((neg / ineg).toFixed(2));
	}


	document.write("La suma de los positivos es : " + pos + "<br>La suma de los negativos es : " + neg + "<br>El promedio de los positivos es : " + prpos + "<br>El promedio de los negativos es : " + prneg + "<br>Se ingresaron " + ipos + " numeros positivos y " + ineg + " negativos<br>Se ingresaron " + i0 + " ceros<br>Se ingresaron " + np + " numeros pares<br>La diferencia entre los positivos y los negativos es : " + (ipos - ineg))
	//"La sumas de los positivos es : "+pos+"<br>La suma de los negativos es : "+neg+"<br>El promedio de los positivos es : "+(pos/ipos)+"<br>El promedio de los negativos es : "+(neg/ineg)+"<br>Se ingresaron "+ipos+" numeros positivos y "+ineg+" negativos<br>Se ingresaron "+i0+" ceros<br>Se ingresaron "+np+" numeros pares<br>La diferencia entre los positivos y los negativos es : "+(ipos-ineg);



}//FIN DE LA FUNCIÓN

/*
sumar positivos ,cantidad de positivos, promedio de positivos
sumar negativos cantidad de negativos, promedio de negativos
cantidad de 0(ceros)
cantidad de numeros pares
diferencia entre positivos y negativos

*/