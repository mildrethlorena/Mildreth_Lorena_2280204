"use strict"

/* declarar el valor de cada variable */
var costoSinIva = 32000;
var costoIva = 3200;
var domicilio = 3000;
var costoTotal = costoIva + costoSinIva + domicilio; 

/* Mostrar el valor final del producto */
console.log("El costo total es de: $" + costoTotal);

console.log("El límite para usar un entero es: " + Number.MAX_SAFE_INTEGER);
/* la siguiente operacion genera un error por sobrepasar el limite de numeros*/
var numMaximo = Number.MAX_SAFE_INTEGER;
console.log(numMaximo + 586748);