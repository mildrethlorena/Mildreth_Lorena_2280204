"use strict"

function guardarInformacion() {
    let numeroDocumento = document.getElementById("numeroDocumento").value;
    if (numeroDocumento == ""){
        alert("Ingresar numero de documento");
        return false;
    }
    if (document.getElementById("nombreUsuario").value =="") {
        alert("Ingresar nombres");
        return false;
    }
    alert("Informacion guardada con exito");
    limpiarFormulario();
    return true;
    }
    function limpiarFormulario() {
    document.getElementById("numeroDocumento").value = "";
    document.getElementById("nombreUsuario").value = "";
}