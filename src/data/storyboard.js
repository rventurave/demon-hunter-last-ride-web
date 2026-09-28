const scenes = [
  "El cazador inicia su viaje por un bosque peligroso.",
  "Criaturas voladoras comienzan a rodear la carreta.",
  "Los monstruos logran acercarse y atacar al cazador.",
  "El cazador responde utilizando su espada.",
  "Más criaturas se aferran a la carreta y dificultan el avance.",
  "Una amenaza mucho más grande aparece detrás de la carreta.",
  "El cazador intenta escapar mientras el monstruo lo persigue.",
  "Los caballos aceleran para alejarse del peligro.",
  "El cazador utiliza los látigos para aumentar la velocidad.",
  "El monstruo gigante logra acercarse peligrosamente.",
  "El cazador exige un último esfuerzo a los caballos para escapar.",
  "Finalmente, el cazador logra salir del bosque y llegar a un lugar seguro.",
];
export const storyboard = scenes.map((description, i) => ({
  id: i + 1,
  title: description,
  description: "",
  image: `assets/images/storyboard/${i}.jpeg`,
}));
