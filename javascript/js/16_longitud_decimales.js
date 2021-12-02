"use strict"


 /*metodo toFixed para recortar decimales */
var promedio = 2.56648226;
promedio = promedio.toFixed(2);
console.log (promedio);

 /*forzando el redondeo*/
/*metodo slice para redondear*/
var promedio2 = 2.56648226;
var promedio2Str = promedio2.toString ();
var promedio2Conv = promedio2Str.slice (0, 4);
var promedio2Conv = parseFloat (promedio2Conv);
console.log (promedio2Conv);

