"use strict"

/* Operador condicional */

var edad = 18;
/* condicional simple */

if (edad = 18) {
    console.log("Bienvenido, diríjase a la mesa de votación");
}
console.log(" ");

console.log("INGRESO DE PERSONAS A LOS AMBIENTES SEGUN EL AFORO");
console.log(" ");

/* Condicional compuesto */
/* Ambiebte 1 para 20 personas  */
/* Ambiente 2 para 40 personas */
/* Bioauditorio 100 personas  */

var ingreso1 = 30;
var ingreso2 = 70;
var ingreso3 = 130;
var ingreso4 = 10;
var ambiente1 = "ambiente1";
var ambiente2 = "ambiente2";
var ambiente3 = "bioauditorio";
var aforo1 = 20;
var aforo2 = 40;
var aforo3 = 100;

console.log("Ingreso de 30 personas");
if (ingreso1 < aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente1);
}
else if (ingreso1 <= aforo2 && ingreso1 > aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente2);
}
else if (ingreso1 <= aforo3 && ingreso1 > aforo2) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente3);
}
else if (ingreso1 > 100) {
    console.log("No hay ambiente con el aforo suficiente");
}
else {
    console.log("Ha surgido un error.");
}
console.log(" ");


console.log("Ingreso de 70 personas");
if (ingreso2 <= aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente1);
}
else if (ingreso2 <= aforo2 && ingreso2 > aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente2);
}
else if (ingreso2 < aforo3 && ingreso2 > aforo2) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente3);
}
else if (ingreso3 > 100) {
    console.log("No hay ambiente con el aforo suficiente");
}
else {
    console.log("Ha surgido un error.");
}
console.log(" ");


console.log("Ingreso de 130 personas");
if (ingreso3 <= aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente1);
}
else if (ingreso3 <= aforo2 && ingreso3 > aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente2);
}
else if (ingreso3 < aforo3 && ingreso3 > aforo2) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente3);
}
else if (ingreso3 > 100) {
    console.log("No hay ambiente con el aforo suficiente");
}
else {
    console.log("Ha surgido un error.");
}
console.log(" ");


console.log("Ingreso de 10 personas");
if (ingreso4 <= aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente1);
}
else if (ingreso4 <= aforo2 && ingreso4 > aforo1) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente2);
}
else if (ingreso4 <= aforo3 && ingreso4 > aforo2) {
    console.log("El ambiente con el aforo suficiente para el ingreso es: " + ambiente3);
}
else if (ingreso4 > 100) {
    console.log("No hay ambiente con el aforo suficiente");
}
else {
    console.log("Ha surgido un error.");
}
console.log(" ");

/* Condicional anidado */
/* Sistema para determinar el descuento del usuario */
/* Si el usuario es menor de 10 años o mayor a 70 años tiene descuento sobre el valor del tiquete de 10% 
Si el destino es Cartagena, estos usuarios tiene un descuento adicional del 10%
Si la aerolínea es Latam, estos usuarios tiene descuento adicional de 10% */
console.log("CONDICIONAL ANIDADO");
console.log(" ");
var edadUsuario = 71;
var aerolineaUsuario = "Latam";
var destinoUsuario = "San Andres"; 
var valorTiquete = 250000;
var descuento = .10;
var valorDescuento = (valorTiquete * .10);

if ( edadUsuario <= 10 || edadUsuario >= 70) {
    valorTiquete = (valorTiquete - valorDescuento);
    if ( destinoUsuario === "Cartagena") {
        valorTiquete = (valorTiquete - valorDescuento);
        if (aerolineaUsuario === "Latam") {
            valorTiquete = (valorTiquete - valorDescuento);
        }
    }
}
console.log("El valor del Tiquete es: $" + valorTiquete);