function mostrar() {

    var i;
    var id = 0;
    var num = parseInt(prompt("Ingrese un numero"));

    for (i = 0; i <= num; i++) {

        if (num % i == 0) {
            id++;
            console.log(i);
        }

    }

    console.log("Cantidad de divisores encontrados de : " + id);


}//FIN DE LA FUNCIÓN