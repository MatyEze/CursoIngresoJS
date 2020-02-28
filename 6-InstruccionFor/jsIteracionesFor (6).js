function mostrar() {

    var i;
    var ip = 0;
    var nfin = parseInt(prompt("Ingrese un numero."));

    for (i = 0; i <= nfin; i++) {

        if (i % 2 == 0) {
            ip++;
            console.log(i);
        }

    }

    console.log("Pares encontrados : " + ip);





}//FIN DE LA FUNCIÓN

/*
al presionar el botón pedir un número.
mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.
*/