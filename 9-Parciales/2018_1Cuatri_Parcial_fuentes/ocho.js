function mostrar() {

    var cnp = 0;
    var cnip = 0;
    var cant0 = 0;
    var cantpos = 0;
    var sumpos = 0;
    var sumneg = 0;
    var letramax;
    var numeromax=0;
    var letramin;
    var numeromin;
    var num;
    var letra;
    var confirmacion;
    var flag = 0;
    var prompos;

    do {

        letra = prompt("Ingrese una letra.");
        while (!(isNaN(letra))) {
            letra = prompt("Dato invalido, ingrese una letra.");
        }

        num = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (isNaN(num) || num < -100 || num > 100) {
            num = parseInt(prompt("Dato invalido. ingrese un numero entre -100 y 100"));
        }

        confirmacion = prompt("Quiere seguir ingresando datos? ingrese si o no").toLowerCase();
        while (confirmacion != "si" && confirmacion != "s" && confirmacion != "no" && confirmacion != "n") {
            confirmacion = prompt("Dato invalido. ingrese si o no\n(si,s,no,n)").toLowerCase();
        }

        if (num == 0) {
            cant0++;
        } else if (num % 2 == 0) {
            cnp++;
        } else {
            cnip++;
        }

        if (num >= 0) {
            sumpos = sumpos + num;
            cantpos++;
        } else {
            sumneg = sumneg + num;
        }

        if (flag == 0 || num < numeromin) {
            numeromin = num;
            letramin = letra;
        } 
        
        if (flag == 0 || num > numeromax) {
            numeromax = num;
            letramax = letra;
            flag = 1;
        }

        if (cantpos == 0) {
            prompos = 0;
        } else {
            prompos = sumpos / cantpos;
        }




    } while (confirmacion == "s" || confirmacion == "si");

    document.write("Se ingresaron " + cnp + " numeros pares y " + cnip + " inpares<br>");
    document.write("Se ingresaron " + cant0 + " ceros<br>");
    document.write("El promedio de los numeros positivos ingresados es : " + prompos + "<br>");
    document.write("La suma de los numeros negativos es : " + sumneg + "<br>");
    document.write("El menor numero ingresado y su letra es : " + letramin + ", " + numeromin + "<br>");
    document.write("El mayro numero ingresado y su letra es : " + letramax + ", " + numeromax);

}
/*
ingresar una letra y un numero y validar hasta que el usuario quiera

mostrar cantidad de numeros pares
cantidad de inpares
candtidad de 0
el promedio de todos los positivos ingresados
la suma de los negativos
el numero y la letra del maximo y del minimo


*/