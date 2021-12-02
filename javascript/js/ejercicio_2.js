"use strict"
console.log( "---------Caracteres Permitidos---------");

var texto= "Hola buenas tardes, en este trabajo se hará un ejemplo de cómo se hace identificación en el momento en que una cadena excede la cantidad de carácter o ya sea que no la exceda según la cantidad de caracteres que se hallan permitido";

console.log( "*El texto que usted ingreso es: " + " " + texto);
console.log("");
console.log("*El numero de caracteres es: " + "" + texto.length);

if(texto.length<=50){
    console.log( "*Los caracteres si son permitidos ");
}
if(texto.length >50){
    console.log( "*Has excedido la cantidad de caracteres permitidos ");
}

console.log( "---------Buscar entre los Elementos---------");

var marcaRopa = new Array();
marcaRopa[0] ="Ilove";
marcaRopa[1] ="Studio F";
marcaRopa[2] ="Koaj";
marcaRopa[3] ="Love Me";
marcaRopa[4] ="One BLue";
marcaRopa[5] ="Login";

var nombreRopa = "One Blue"
console.log( "La marca es: " + " " +nombreRopa);

if( nombreRopa == marcaRopa[0] || nombreRopa == marcaRopa[1] || nombreRopa == marcaRopa[2] ||nombreRopa == marcaRopa[3] ||
    nombreRopa == marcaRopa[4] || nombreRopa == marcaRopa[5]){
        console.log( "La Marca "  +nombreRopa + " " + "fue encontrado exitosamente ");
    }
else {
    console.log( "Se encontro un error en la marca ");
}

console.log( "---------Arreglo Aprendices---------");



var aprendiz1 = new Array(1, "Yeimi Katherine", "Peña Ariza", 18, "B.Villa del Prado", 156);
var aprendiz2 = new Array(2, "Luisa Fernanda", "Ramirez Montoya", 19, "B. Simon Bolivar", 157);
var aprendiz3 = new Array( 3,"Jesus Nicolas","Ayerbe Guarnizo", 17, "B. Las Palmitas", 177);


for (var i = 0; i <= 2- 1; i++) {
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz1[j]);
    }
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz2[j]);
    }
    i++;
    console.log("APRENDIZ N° " + (i));
    for(var j = 0; j <= 5; j++) {
        console.log(aprendiz3[j]);
    }
}