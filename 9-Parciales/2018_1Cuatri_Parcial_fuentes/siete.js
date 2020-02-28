function mostrar() {

    var gen;
    var nota;
    var sumnotas = 0;
    var notabaja;
    var genbaja;
    var cmascn6 = 0;
    var i;

    for (i = 1; i <= 5; i++) {

        nota = parseInt(prompt("Ingrese la nota del " + i + "° alumno/a"));
        while (isNaN(nota) || nota < 0 || nota > 10) {
            nota = parseInt(prompt("Dato invalido. la nota debe ser un NUMERO entre 0 y 10"));
        }

        gen = prompt("Ingrese el genero del " + i + "° alumno/a").toLowerCase();
        while (gen != "f" && gen != "m") {
            gen = prompt("Ingrese el genero del alumno/a").toLowerCase();
        }

        if (i == 1 || nota < notabaja) {
            notabaja = nota;
            genbaja = gen;
        }

        if (gen == "m" && nota >= 6) { cmascn6++; }

        sumnotas = sumnotas + nota;
    }

    if (genbaja == "m") {
        genbaja = "masculino";
    } else {
        genbaja = "femenino";
    }

    alert("El promedio de las notas es : " + sumnotas / 5
        + "\nLa nota mas baja es " + notabaja + " y es de un alumno/a de genero " + genbaja
        + "\nCantidad de varones con nota mayor o igual a 6 : " + cmascn6)

}
/*
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) ,
el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/
