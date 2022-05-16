function validarInfo(cedula,nombre,apellido,fecha,nacionalidad) { 
    var cedula = document.getElementById(cedula);
    var nombre = document.getElementById(nombre);
    var apellido = document.getElementById(apellido);
    var fecha = document.getElementById(fecha);
    var nacionalidad = document.getElementById(nacionalidad);
    var error = document.getElementById(error);
     if( cedula.value === ""){
         alert("Ingrese su numero de documento"); 
     }
     if( nombre.value === ""){
        alert("Ingrese su nombre");  
    }
    if( apellido.value === ""){
        alert("Ingrese la apellido"); 
    }
    if( fecha.value === ""){
        alert("Ingrese su fecha"); 
    }
    if( nacionalidad.value === ""){
        alert("Ingrese su nacionalidad"); 
    }                            
     }