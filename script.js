console.log("loading Javascript....")

function saveContacto(){

    let nombreContacto = document.getElementById("nombre");
    let identidadContacto = document.getElementById("identidad");
    let telefonoContacto = document.getElementById("telefono");
    let correoContacto = document.getElementById("correo");
    let direccionContacto = document.getElementById("direccion");

    let Contacto = {
        Nombre: nombreContacto.value,
        Identificacion: identidadContacto.value,
        Telefono: telefonoContacto.value,
        Correo: correoContacto.value,
        Residencia: direccionContacto.value,
    }
    console.log(Contacto);

    let url = "http://localhost:8000/api/crear";
    let params ={
        method: "POST",
        headers:{
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(Contacto),
    }

    fetch(url,params).then(response =>{
       
        console.log(response);

        if (response.status==201){
            alert("registro exitoso");
        }else{
            alert("error registro");
        }
    });

    return true;
}

let menuVisible = false;
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("Neumatica");
        habilidades[1].classList.add("Hidraulica");
        habilidades[2].classList.add("Control-Electrico");
        habilidades[3].classList.add("Mecanica");
        habilidades[4].classList.add("Comunicacion");
        habilidades[5].classList.add("Trabajo-en-equipo");
        habilidades[6].classList.add("Pro-Activo");
        habilidades[7].classList.add("Organizacion");
    }
       
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}