"use strict"

/*Generando numeros aleatorios entre 0 y 9.99 */
var numeroAleatorio = Math.random ();
console.log (numeroAleatorio)

/* generando numeros aleatorios entre 1 y 9 */
var numeroAlatorio2 = Math.random() *10;
var numAleatorio2Round = Math.floor (numeroAlatorio2) 
if (numAleatorio2Round === 0) {
    numAleatorio2Round = 1;
}
console.log (numAleatorio2Round);

/*generando numeros aleatorios entre 1 y 99*/

var numeroAlatorio3 = Math.random() *100;
var numAleatorio3Round = Math.floor (numeroAlatorio3)
if (numAleatorio3Round === 0) {
    numAleatorio3Round = 1;
}
console.log (numAleatorio3Round);

/* */