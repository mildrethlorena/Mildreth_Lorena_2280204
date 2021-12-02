"use strict"
/* Operadores de comparación:
>.......Mayor que
<.......Menor que
>=......Mayor o igual que 
<=......Menor o igual que 
!=......Distinto sin importar tipo de dato
==......Igual sin importar tipo de dato
===.....Estrictamente igual incluytendo tipo de dato
!==.....Distinto(si no son estrictamente iguales) */

/* quien ocupo el primer puesto */
console.log("NOTAS");
console.log(" ");
var nota1 = 8.1;
var nota2 = 8.5;

/* Condicionales */
if (nota1 > nota2) {
    console.log("La nota más alta fue: " + nota1);
}
else if (nota1 < nota2) {
    console.log("La nota más alta fue: " + nota2);
}
else if (nota1 === nota2) {
    console.log("Las dos notas tienen el mismo valor");
}
else {
    console.log("Ha surgido un error. Verifique, por favor.");
}