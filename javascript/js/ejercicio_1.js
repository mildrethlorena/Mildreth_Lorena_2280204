"use strict"
 /* Ejercicio 1 */
 console.log("------Ejercicio #1-------");
 var precioCamisa= 30000;
 var precioJean= 70000;
 var precioChaqueta= 50000;
 var precioZapato= 90000;

if (precioZapato>precioCamisa && precioZapato>precioJean && precioZapato>precioChaqueta){
    console.log("El precio mas alto es el de la Malteada, que tiene un costo de  $"+ precioZapato );
}
else if (precioJean>precioCamisa && precioJean>precioChaqueta && precioJean>precioZapato){
    console.log("El precio mas alto es el de la Gaseosa, que tiene un costo de  $"+ precioJean );
}
else if (precioChaqueta>precioCamisa && precioChaqueta>precioJean && precioChaqueta>precioZapato){
    console.log("El precio mas alto es el del JugoNatural, que tiene un costo de  $"+ precioChaqueta );
}
else if (precioCamisa>precioJean && precioCamisa>precioChaqueta && precioCamisa>precioZapato) {
    console.log("El precio mas alto es el del Yogurt, que tiene un precio de:" + precioCamisa);  
}
////////////////////////////////
if (precioZapato<precioCamisa && precioZapato<precioJean && precioZapato<precioChaqueta){
    console.log("El precio mas bajo es el de la Malteada, que tiene un costo de  $"+ precioZapato );
}
else if (precioJean<precioCamisa && precioJean<precioChaqueta && precioJean<precioZapato){
    console.log("El precio mas bajo  es el de la Gaseosa, que tiene un costo de  $"+ precioJean );
}
else if (precioChaqueta<precioCamisa && precioChaqueta<precioJean && precioChaqueta<precioZapato){
    console.log("El precio mas bajo es el del JugoNatural, que tiene un costo de  $"+ precioChaqueta );
}
else if (precioCamisa<precioJean && precioCamisa<precioChaqueta && precioCamisa<precioZapato) {
    console.log("El precio mas bajo es el del Yogurt, que tiene un precio de:" + precioCamisa);  
}
else{
    console.log(
        "Ha surgido un error en el sistema");
}

/* Ejercicio 2 */
console.log("------Ejercicio #2-------");

var user="Mildreth Lorena";
var password=4877;
 
if(user=="Mildreth Lorena" && password==4877){
    console.log("Bienvenidos:)" ); 
}
else{
    console.log("Usuario Invalido");
}

/* Ejercicio 3 */
console.log("------Ejercicio #3-------");
var bultoNaranja= 150000;
var bultoBanano= 200000;
var bultoMelon= 250000;

var descuento1=  0.5;
var descuento2= 0.4;
var descuento3= 0.3;

var valorDescuento1 = (bultoNaranja * 0.05);
var valorDescuento2 = (bultoBanano * 0.04);
var valorDescuento3 = (bultoMelon * 0.03);

if(bultoNaranja>=150000){
    console.log("Bulto Naranja");
    console.log("subtotal = $" + bultoNaranja );
    console.log("Descuento de 5% = $" + descuento1 );
    console.log("Total = $" + (bultoNaranja - valorDescuento1)  );
}
else if(bultoNaranja>=300000){
    console.log("Bulto Naranja");
    console.log("subtotal = $" + bultoNaranja );
    console.log("Descuento de 4% = $" + descuento2 );
    console.log("Total = $" + (bultoNaranja - valorDescuento2)  );
}
else if(bultoNaranja>=450000){
    console.log("Bulto Naranja");
    console.log("subtotal = $" + bultoNaranja );
    console.log("Descuento de 3% = " + descuento3 );
    console.log("Total =" + (bultoNaranja - valorDescuento3)  );
}
else {
    console.log("Se produjo un error");
}
/////////////////////////////

if(bultoBanano>=200000){
    console.log("Bulto Banano");
    console.log("subtotal = $" + bultoBanano );
    console.log("Descuento de 4%= " + descuento2 );
    console.log("Total =" + (bultoBanano - valorDescuento2)  );
}
else if(bultoBanano>=300000){
    console.log("Bulto Banano");
    console.log("subtotal = $" + bultoBanano );
    console.log("Descuento de 5%= " + descuento1 );
    console.log("Total =" + (bultoBanano - valorDescuento1)  );
}
else if (bultoBanano>=100000){
    console.log("Bulto Banano");
    console.log("subtotal = $" + bultoBanano );
    console.log("Descuento de 3% = " + descuento3 );
    console.log("Total =" + (bultoBanano - valorDescuento3)  );
}
else {
    console.log("Se produjo un error");
}
/////////////////

if(bultoMelon>=25000){
    console.log("Bulto Melon");
    console.log("subtotal = $" + bultoMelon );
    console.log("Descuento de 3% = " + descuento3 );
    console.log("Total =" + (bultoMelon - valorDescuento3)  );
}
else if(bultoMelon>=150000){
    console.log("Bulto Melon");
    console.log("subtotal = $" + bultoMelon );
    console.log("Descuento de 5% = " + descuento1 );
    console.log("Total =" + (bultoMelon - valorDescuento1)  );
}
else if(bultoMelon>=200000){
    console.log("Bulto Melon");
    console.log("subtotal = $" + bultoMelon );
    console.log("Descuento de 4% = " + descuento2 );
    console.log("Total =" + (bultoMelon - valorDescuento2)  );
}
else {
    console.log("Se produjo un error");
}