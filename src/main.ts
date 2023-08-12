import "./style.css";

import { iniciarNuevaPartida, plantarse, mostrarCartaNueva } from "./motor";

import { muestraPuntuacion } from "./ui";

const nuevaCarta = document.getElementById("dameCarta");
const plantarseboton = document.getElementById("plantarse");
const nuevaPartidaButton = document.getElementById("nuevaPartida");

document.addEventListener("DOMContentLoaded", function () {
  muestraPuntuacion();
});

if (nuevaCarta instanceof HTMLButtonElement) {
  nuevaCarta.addEventListener("click", mostrarCartaNueva);
}

if (plantarseboton instanceof HTMLButtonElement) {
  plantarseboton.addEventListener("click", plantarse);
}

if (nuevaPartidaButton instanceof HTMLButtonElement) {
  nuevaPartidaButton.addEventListener("click", iniciarNuevaPartida);
}
