// Al pulsar el boton de la campana, debe aumentar el número que lo acompaña

// Variables
const audio = document.querySelector("#audio");
const campana = document.querySelector("#campana");
const contador = document.querySelector ("#contador");
let contadorSuma = 0;

// funcion

function aumentar() {
    contadorSuma += 1;
    contador.textContent = contadorSuma;
    // Reproducir audio
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}


// Evento "click"


campana.addEventListener("click", aumentar);

