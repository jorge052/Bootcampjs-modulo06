import "./style.css";

import { dameCarta, plantarse } from "./motor";

import {
  iniciarNuevaPartida,
  nuevaCarta,
  plantarseboton,
  nuevaPartidaButton,
} from "./ui";

document.addEventListener("DOMContentLoaded", function () {
  eventosBotones();
});

// Eventlisteners

const eventosBotones = () => {
  if (
    nuevaCarta !== null &&
    nuevaCarta !== undefined &&
    nuevaCarta instanceof HTMLButtonElement
  ) {
    nuevaCarta.addEventListener("click", dameCarta);
  }

  if (
    plantarseboton !== null &&
    plantarseboton !== undefined &&
    plantarseboton instanceof HTMLButtonElement
  ) {
    plantarseboton.addEventListener("click", plantarse);
  }

  if (
    nuevaPartidaButton !== null &&
    nuevaPartidaButton !== undefined &&
    nuevaPartidaButton instanceof HTMLButtonElement
  ) {
    nuevaPartidaButton.addEventListener("click", iniciarNuevaPartida);
  }
};
