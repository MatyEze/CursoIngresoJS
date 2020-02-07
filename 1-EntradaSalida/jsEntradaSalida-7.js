/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numeroA;
    var numeroB;
    var resSum;

    numeroA = document.getElementById("numeroUno").value;
    numeroB = document.getElementById("numeroDos").value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);


    resSum = numeroA + numeroB;
    alert(`el resultado de ${numeroA} + ${numeroB} es ${resSum}`);
}

function restar()
{
    var numeroA;
    var numeroB;
    var resRes;

    numeroA = document.getElementById("numeroUno").value;
    numeroB = document.getElementById("numeroDos").value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);


    resRes = numeroA - numeroB;
    alert(`el resultado de ${numeroA} - ${numeroB} es ${resRes}`);
}

function multiplicar()
{ 
    var numeroA;
    var numeroB;
    var resMult;

    numeroA = document.getElementById("numeroUno").value;
    numeroB = document.getElementById("numeroDos").value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);


    resMult = numeroA * numeroB;
    alert(`el resultado de ${numeroA} x ${numeroB} es ${resMult}`);
}

function dividir()
{
    var numeroA;
    var numeroB;
    var resDiv;

    numeroA = document.getElementById("numeroUno").value;
    numeroB = document.getElementById("numeroDos").value;
    numeroA = parseInt(numeroA);
    numeroB = parseInt(numeroB);


    resDiv = numeroA / numeroB;
    alert(`el resultado de ${numeroA} / ${numeroB} es ${resDiv}`);
}

