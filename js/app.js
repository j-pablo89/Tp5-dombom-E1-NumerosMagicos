// 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, 
// en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario 
// debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar 
// mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert 
// si el numero que ingreso es mayor o menor al número mágico.
// Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

const botonComenzar = document.getElementById('botonComenzar');
const botonRespuesta = document.getElementById('inputNumero');
const aside = document.getElementById('asideReferencia');
botonComenzar.addEventListener('click',comenzarJuego);
botonRespuesta.addEventListener('click',respuestaJuego);
const sectionPadre = document.getElementById('contenedorPadre');
let numeroOculto;
let mensaje = document.createElement('h3');
function comenzarJuego(){
    if(botonComenzar.innerHTML === 'COMENZAR JUEGO'){
        botonRespuesta.className = 'enabled btn btn-warning border-4 rounded-1 ms-3';
        numeroOculto = Math.floor(Math.random()*50)+1;
        console.log(numeroOculto);
        mensaje.innerHTML = '¡ADIVINA EL NÚMERO del 1 al 50!';
        mensaje.className = 'text-dark text-center';
        sectionPadre.insertBefore(mensaje,aside);
        botonComenzar.innerHTML = 'JUEGO INICIADO';
        botonComenzar.disabled = true;
    }
}
function respuestaJuego(){
    const numeroJugador = document.getElementById('numeroJugador').value;
    console.log(numeroJugador);
    console.log(numeroOculto);
    numeroJugador.innerHTML=null;
    if(numeroJugador == numeroOculto){
        alert('NUMERO CORRECTO!!!');
        console.log(sectionPadre.children);
        sectionPadre.removeChild(sectionPadre.children[0]);
        sectionPadre.removeChild(sectionPadre.children[1]);
        mensaje.innerHTML = '';
        botonComenzar.innerHTML = 'JUEGO TERMINADO';
        let mensajeFinal = document.createElement('h2');
        mensajeFinal.innerHTML = '¡¡JUEGO TERMINADO!!';
        mensajeFinal.className = 'display-3 text-bg-danger text-center pt-5 ';
        sectionPadre.appendChild(mensajeFinal);
    }else{
        if(numeroJugador > numeroOculto ){
            alert('El numero es mayor al oculto');  
        }else{
            alert('El numero es menor al oculto');    
        }
    }
}