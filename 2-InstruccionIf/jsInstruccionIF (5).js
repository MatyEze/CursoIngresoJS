function mostrar()
{
//tomo la edad  
    var edad;

    edad = parseInt(document.getElementById("edad").value);

    if(edad < 13 || edad >17){
            alert("tu edad es "+edad+" años y no sos adolescente");
    }


}//FIN DE LA FUNCIÓN