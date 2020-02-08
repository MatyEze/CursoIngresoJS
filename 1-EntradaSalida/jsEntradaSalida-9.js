/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var aum;
    
    sueldo = document.getElementById("sueldo").value;
    sueldo = parseFloat(sueldo);

    aum = sueldo * 0.1;
    sueldo = sueldo + aum;

    document.getElementById("resultado").value = sueldo.toFixed(2);
}
