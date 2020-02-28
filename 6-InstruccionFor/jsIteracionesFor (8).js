function mostrar() {

    var i;
    var id;
    var iverf = 0;
    var num = parseInt(prompt("Ingrese un numero"));

    for (i = 2; i <= num; i++) {

        for (id = 1; id <= i; id++) {
            if (i % id == 0) {
                iverf++;
            }
            if (iverf == 2) {
                console.log(i);
            }
        }
    }


}//FIN DE LA FUNCIÓN