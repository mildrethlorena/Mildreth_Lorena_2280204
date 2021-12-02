"use strict"

/*Conversion Temporal de forma implicita "no es clara */
console.log ("== conversion implicita==")
var num1 = "12";
var num2 = 4;
console.log ("El resultado de la suma es : " + (num2+num1));
console.log ("El resultado de la resta es : " + (num2-num1));
console.log ("El resultado de la multiplicacion es : " + (num2*num1));
console.log ("El resultado de la divicion es : " + (num2/num1));

/*Conversion Temporal de forma explicita "es la forma clara*/ 
console.log ("== conversion explicita==")
var num3 = "20";
var num4 = 2;
var num3Int = parseInt(num3);
console.log("el resultado de la suma es : "+ (num3Int+num4));

var num5 = "12.2";
var num6 = 4.5;
console.log ("el resultado de la suma es: " + (parseFloat (num5)+ num6)); /*parseFloat convierte de cadena a texto a decimales */

var num7 = 12;
var num8 = 10;
var num7Str = num7.toLocaleString (); /*toLocaleString convierte de decimales o enteros a cadena de textos*/
var num8Str = num8.toLocaleString ();
console.log ("el resultad de la suma es: " + (num7Str+num8Str));

var num9 = "8";
var num10= 3;
console.log ("el resultado de la suma es: "+ (num9+num10)) /*var num7Str = num7.toLocaleString (num7+num8) ES OTRA FORMA DE CONVERTIR VARIABLES */

