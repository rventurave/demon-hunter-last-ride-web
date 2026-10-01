// Cada prueba de usuario es una iteración independiente. Cada una muestra
// el problema identificado, el feedback, la solución aplicada, el contraste
// antes/después y la grabación de la sesión.
const source = [
  {
    id: 1,
    title: "Posición inicial y comodidad del jugador",
    tag: "VR USER TEST",
    problems: [
      "El jugador aparecía mirando hacia atrás.",
      "La altura inicial no era la correcta.",
      "Resultaba difícil alcanzar la espada.",
      "La espada quedaba demasiado cerca de los mangos.",
    ],
    feedback:
      "El inicio se siente incómodo porque aparezco mal orientado y algunos objetos no están en una posición fácil de alcanzar.",
    solution:
      "Reajustamos la posición, orientación y altura inicial del jugador. También reposicionamos la espada para que sea fácil de alcanzar sin interferir con las riendas.",
    before:
      "El jugador aparecía fuera de la carreta, mal orientado y a una altura incorrecta.",
    after:
      "El jugador inicia dentro de la carreta, a la altura correcta y mirando hacia los caballos.",
  },
  {
    id: 2,
    title: "Control de la carreta y riendas",
    tag: "VR USER TEST",
    problems: [
      "La desaceleración era demasiado brusca.",
      "El steering era poco sensible.",
      "A veces, al girar a la izquierda, no se podía cambiar correctamente hacia la derecha.",
      "El control dependía de qué mango usara cada mano.",
      "Faltaba un control lateral más claro.",
    ],
    feedback:
      "El movimiento funciona, pero cambiar de dirección puede sentirse lento o quedarse bloqueado, y debería poder usar cualquier mango con cualquier mano.",
    solution:
      "Aumentamos la sensibilidad del steering y corregimos el cambio entre izquierda y derecha. Además, permitimos usar cualquiera de los mangos con ambas manos sin alterar la aceleración del látigo.",
    before:
      "Cambiar de dirección se sentía lento y a veces quedaba bloqueado, y el control dependía del mango usado.",
    after:
      "El steering responde mejor, el giro izquierda/derecha funciona y cualquier mango sirve con ambas manos.",
  },
  {
    id: 3,
    title: "Aparición y persecución de zombies",
    tag: "VR USER TEST",
    problems: [
      "Los zombies aparecían demasiado pronto.",
      "Su aparición se sentía poco natural.",
      "Podían aparecer demasiados enemigos al frente.",
      "Algunos zombies quedaban estáticos o generaban poca presión.",
      "Faltaban apariciones desde las zonas laterales.",
    ],
    feedback:
      "Los zombies deberían aparecer de forma más progresiva y venir también desde los árboles y los costados, no todos directamente de frente.",
    solution:
      "Configuramos un inicio de aparición después de 7 segundos, limitamos el frente a un solo zombie y permitimos grupos laterales dispersos desde zonas cercanas a los árboles.",
    before:
      "Los zombies aparecían de golpe, únicamente de frente y de forma poco natural.",
    after:
      "Aparecen de forma progresiva, también desde los lados y desde las zonas cercanas a los árboles.",
  },
  {
    id: 4,
    title: "Comportamiento de zombies en la carreta",
    tag: "VR USER TEST",
    problems: [
      "Los zombies se mantenían demasiado lejos de la carreta.",
      "Su posición respecto a las ruedas era incorrecta.",
      "No permanecían bien sujetos a la carreta.",
      "Algunos no perseguían después de quedar atrás.",
      "Las animaciones se veían poco naturales.",
    ],
    feedback:
      "Cuando alcanzan la carreta deberían quedarse realmente pegados y verse como si estuvieran atacando desde los lados o desde atrás.",
    solution:
      "Añadimos puntos de agarre laterales y traseros vinculados a la carreta y ajustamos la persecución y animación para que los zombies corran, se acerquen y permanezcan sujetos correctamente.",
    before:
      "Los zombies no se sujetaban bien a la carreta ni atacaban desde los costados o la parte trasera.",
    after:
      "Quedan fijados a puntos de agarre laterales y traseros, y atacan desde los lados o desde atrás.",
  },
  {
    id: 5,
    title: "Combate con espada y manos",
    tag: "VR USER TEST",
    problems: [
      "El alcance de la espada era corto.",
      "La espada podía perderse fuera de la carreta.",
      "Los sonidos se reproducían aunque no hubiera impacto.",
      "El feedback del golpe era poco claro.",
      "No había combate con las manos.",
      "Los zombies tardaban demasiado en morir.",
    ],
    feedback:
      "A veces parece que la espada toca al zombie pero no pasa nada, y también sería útil poder defenderse usando las manos.",
    solution:
      "Ajustamos el alcance y recuperación de la espada, hicimos que un golpe válido de espada mate al zombie y añadimos combate con manos, donde el zombie necesita dos golpes.",
    before:
      "La espada tenía poco alcance, los golpes no siempre hacían efecto y no existía el combate con las manos.",
    after:
      "La espada alcanza más y un golpe válido elimina al zombie; con las manos, el enemigo cae en dos golpes.",
  },
  {
    id: 6,
    title: "Audio, visibilidad y feedback",
    tag: "VR USER TEST",
    problems: [
      "El escenario era demasiado oscuro.",
      "No quedaba claro cuándo se impactaba a un enemigo.",
      "Los sonidos de la espada no coincidían con las acciones.",
      "La muerte del zombie no era evidente.",
    ],
    feedback:
      "Cuesta distinguir algunos elementos y no siempre queda claro cuándo un golpe fue efectivo o cuándo el zombie murió.",
    solution:
      "Mejoramos la iluminación cercana a la carreta y reorganizamos los audios: sonido al agarrar la espada, impactos solo cuando hay daño y un sonido específico y más fuerte al morir el zombie.",
    before:
      "El escenario era muy oscuro y no se distinguía cuándo un golpe tenía efecto ni cuándo moría un zombie.",
    after:
      "Hay mejor iluminación junto a la carreta y sonidos claros para el impacto y la muerte del enemigo.",
  },
  {
    id: 7,
    title: "Inicio, progresión y final del juego",
    tag: "VR USER TEST",
    problems: [
      "El juego comenzaba antes de que el jugador estuviera listo.",
      "El menú inicial tenía demasiadas instrucciones.",
      "El Game Over estaba demasiado cerca.",
      "Faltaba un objetivo final claro.",
      "Faltaba una sensación de victoria.",
    ],
    feedback:
      "El inicio debería ser más simple y el jugador debería saber claramente cuándo empieza y cuál es su objetivo final.",
    solution:
      "Simplificamos el menú para iniciar al tomar ambas riendas, reposicionamos el Game Over y añadimos el castillo como objetivo final con celebración, fuegos artificiales y el mensaje “CONGRATULATIONS”.",
    before:
      "El juego empezaba sin avisar, con instrucciones de sobra y sin un objetivo final claro.",
    after:
      "El viaje inicia al tomar ambas riendas y termina en el castillo con celebración de victoria.",
  },
];

export const userTests = source.map((test) => ({
  ...test,
  video: `assets/video/pruebaUsers/${test.id}.mp4`,
}));

export const results = [
  { value: 4, label: "Usuarios evaluados" },
  { value: 3, label: "Iteraciones realizadas" },
  { value: 7, label: "Problemas detectados" },
  { value: 6, label: "Problemas corregidos" },
];

export const findings = [
  "Los usuarios comprendieron rápidamente el sistema de combate.",
  "Algunos usuarios tuvieron dificultades identificando ataques enemigos.",
  "El sistema de látigos necesitaba mejor feedback visual.",
  "Algunos elementos interactivos no eran suficientemente visibles.",
];

export const improvements = [
  "Mejor feedback de combate.",
  "Indicadores visuales.",
  "Ajustes de velocidad.",
  "Mejor respuesta de enemigos.",
  "Cambios en elementos interactivos.",
];
