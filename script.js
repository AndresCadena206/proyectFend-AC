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