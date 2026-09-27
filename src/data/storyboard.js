export const storyboard = [
  [
    "El inicio del viaje",
    "El cazador se prepara en una carreta iluminada por cuatro velas.",
  ],
  [
    "Un camino incierto",
    "Los caballos avanzan mientras el bosque oculta las primeras amenazas.",
  ],
  [
    "El primer encuentro",
    "Las criaturas aparecen y el jugador debe defenderse.",
  ],
  [
    "Un peso inesperado",
    "Los demonios se adhieren a la carreta y reducen su velocidad.",
  ],
  ["La gran amenaza", "Un enorme demonio surge detrás del vehículo."],
  [
    "La última llama",
    "El destino se alcanza si queda al menos una vela encendida.",
  ],
].map(([title, description], i) => ({
  id: i + 1,
  title,
  description,
  image: `assets/images/storyboard/storyboard-0${i + 1}.jpg`,
}));
