interface Partida {
  puntuacion: number;
  siguienteCarta: number;
  gameOver: boolean;
  partidaTerminada: boolean;
}

export const partida: Partida = {
  puntuacion: 0,
  siguienteCarta: 0,
  gameOver: false,
  partidaTerminada: false,
};
