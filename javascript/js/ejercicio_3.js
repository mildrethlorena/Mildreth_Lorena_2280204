"use strict"

console.log( "===cambiando todo a mayusculas===");
var frase="Te AmO MAmiTa"
frase = frase.toUpperCase();
console.log(frase);

console.log( "===cambiando todo a minusculas===");
frase = frase.toLowerCase();
console.log(frase);

console.log( "===primer letra en mayusculas y el resto en minusculas===");
frase = frase[0].toUpperCase() + frase.slice(1);
console.log(frase);

console.log( "===extrayendo partes de la cadena de texto===");
var telefono = "322378973";
var auxConsecutivo = telefono.slice(1,8);
console.log("telefono");
console.log("Numero de telefono "+ telefono);
console.log("Texto extraido  " + auxConsecutivo);

console.log( "===contando caracteres===");
var contando ="contando caracteres";
console.log("texto "+ contando );
console.log("Longitud: " + contando.length);

console.log( "===hallando espacios dobles===");
var reflan = "Primero  el  deber  y  luego el  placer";
console.log("El texto que usted ingreso es : " + reflan)
for(var i = 0; i < reflan.length; i++){
    if (reflan.slice(i, (i + 2)) === "  "){
        console.log("el texto tiene espacios dobles");
    break;
    }
}

console.log( "===reemplazando texto===");
var nombre = "mildred";
var newNombre = "mildreth";
console.log("El nombre ingresado: " + nombre);
for(var i= 0; i < nombre.length; i++) {
    if (nombre.slice(i, i + 4) === "lorena") {
        nombre = hobby.slice(0, i);
    }
}
console.log(nombre + newNombre);

console.log( "===reemplazando texto con indexof===");
var celular = "celular motorola";
var firtChar = celular.indexOf("Javascript");
if (firtChar !== -1) {
    console.log(firtChar);
    celular = celular.slice(0, firtChar) + "php"+ celular.slice(firtChar +10)
    console.log(celular);
}

console.log( "===extraer primer caracter===");
var primerFruta = "Fresa";
var primeraLetra = primerFruta.charAt(0);
console.log("La fruta es: " + primerFruta);
console.log("su primer letra es:  "+ primeraLetra);

console.log( "===extraer ultimo caracter===");
var primerFruta ="Fresa";
var primeraLetra = primerFruta.charAt(primerFruta.length - 1);
console.log("La fruta es: " + primerFruta);
console.log("su ultima letra es:  "+ primeraLetra);

console.log( "===buscando caracteres especiales===");
var mito = "¡Se gana mas con miel que con hiel!";
for (var i = 0; i < mito.length; i++) {
    if (mito.charAt(i) ==="!" ) {
        console.log( "el mito es: " + mito)
        console.log("la cadena tiene signos de admiracion.");
    }
}

console.log( "===reemplazando caracteres con el metodo de replace===");
var dios= "Dios es amor";
var fraseDios = dios.replace("amor" , "salud");
console.log("mensaje inicial: " + dios);
console.log("mensaje reemplazado: " + fraseDios );