/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {

    var lt = parseFloat(document.getElementById("Largo").value);
    var at = parseFloat(document.getElementById("Ancho").value);
    var res;

    res = (lt * 2 + at * 2).toFixed(2);
    alert("Se debe comprar " + res + "m de alambre");

}
function Circulo() {
    var rt = parseFloat(document.getElementById("Radio").value);

    res = (2 * Math.PI * rt).toFixed(2);
    alert("Se debe comprar " + res + "m de alambre");

}
function Materiales() {

    var lt = parseFloat(document.getElementById("Largo").value);
    var at = parseFloat(document.getElementById("Ancho").value);
    var res;
    var cal;
    var cem;

    res = (at * lt);
    cal = res * 3;
    cem = res * 2;
    alert("Se nesecitan " + cem + " bolsas de cemento y " + cal + " de cal para hace el contrapiso de " + res + "m2")
}