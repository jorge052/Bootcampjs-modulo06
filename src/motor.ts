import { partida } from "./modelo";

import {
  mostrarBotonSabermas,
  mostrarCarta,
  deshabilitarBotonNuevaCarta,
  deshabilitarBotonPlantarse,
  deshabilitarBotonSabermas,
  habilitarBotonNuevaPartida,
  mostrarBotonNuevaPartida,
  mostrarMensaje,
  mensajesPlantarse,
  partidaGanada,
  partidaPerdida,
} from "./ui";

// generar numero aleatorio funcion

export const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10) + 1;
};
// Bloque de codigo para obtener nueva carta y Game over

// funcion principal
export const dameCarta = () => {
  const numeroAletorio = generarNumeroAleatorio();
  const carta = generarCarta(numeroAletorio);
  mostrarCarta(carta);
  const puntos = devolverPuntos(carta);
  sumarPuntuacion(puntos);
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano();
};

export const generarCarta = (numeroAletorio: number): number => {
  if (numeroAletorio > 7) {
    return numeroAletorio + 2;
  }
  return numeroAletorio;
};

export const devolverPuntos = (carta: number): number => {
  if (carta <= 7) {
    return carta;
  } else {
    return 0.5;
  }
};

export function sumarPuntuacion(puntos: number) {
  partida.puntosTotales += puntos; // Sumar el valor de la carta a la puntuación total
}

export const revisarMano = () => {
  if (partida.puntosTotales === 7.5) {
    partidaGanada();
  } else if (partida.puntosTotales > 7.5) {
    partidaPerdida();
  }
};

// Bloque de codigo para plantarse

export function plantarse() {
  mensajesPlantarse();
  mostrarBotonSabermas();
  deshabilitarBotonPlantarse(true);
  deshabilitarBotonNuevaCarta(true);
  habilitarBotonNuevaPartida(false);
  mostrarBotonNuevaPartida();
  deshabilitarBotonSabermas(false);
}

// Saber mas

export function mostrarSiguienteCarta() {
  partida.siguienteCarta = generarNumeroAleatorio();
  mostrarCarta(partida.siguienteCarta);
  const numeroAletorio = generarNumeroAleatorio();
  const carta = generarCarta(numeroAletorio);
  mostrarCarta(carta);
  const puntos = devolverPuntos(carta);
  sumarPuntuacion(puntos);
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano();
  deshabilitarBotonSabermas(true);
  deshabilitarBotonPlantarse(true);
}
