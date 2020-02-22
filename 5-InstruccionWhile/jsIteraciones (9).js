function mostrar() {

	var i = 0;
	var menor = 0;
	var mayor = 0;
	var num = 0;
	var son;
	var preg = "Ingrese un numero";

	do {

		num = parseInt(prompt(preg));
		while (isNaN(num)) {
			num = parseInt(prompt("El dato ingresado no es un numero intente nuevamente."))
		}

		if (i == 0) {
			mayor = num;
			menor = num;
		} else if (num > mayor) {
			mayor = num;
		} else {
			menor = num;
		}

		son = prompt("Quiere seguir ingresando numeros SI o NO \nActualmente el menor es " + menor + " y el mayor " + mayor).toLowerCase();
		while (son != "s" && son != "n" && son != "si" && son != "no") {
			son = prompt("Dato invalido, ingrese SI quiere seguir ingresando numeros o NO").toLowerCase();
		}

		i++;
		preg = "Ingrese otro numero ya ingreso " + i + " numeros y actualmente el menor es " + menor + " y el mayor " + mayor;


	} while (son == "s" || son == "si");

	document.getElementById("maximo").value = mayor;
	document.getElementById("minimo").value = menor;





}//FIN DE LA FUNCIÓN