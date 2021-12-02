"use strict"

/*Imprimir fehca y hora del navegador */
var currentTime = new Date ();
console.log (currentTime);

/* desglosando fechas y horas */
var anyo = currentTime.getFullYear ();
console.log ("Año: "+ anyo);

var  diaSemana = currentTime.getDay ();
var diaSemanaStr = ["dominigo","lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];
console.log ("Hoy es: " + diaSemanaStr[diaSemana]);
/*
console.log ("Dia de la semana: "+ diaSemana);*/

var meses = currentTime.getMonth ();
console.log ("Mes del año: "+ meses);

var hora = currentTime.getHours ();
console.log ("Hora: "+ hora);

var minutos = currentTime.getMinutes ();
console.log ("Minutos: "+ minutos);

var segundos = currentTime.getSeconds ();
console.log ("Segundos: "+ segundos);

var milSegundos = currentTime.getMilliseconds ();
console.log ("Milisegundos: "+ milSegundos);

var milSegundos2 = currentTime.getTime ();
console.log ("Millisegundos desde 1 de enero de 1970: "+ milSegundos2);


/*otra forma de hacer el resultado anterior */
/*var anyo = currentTime.getFullYear ();
var  diaSemana = currentTime.getDay ();
var mes = currentTime.getMonth ();
var hora = currentTime.getHours ();
var minutos = currentTime.getMinutes ();
var segundos = currentTime.getSeconds ();
var milSegundos = currentTime.getMilliseconds ();
var milSegundos2 = currentTime.getTime ();
console.log ("año: "+ anyo);
console.log ("dia semana: "+ diaSemana);
console.log ("mes: "+ (mes+1));
console.log ("hora: "+ hora);
console.log ("minutos: "+ minutos);
console.log ("milSegundos: "+ milSegundos);
console.log ("Millisegundos desde 1 de enero de 1970: "+ milSegundos2);*/


/* FECHA: JUEVES, 2 DE DICIEMBRE DEL AÑO 2021*/

var mesesStr = ["enero","febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre","noviembre","diciembre"];
console.log ("fecha: " + diaSemanaStr[diaSemana]+","+ meses +" "+"de"+" "+ mesesStr[meses]+" "+"del año"+" "+anyo);
