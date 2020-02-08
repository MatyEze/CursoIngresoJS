function mostrar() {
    //tomo la edad  
    var edad;
    var eCivil;

    edad = parseInt(document.getElementById("edad").value);
    eCivil = document.getElementById("estadoCivil").value;

    if (edad > 18 & eCivil == "Soltero") {
        alert("Es soltero y no es menor");
    }



}//FIN DE LA FUNCIÓN