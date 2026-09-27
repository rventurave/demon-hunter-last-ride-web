export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
export const fallbackImage = asset("assets/images/atmosphere.svg");
export const navItems = [
  ["inicio", "Inicio"],
  ["historia", "Historia"],
  ["mecanicas", "Mecánicas"],
  ["storyboard", "Storyboard"],
  ["gameplay", "Gameplay"],
  ["pruebas", "Pruebas"],
  ["proyecto", "Proyecto"],
];
export const project = {
  title: "Japanese Demon Hunter",
  hero: "assets/images/hero.jpg",
  demo: true,
};
export const story = [
  {
    number: "01",
    title: "Un viaje hacia lo desconocido.",
    text: "En una noche oscura, un cazador debe atravesar peligrosos caminos sobre una antigua carreta tirada por caballos. La oscuridad esconde criaturas que intentarán detener el viaje.",
    detail:
      "Sobre la carreta permanecen cuatro velas encendidas. Estas llamas representan la posibilidad de completar el recorrido.",
    image: "assets/images/story-01.jpg",
    caption: "EL CAMINO · LA ÚNICA SALIDA ES SEGUIR",
  },
  {
    number: "02",
    title: "La oscuridad no viaja sola.",
    text: "Pequeños demonios aparecen desde diferentes puntos del camino. Algunos atacan directamente al cazador; otros intentan subir a la carreta. Las criaturas que se aferran aumentan su peso y reducen progresivamente su velocidad.",
    detail:
      "Pero existe una amenaza aún mayor: un enorme demonio persigue constantemente la carreta desde la oscuridad.",
    image: "assets/images/story-02.jpg",
    caption: "LA AMENAZA · NUNCA MIRES ATRÁS",
  },
  {
    number: "03",
    title: "Mientras quede una llama.",
    text: "Defiéndete con tus armas, elimina a las criaturas que se aferran al vehículo y utiliza tus látigos para mantener a los caballos avanzando.",
    detail:
      "Alcanza el destino con al menos una vela encendida para sobrevivir. Si todas las velas se apagan o la vida del cazador llega a cero, el viaje habrá terminado.",
    image: "assets/images/story-03.jpg",
    caption: "LA ESPERANZA · CUATRO LLAMAS, UNA OPORTUNIDAD",
  },
];
export const development = [
  [
    "Concepto",
    "Definición de la idea inicial y de la experiencia que queremos transmitir.",
  ],
  ["Prototipo", "Creación de la carretera, la carreta y el jugador."],
  ["Enemigos", "Implementación de IA, objetivos y sistema de aparición."],
  [
    "Supervivencia",
    "Sistema de vida, peso, enemigos y condiciones de victoria.",
  ],
  ["Interacción VR", "Movimiento, armas y látigos dentro de la experiencia."],
  ["User testing", "Pruebas con usuarios para observar la interacción real."],
  ["Iteración", "Aplicación de mejoras a partir del feedback."],
];
export const technical = [
  ["Tipo", "Videojuego de Realidad Virtual"],
  ["Motor", "Unity 6"],
  ["Plataforma", "Meta Quest 2"],
  ["Sistema XR", "OpenXR"],
  ["Toolkit", "XR Interaction Toolkit"],
  ["Lenguaje", "C#"],
  ["Género", "Supervivencia / Acción / Terror"],
  ["Estado", "Prototipo en desarrollo"],
];
export const gallery = [
  "El camino entre las sombras",
  "La carreta del cazador",
  "Criaturas de la oscuridad",
  "Las últimas llamas",
].map((title, i) => ({
  id: i + 1,
  title,
  description: "Captura del prototipo pendiente de incorporar.",
  image: `assets/images/gallery/game-0${i + 1}.jpg`,
}));
