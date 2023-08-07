import "./style.css";

import { dameCarta, sumarPuntuacion } from "./motor";

import { mostrarCarta, muestraPuntuacion } from "./ui";

const nuevaCarta = document.getElementById("dameCarta");

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
