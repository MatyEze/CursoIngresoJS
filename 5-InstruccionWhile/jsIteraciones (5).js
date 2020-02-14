function mostrar() {

    var sexo = prompt("ingrese f ó m .");

    while (sexo != "f" && sexo != "m") {
        sexo = prompt("ingrese f ó m .");
    }

    if (sexo == "m") {
        sexo = "Masculino";
    } else {
        sexo = "Femenino";
    }


    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN