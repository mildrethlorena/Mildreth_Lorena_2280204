"use strict"
/* Forma de declarar e inicilizar un arreglo */
/* Forma 1 */
var aprendiz1 = new Array ();
aprendiz1[0]= 1;
aprendiz1[1]= "Yeimi Katherine";
aprendiz1[2]= "Peña ariza";
aprendiz1[3]= 18;
aprendiz1[4]= "B. Villa del prado";
aprendiz1[5]= 1.56;

/* forma 2 */
var aprendiz2 = new Array (2, "luisa fernanda","Ramirez Montoya", 19, "B, simón bolivar", 1.57);

/* forma 3 */
var aprendiz3 = [3, "jesus nicolas", "ayerbe guarnizo", 17, "B. Las palmitas", 177];

/* mostrar el nombre completo del aprediz N. 2 */
console.log ("Nombre completo de aprendiz N.2:"+ " " + aprendiz2 [1]+ " " +aprendiz2 [2]);

/* añadiendo elementos al array*/
aprendiz3 [6] ="0317751223";
console.log (aprendiz3 [6]);

/* Contando elementos */
var cantidadelementos = aprendiz1.length;

console.log ("aprendiz 1 tiene:"+ " " + cantidadelementos + " " + "elementos")

/* Contando caracteres */
var cantidadcaracteres = aprendiz2 [1].length;
console.log ("cantidad caracteres:" + " "+ cantidadcaracteres);
