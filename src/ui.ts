import { dameCarta, sumarPuntuacion } from "./motor";

import { partida } from "./modelo";

export function muestraPuntuacion() {
  const mostraPuntuacionElemento = document.getElementById("mostrarPuntuacion");

  if (mostraPuntuacionElemento) {
    mostraPuntuacionElemento.textContent = `Puntuación actual: ${partida.puntuacion}`;
  }
}

export function mostrarCartaNueva() {
  const cartaNueva = dameCarta();
  console.log("Carta elegida:", cartaNueva);
  mostrarCarta(cartaNueva);
  sumarPuntuacion(cartaNueva);
}

export function mostrarCarta(carta: number) {
  const imgCarta = document.getElementById("cartaImagen") as HTMLImageElement;
  switch (carta) {
    case 1:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      imgCarta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }
}
