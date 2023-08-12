import { mostrarSiguienteCarta } from "./motor";

import { partida } from "./modelo";

export function muestraPuntuacion() {
  const mostraPuntuacionElemento = document.getElementById("mostrarPuntuacion");

  if (mostraPuntuacionElemento) {
    mostraPuntuacionElemento.textContent = `Puntuación actual: ${partida.puntuacion}`;
  }
}

// Ocultar botones

export function ocultarBotonNuevaPartida() {
  const nuevaPartidaButton = document.getElementById("nuevaPartida");
  if (nuevaPartidaButton) {
    nuevaPartidaButton.style.display = "none";
  }
}

export function mostrarBotonNuevaPartida() {
  const nuevaPartidaButton = document.getElementById("nuevaPartida");
  if (nuevaPartidaButton) {
    nuevaPartidaButton.style.display = "block";
  }
}

// Boton saber mas

export function mostrarBotonSabermas() {
  const saberMasButton = document.getElementById("saberMas");
  if (saberMasButton instanceof HTMLButtonElement) {
    saberMasButton.addEventListener("click", mostrarSiguienteCarta);
    saberMasButton.style.display = "block";
  }
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
