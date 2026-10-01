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
  ["resultados", "Mejoras"],
  ["proyecto", "Proyecto"],
];
export const project = {
  title: "Demon Hunter: Last Ride",
  hero: "assets/images/portada.png",
  demo: true,
};
export const storyStages = [
  {
    title: "El viaje comienza",
    paragraphs: [
      "En una región montañosa y aislada, un cazador emprende un peligroso viaje en una carreta tirada por dos caballos. Para llegar a su destino debe atravesar un antiguo bosque, un lugar del que existen historias sobre criaturas que atacan a quienes intentan cruzarlo.",
    ],
  },
  {
    title: "La noche cae",
    paragraphs: [
      "Al principio, el camino parece tranquilo, pero poco a poco comienzan a aparecer monstruos entre los árboles. Algunas criaturas vuelan alrededor de la carreta, mientras otras corren detrás de ella y tratan de sujetarse a sus costados. Cada enemigo que logra aferrarse aumenta el peso del vehículo, haciendo que los caballos avancen más lentamente.",
    ],
  },
  {
    title: "Los demonios atacan",
    paragraphs: [
      "El cazador debe defenderse mientras la carreta continúa en movimiento. Utiliza su espada para eliminar a los monstruos que se acercan y evita que permanezcan demasiado tiempo sobre el vehículo. Al mismo tiempo, debe controlar a los caballos y utilizar los látigos para impulsarlos cuando la velocidad comienza a disminuir.",
    ],
  },
  {
    title: "La gran amenaza",
    paragraphs: [
      "Conforme avanza por el bosque, los ataques se vuelven cada vez más intensos. Entonces aparece una criatura mucho más grande que las demás. Este enorme monstruo comienza a perseguir la carreta desde atrás, avanzando lentamente pero sin detenerse. Si el cazador pierde demasiada velocidad, la criatura puede acercarse peligrosamente.",
    ],
  },
  {
    title: "Una carrera por sobrevivir",
    paragraphs: [
      "A partir de ese momento, el viaje se convierte en una carrera por sobrevivir. El cazador debe equilibrar sus acciones entre combatir a los enemigos, mantener la carreta ligera y hacer que los caballos continúen corriendo. Cada segundo cuenta, porque cualquier descuido puede permitir que los monstruos lo alcancen.",
    ],
  },
  {
    title: "Sobrevive hasta el destino",
    paragraphs: [
      "Después de enfrentarse a numerosos enemigos y escapar de la gran criatura que lo perseguía, el cazador finalmente consigue abandonar el bosque. Frente a él aparece un paisaje tranquilo entre montañas, señal de que ha superado el peligro.",
      "Su objetivo siempre fue uno solo: sobrevivir al recorrido y llegar con vida al final del camino.",
    ],
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
