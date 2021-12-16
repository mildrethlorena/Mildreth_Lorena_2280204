"use strict"

console.log("===Hora Actual===");
var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour <= 0)
      temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
console.log("Hora Actual:" + temp);




console.log("===Cuantos dias faltan para mi cumpleaños===");

var cumpleaños= new Date( "june 18 2022");
var fechaHoy=new Date();
var msfechahoy=fechaHoy.getTime();
var msCumpleaños=cumpleaños.getTime();
var msDIFF= msCumpleaños-msfechahoy;
var diasDIFF= msDIFF/(1000*60*60*24);
diasDIFF= Math.floor(diasDIFF); 
console.log("Me faltan "+ diasDIFF +" para cumplir años");




console.log("===Mensaje para avisar si es la fecha de cumpleaños o no===");

var fechaCumpleaños= new Date("june 18 2022");
var mescumpleaños=fechaCumpleaños.getMonth();
var diacumpleaños=fechaCumpleaños.getDate();
var fechaHoycumpleañosdia = fechaHoy.getDate();
var fechaHoycumpleañosmes= fechaHoy.getMonth();
console.log("El dia de hoy es: "+fechaHoycumpleañosdia+" del mes "+fechaHoycumpleañosmes);
if(mescumpleaños===fechaHoycumpleañosmes && diacumple===fechaHoycumpleañosdia ){
console.log("feliz cumpleaños luisa")
}else{console.log("NO es tu fecha de cumpleaños aun")};


 console.log("===Cuantos años voy a cumplir en el 2022 :P ===");

var fechaNacimiento= new Date("june 18 2001");
 var anioActual= fechaHoy.getFullYear();
 var anioNac=fechaNacimiento.getFullYear();
 var anioDIFF=anioActual-anioNac;
 console.log("Mi año de nacimiento es: "+ anioNac +" "+ "y el año en el que estamos es: "+anioActual);
 console.log("Mi edad es: "+ anioDIFF + " "+ "Y voy a cumplir: "+ (anioDIFF+1));

