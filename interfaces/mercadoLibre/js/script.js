
class automovil{
    constructor(marca,modelo,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Mini","Cooper","2013","98000000","29300","Bogota","img/rojo.jpg");
let car2= new automovil("Mini","Countryman","2019","148000000","22277","Bogota","img/verde.jpg");
let car3= new automovil("Mercedes-Benz","Clase C","2017","125000000","35381","Bogota","img/mercedes.jpg");
let car4= new automovil("Mazda","cx-5","2018","115000000","38000","Bogota","img/mazda.jpg");
let car5= new automovil("Mini","John Cooper Works","2020","160000000","13500","Bogota","img/gris.jpg");

function Busqueda(car){
    //let contabs=document.getElementById("contenedorAbsoluto");
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    //contabs.appendChild(contenedorPrincipal)
    let contimg= document.createElement("div");
    contenedorPrincipal.appendChild(contimg);
    contimg.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contimg.appendChild(img);

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contimg.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contimg.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contimg.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contimg.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contimg.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="mini"){
            Busqueda(car1);
            Busqueda(car2);
            Busqueda(car5);         
        }
        else if(Busq=="mazda"){
            Busqueda(car4);
        }
        
        else if(Busq=="mercedes"){
            Busqueda(car3);
        }
        else{
            alert("No se encontro ningun resultado");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}

