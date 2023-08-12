import { partida } from "./modelo";

import {
  muestraPuntuacion,
  mostrarCarta,
  mostrarBotonNuevaPartida,
  ocultarBotonNuevaPartida,
  mostrarBotonSabermas,
} from "./ui";

// Bloque de codigo para obtener nueva carta y Game over

export function dameCarta() {
  const numeroCarta = Math.floor(Math.random() * 10) + 1;
  if (numeroCarta > 7) {
    return numeroCarta + 2;
  }
  return numeroCarta;
}

export function mostrarCartaNueva() {
  if (!partida.gameOver) {
    const cartaNueva = dameCarta();
    console.log("Carta elegida:", cartaNueva);
    mostrarCarta(cartaNueva);
    sumarPuntuacion(cartaNueva);

    if (partida.puntuacion > 7.5) {
      partida.gameOver = true;
      partida.partidaTerminada = true;
      mostrarMensaje("Game Over");
      determinarFinPartida();
    }
  }
}

// Funcion para sumar puntos

export function sumarPuntuacion(cartaValor: number) {
  partida.puntuacion += cartaValor; // Sumar el valor de la carta a la puntuación total
  muestraPuntuacion(); // Actualizar la  puntuación
  if (partida.puntuacion > 7.5) {
    partida.gameOver = true;
  }
}

// Saber mas

export function mostrarSiguienteCarta() {
  if (partida.siguienteCarta !== null) {
    mostrarCarta(partida.siguienteCarta);
  }
}

// Bloque de codigo para Nueva partida y terminar partida.

export function iniciarNuevaPartida() {
  partida.puntuacion = 0;
  partida.gameOver = false;
  partida.partidaTerminada = false;
  muestraPuntuacion();
  ocultarBotonNuevaPartida();
}

export function determinarFinPartida() {
  if (partida.gameOver || partida.partidaTerminada) {
    mostrarBotonNuevaPartida();
  }
}

// Bloque de codigo para plantarse

export function plantarse() {
  if (!partida.gameOver) {
    partida.gameOver = true;
    let mensaje = "";

    if (partida.puntuacion < 4) {
      mensaje = "Has sido muy conservador";
    } else if (partida.puntuacion >= 4 && partida.puntuacion < 6) {
      mensaje = "Te ha entrado el canguelo eh?";
    } else if (partida.puntuacion >= 6 && partida.puntuacion <= 7) {
      mensaje = "Casi casí...";
    } else if (partida.puntuacion === 7.5) {
      mensaje = "¡Lo has clavado! ¡Enhorabuena!";
    }

    mostrarMensaje(mensaje);
    determinarFinPartida();
    mostrarBotonSabermas();
  }
}

export function mostrarMensaje(mensaje: string) {
  const fin = document.getElementById("gameOver");
  if (fin) {
    fin.innerHTML = `${mensaje}`;
  }
}
