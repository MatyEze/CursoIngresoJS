function mostrar()
{
//tomo la edad  
    var edad;
    var eCivil;

    edad = parseInt(document.getElementById("edad").value);
    eCivil = document.getElementById("estadoCivil").value;

    if(edad < 18 & eCivil != "Soltero"){
        alert("Es muy pequeño para no ser soltero");
    }   else{
            alert("su edad es "+edad+" años "+"y su estado civil es "+eCivil);
    }


}//FIN DE LA FUNCIÓN