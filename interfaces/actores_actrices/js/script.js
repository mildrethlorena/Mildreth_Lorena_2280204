"use strict"
//asociar a un id para que cuando se de click arroje un mensaje 
let idEugenio = document.getElementById("idEugenio");
let idWilliam = document.getElementById("idWilliam");
let idAdam = document.getElementById("idAdam");

idEugenio.addEventListener("click",()=>{
    idEugenio.classList.remove("div-eugenio");
    idEugenio.classList.add("div-eugenio-hidden");
    idWilliam.classList.remove("div-willian-hidden");
    idWilliam.classList.add("div-william");
});

idWilliam.addEventListener("click",()=>{
    idWilliam.classList.remove("div-william");
    idWilliam.classList.add("div-willian-hidden");    
    idEugenio.classList.remove("div-eugenio-hidden");
    idEugenio.classList .add("div-eugenio");
});