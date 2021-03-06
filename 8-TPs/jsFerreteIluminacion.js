/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {

    var cant = parseInt(document.getElementById("Cantidad").value);
    var marca = document.getElementById("Marca").value;
    var precio = 35
    var imp;

    if (cant >= 3) {

        if (marca == "ArgentinaLuz") {
            switch (cant) {

                case 3:
                    precio = precio - (precio * 0.15);
                    break;
                case 4:
                    precio = precio - (precio * 0.25);
                    break;
                case 5:
                    precio = precio - (precio * 0.4);
                    break;

                default:
                    precio = precio - (precio * 0.5);
                    break;
            }
        } else if (marca == "FelipeLamparas") {

            switch (cant) {

                case 3:
                    precio = precio - (precio * 0.1);
                    break;
                case 4:
                    precio = precio - (precio * 0.25);
                    break;
                case 5:
                    precio = precio - (precio * 0.3);
                    break;

                default:
                    precio = precio - (precio * 0.5);
                    break;
            }
        } else {

            switch (cant) {

                case 3:
                    precio = precio - (precio * 0.05);
                    break;
                case 4:
                    precio = precio - (precio * 0.20);
                    break;
                case 5:
                    precio = precio - (precio * 0.3);
                    break;

                default:
                    precio = precio - (precio * 0.5);
                    break;
            }
        }

        if (precio * cant > 120) {

            imp = (precio * cant) * 0.1;
            document.getElementById("precioDescuento").value = precio.toFixed(2);
            alert("IIBB Usted pago $" + ((precio * cant) + imp).toFixed(2) + " , siendo $" + imp.toFixed(2) + " el impuesto que se pagó.")

        } else {
            document.getElementById("precioDescuento").value = precio.toFixed(2);
            alert("El total de la compra es : $" + precio * cant);
        }



    } else {
        alert("Son menos de 3 por lo que no se aplica ningun descuento")
    }

}
