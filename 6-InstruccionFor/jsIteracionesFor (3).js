function mostrar() {

    var rep = prompt("ingrese el número de repeticiones");
    while (isNaN(rep) || rep <= 0) {
        rep = prompt("Dato invalido. ingrese el número de repeticiones");
    }

    for (i = 0; i < rep; i++) {

        document.write("Hola UTN FRA <br>");

    }



}//FIN DE LA FUNCIÓN