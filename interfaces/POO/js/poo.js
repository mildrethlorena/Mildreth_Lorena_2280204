"use strict"
//creamos la clase
/*

*/
class Automovil{

    constructor(marca,modelo,year){
        this.Marca=marca;
        this.Modelo=modelo;
        this.Year=year;
    }
}

let auto = new Automovil();
auto.Marca="Bugatti";
auto.Modelo=" La Voiture Noire";
auto.Year=2021;
let buscarAuto=document.getElementById("boton");

let informacionAuto= auto.Marca +" " +auto.Modelo +" del año " +auto.Year;

buscarAuto.addEventListener("click", function(){
    document.getElementById("info-auto").innerHTML=informacionAuto;

})

maquetacion()
function maquetacion(){
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode(" hola, soy Gohan");
    marca.appendChild(textoMarca);
    mainContent.appendChild(marca);
}