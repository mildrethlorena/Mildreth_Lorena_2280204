"use strict"
/* operador lodico */
/*&&..y
||..o
|=..negacion
xor..0 esclusive
*/
/* si el aprendiz tiene jovenes en accion o sosben
puede acceder al subsidio de transporte
si tiene jovenes en accion y sisben NO puede 
acceder a subsidio de transporte

*/
var jovenaccionusuario = true;
var sisbenusuario = true;
if (jovenaccionusuario === true ^  sisbenusuario === true) {
    console.log ("usted puede acceder al beneficio de transporte");
}
else {
    console.log("no puede acceder al subsidio de transporte");
}
