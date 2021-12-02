"use strict"

/* Conventir todo a mayusculas */

var cuidad = "Pitalito ";
var cuidadMayusculas = cuidad.toUpperCase();
console.log("cuidad:"+ cuidadMayusculas)
/* Siempre que utilizamos un metodo lo finalizamos con parentesis. */

 /*Conventir todo a minusculas */

var frase = "FraSe dE pRuEba";
var fraseMinusculas = frase.toLocaleLowerCase();
console.log(fraseMinusculas);

/*Conventir todo a minusculas menos la primer letra de la palabra */

var frase2= "eStE eS oTro EjEmplO DE UNa FRase";
var frase2Minuscula =  frase2.toLowerCase();
var primerLetra = frase2.charAt(0);
var primerLetraMayuscula = primerLetra.toLocaleUpperCase();
console.log (primerLetraMayuscula + frase2Minuscula);
var cantCaracteresFrase = frase2.length;
var fraseCompleta = primerLetraMayuscula + frase2Minuscula.slice(1, cantCaracteresFrase);
console.log (fraseCompleta);

/* metodo replace*/
/* reemplazar texto */
var frase3 = "Es desarrollador y vive en";
var cantLetrasFrase3 = frase3.length;
var frase4 = "¿quiere ser millonario en poco tiempo?"
var cantLetrasFrase4 = frase4.length;
var localizacion = "Pitalito"
var cantLetrasLocalizacion = localizacion.length;
/*for (var i = 0; i < frase3.length - 1; i++)
 

}*/
var frase3Completa = frase3 +" " +localizacion + " " + frase4;
console.log (frase3Completa); 
 
/**/
var cuidadNatal = "Pitalito"
cuidadNatal = cuidadNatal.replace("Pitalito", "laboyos");
console.log(cuidadNatal);
