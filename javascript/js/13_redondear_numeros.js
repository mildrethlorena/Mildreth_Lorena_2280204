"use strict"

/*Redondear de forma automatca con el metodo round */

console.log ("==Redondear con el metodo Round==")
var number1 = 4.4;
var number2 = 4.6;/*redondear hacia arriba  */
var number3 = 4.5;/*redondear hacia arriba */
var Number1Round = Math.round (number1);
var Number2Round = Math.round (number2);
var Number3Round = Math.round (number3);

console.log ("variable 1: " + Number1Round + "\n" +
            "variable 2: " + Number2Round + "\n" +
            "variable 3: " + Number3Round );

/*Redondear hacia el piso */

console.log ("==Redondear con el metodo floor==")
var number4 = 4.9;
var number4Floor = Math.floor(number4);
console.log ("variable 4: "+ number4Floor);

/*Redondear hacia el techo con el metodo ceil */

console.log("==Redondear con el metodo ceil==")
var number5 = 4.1;
var number5 = Math.ceil (number5)
console.log ("variable: " + number5)
