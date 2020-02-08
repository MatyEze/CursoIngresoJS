function mostrar() {
    //tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if (edad < 18) {
        alert("Sos menor de edad");
    } else {
        alert(`Tu edad es ${edad} años y sos mayor de edad`);
    }


}//FIN DE LA FUNCIÓN