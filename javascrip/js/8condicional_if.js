/* operador condicional */
"use stick"
/* cpndicional simple */
var edad = 18;
if (edad >= 18);
console.log('Bienvenido. dirigase a la mesa de votación');

/* condicional compuesta */
/* ambiente 1: 20 personas */
/* ambiente 2: 40 personas */
/* bioauditorio: 100 personas */
/* informar si no hay ambiente con capacidad suficiente */
/* informar si ha surgio un error */

var cantidadpersonas = 30;

if (cantidadpersonas >=1 && cantidadpersonas <= 20) {
    console.log ('por favor dirigirse al ambiente n. 2');
}
else if (cantidadpersonas >=1 && cantidadpersonas <= 20) {
    console.log ('por favor dirigirse al ambiente n. 2');
}

/* condicional anidado */ 
/* si el ususario es menos de 10 años o mayor a 70 años 
tiene un descuento sobre el valor del los tiquetes 10%, si la aerolinea es latam si el 
aerolinea es latam a dicho destino cartagena tiene descuento de  10%*/ 
var edadusuario =71;
var aerolinausuario = "latam";
var destinousuario ="San andres";
var valortiquete ='250.000';
var descuento = .10;
varvalordescuento = (valortiquete * .10)

if (edadusuario <= 10 || edadusuario >= 70) {
    valortiquete =  (valortiquete * descuento);
    if (destinousuario === "cartagena") {
        valortiquete =  (valortiquete * descuento);
    if ( aerolinausuario === "latam") {
        valortiquete = (valortiquete * descuento);
        } 
    }
}
console.log ("valor del tiquete: $" +  valortiquete)