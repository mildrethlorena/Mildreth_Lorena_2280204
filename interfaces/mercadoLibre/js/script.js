"use strict"

class Automovil {
    constructor (marca,modelo,anyo) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Anyo= anyo;
    }
}
//esta es una forma de llamar y ponerle un texto
//let auto = new Automovil("Mazda","3 Primer","2021")

let auto = new Automovil();
auto.Anyo= 2021;
auto.Marca= "Mazda";
auto.Modelo= "3 Prime";



let buscarAuto = document.getElementById("buscarAuto");

buscarAuto.addEventListener("click", function() {
    maquetacion();
    let infoAutomovil = auto.Marca + " " + auto.Modelo + " Modelo " + auto.Anyo;
    document.getElementById("infoAuto").innerHTML = infoAutomovil;
} );
function maquetacion() {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label")
    let textoMarxa = document.createTextNode("Hola, soy un label")
}


