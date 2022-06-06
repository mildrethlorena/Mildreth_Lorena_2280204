
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1= new automovil("Mazda","prado","txl","2020","298000000","82","Bogota","img/image.jpeg");
let car2= new automovil("Chevrolet","Onix","turbo","2020","62800000","90","Bogota","img/chevrolet-onix.jpeg");
let car3= new automovil("Suzuki","jimmy","lite","2020","62500000","130","Pitalito","img/suzuki.jpeg");
let car4= new automovil("Mazda","cx-5","turbo","2023","130000000","0","Bogota","img/cx.jpg");

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
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
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
        if(Busq=="mazda"){
            Busqueda(car1);
            Busqueda(car4);            
        }
        else if(Busq=="chevrolet"){
            Busqueda(car2);
        }
        
        else if(Busq=="suzuki"){
            Busqueda(car3);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}