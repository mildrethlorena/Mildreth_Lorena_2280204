"use strict"

let valorUnidad= 13523900;

valorIndividual();
calcularSubtotal();

numeroProductos();

function numeroProductos(){
    let numeroProductos = document.getElementById("cantidadLibro").innerHTML;
    document.getElementById("cantidad").innerHTML = numeroProductos;
    if(numeroProductos >= 2 || numeroProductos == 0){
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " productos";
    }
    else{
        document.getElementById("cantidad").innerHTML= numeroProductos.toString()+ " producto";
    }
}


function pruebaSuma(){
    let cantidadArticulos= document.getElementById("cantidadLibro").innerHTML;
    if (cantidadArticulos<=9) {
        cantidadArticulos = Number(cantidadArticulos) + 1;
        document.getElementById("cantidadLibro").innerHTML = cantidadArticulos;
    }
    else{
        alert(" no puedes comprar mas de 10 productos en este pedido");
    }
    calcularSubtotal();
    numeroProductos();

}
function pruebaResta(){
    let cantidadArticulos= document.getElementById("cantidadLibro").innerHTML;
    if (cantidadArticulos >0) {
        cantidadArticulos =Number(cantidadArticulos) - 1;
        document.getElementById("cantidadLibro").innerHTML = cantidadArticulos;
    }
    calcularSubtotal();
    numeroProductos();
}
function calcularSubtotal() {
    let cantidadElementos = document.getElementById("cantidadLibro").innerHTML;
    let subtotal = valorUnidad * Number(cantidadElementos);
    let subtotalFormat = new Intl.NumberFormat('es-ES').format(subtotal);
    document.getElementById("valorSubtotal").innerHTML = subtotalFormat;
}
function valorIndividual() {
    let valorUnidadFormat = new Intl.NumberFormat('es-ES').format(valorUnidad);
    document.getElementById("valor-unitario").innerHTML = valorUnidadFormat,toString()+ "COP ";
}




