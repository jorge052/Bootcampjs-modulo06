import { partida } from "./modelo";

import { muestraPuntuacion } from "./ui";

// Boton iniciar partida

export function iniciarPartida() {
  partida.puntuacion = 0;
}

// Bloque de codigo para obtener nueva carta

export function dameCarta() {
  const numeroCarta = Math.floor(Math.random() * 10) + 1;
  if (numeroCarta > 7) {
    return numeroCarta + 2;
  }
  return numeroCarta;
}

// Funcion para sumar puntos

export function sumarPuntuacion(cartaValor: number) {
  partida.puntuacion += cartaValor; // Sumar el valor de la carta a la puntuación total
  muestraPuntuacion(); // Actualizar la  puntuación
}
