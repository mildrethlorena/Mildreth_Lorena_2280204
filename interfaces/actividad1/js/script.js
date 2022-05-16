function validarInfo(cedula,nombre,) { 
    var cedula = document.getElementById(cedula);
    var nombre = document.getElementById(nombre);
    if( cedula.value === ""){
         alert("Ingrese su numero de documento"); 
    }
    if( nombre.value === ""){
        alert("Ingrese sus nombres");  
    }
    return true;                        
    }