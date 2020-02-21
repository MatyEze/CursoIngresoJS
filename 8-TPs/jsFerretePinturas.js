/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
    var temp = parseInt(document.getElementById("Temperatura").value);
    var temp2;

    temp2 = ((temp - 32) * (5 / 9)).toFixed(1);
    alert(temp + " Fahrenheit son " + temp2 + " Centigrados");
}

function CentigradosFahrenheit() {
    
    var temp = parseInt(document.getElementById("Temperatura").value);
    var temp2;

    temp2 = ((temp * (9 / 5)) + 32).toFixed(1);
    alert(temp + " Centigrados son " + temp2 + " Fahrenheit");
}
