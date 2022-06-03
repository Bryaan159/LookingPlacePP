//Variables para ocupar funciones en la pagina
const deslizamientos = document.querySelectorAll('.deslizanteBoton');
const movilizarse = document.querySelectorAll('.videosLookingPlace');
const contenidos = document.querySelectorAll(".contenedor");



//Funcion para el desplazamiento de videos
var deslizante =  function(manual){

    //Remover la seleccion del deslizamientos(efecto)
    deslizamientos.forEach((mover)=>{
        mover.classList.remove("activado");
    });

    movilizarse.forEach((videos)=>{
        videos.classList.remove("activado");
    })

    contenidos.forEach((contenido) => {
        contenido.classList.remove("activado");
      });

    //agregar al class la palabra activado
    deslizamientos[manual].classList.add("activado");
    movilizarse[manual].classList.add("activado");
    contenidos[manual].classList.add("activado");
}

//Se le de color a cada rueda de deslizamientos
deslizamientos.forEach((mover,i) => {
    mover.addEventListener("click",() =>{
        deslizante(i)
    });
});

