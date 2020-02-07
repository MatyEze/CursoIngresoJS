/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    var numeroA;
    var numeroB;
    var resultado;

    numeroA = document.getElementById("numeroUno").value;
    numeroB = document.getElementById("numeroDos").value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);


    resultado = numeroA + numeroB;
    alert(`el resultado de la suma es ${resultado}`);

    
}

