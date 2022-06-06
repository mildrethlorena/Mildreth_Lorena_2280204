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
auto.Marca="Mazda";
auto.Modelo="cx-5";
auto.Year=2018;
let buscarAuto=document.getElementById("boton");

let informacionAuto= auto.Marca +" " +auto.Modelo +" del año " +auto.Year;

buscarAuto.addEventListener("click", function(){
    document.getElementById("info-auto").innerHTML=informacionAuto;

})

maquetacion()
function maquetacion(){
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("Hola :)");
    marca.appendChild(textoMarca);
    mainContent.appendChild(marca);
}