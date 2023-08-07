import "./style.css";

import { dameCarta, sumarPuntuacion, iniciarPartida } from "./motor";

import { mostrarCarta, muestraPuntuacion } from "./ui";

const nuevaCarta = document.getElementById("dameCarta");

const nuevaPartida = document.getElementById("nuevaPartida");
nuevaPartida?.addEventListener("click", function () {
  iniciarPartida();
  muestraPuntuacion();
});

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
});

if (nuevaCarta instanceof HTMLButtonElement) {
  nuevaCarta.addEventListener("click", mostrarCartaNueva);
}

function mostrarCartaNueva() {
  const cartaNueva = dameCarta();
  console.log("Carta elegida:", cartaNueva);
  mostrarCarta(cartaNueva);
  sumarPuntuacion(cartaNueva);
}
