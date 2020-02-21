/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var res;

    res = precio1 + precio2 + precio3;
    alert("La suma de los precios es $" + res);

}
function Promedio() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var res;

    res = (precio1 + precio2 + precio3) / 3;
    alert("El promedio de los precios es $" + res.toFixed(2));

}
function PrecioFinal() {

    var precio1 = parseFloat(document.getElementById("PrecioUno").value);
    var precio2 = parseFloat(document.getElementById("PrecioDos").value);
    var precio3 = parseFloat(document.getElementById("PrecioTres").value);
    var res;

    res = precio1 + precio2 + precio3;
    res = res + (res * 0.21);
    alert("El total con el iva incluido es $" + res.toFixed(2));

}