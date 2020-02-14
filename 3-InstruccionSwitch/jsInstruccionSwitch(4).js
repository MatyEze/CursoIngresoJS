function mostrar() {
    var mes

    mes = document.getElementById("mes").value;

    switch (mes) {
                                  //NO en 2020
        case "Febrero":
            alert("tiene 28 días");
            break;
        case "Abril":
        case "Marzo":
        case "Junio":
        case "Septiembre":
        case "Noviembre":
            alert("tiene 30 días");
            break;
        default:
            alert("tiene 31 días");
            break;

    }





}//FIN DE LA FUNCIÓN