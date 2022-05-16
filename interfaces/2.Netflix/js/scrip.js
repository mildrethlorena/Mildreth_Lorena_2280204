/* function mostrarMensajeDoctor(){
    alert("TE GUSTA LA PELICULA DOCTOR STRANGE EN EL MULTIVERSO DE LA LOCURA?");

function intercambiarLaCiudadPerdida() {
    alert("Ya te viste intercambiar La Ciudad Perdida");
}
function mostrarSonic() {
    document.getElementById("imgPrincipal").src="img/portada_sonic.jpg";
} */
function intercambiarImagen(ruta, infoPelicula) {
    document.getElementById("imgPrincipal").src=ruta;
    document.getElementById("infoPelicula").innerHTML = infoPelicula;
}

function intercambiarTexto(ruta) {
    document.getElementById("textoPrincipal").src=ruta;
}