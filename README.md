# Japanese Demon Hunter — VR Experience

Sitio responsive de presentación y documentación de un prototipo VR. React 19, Vite, Lucide y CSS adaptable, sin backend. Tipografías Cinzel e Inter alojadas localmente. Las animaciones usan CSS; no se necesita una librería adicional.

## Ejecutar

Requiere Node.js 22.12 o superior.

```sh
npm ci
npm run dev
```

Abrir la dirección que muestra Vite. Para producción:

```sh
npm run build
npm run preview
```

La carpeta `dist/` contiene el sitio desplegable.

## Contenido y recursos

Los textos iniciales y la configuración están separados de la interfaz:

| Archivo                  | Contenido                                                            |
| ------------------------ | -------------------------------------------------------------------- |
| `src/data/content.js`    | Portada, historia, galería, cronología, ficha técnica y modo ejemplo |
| `src/data/mechanics.js`  | Mecánicas y detalles expandibles                                     |
| `src/data/storyboard.js` | Escenas, descripciones e imágenes                                    |
| `src/data/gameplay.js`   | Videos de gameplay y miniaturas                                      |
| `src/data/userTests.js`  | Sesiones, observaciones, problemas, mejoras, métricas y hallazgos    |

**No se han proporcionado imágenes, grabaciones ni resultados reales.** La ilustración vectorial de ambiente es original y conceptual; no representa una captura del juego. Las pruebas y métricas vienen marcadas como ejemplos mediante `project.demo: true`. Sustituye las evidencias y los datos antes de cambiar este valor a `false`.

Coloca los archivos reales dentro de `public/` siguiendo estas rutas:

```text
public/assets/
  images/
    hero.jpg
    story-01.jpg … story-03.jpg
    gameplay-01.jpg … gameplay-03.jpg
    storyboard/storyboard-01.jpg … storyboard-06.jpg
    gallery/game-01.jpg … game-04.jpg
    tests/user-01.jpg
  videos/
    gameplay-01.mp4 … gameplay-03.mp4
    tests/user-01.mp4
```

Las rutas en los datos se escriben **sin `public/` y sin barra inicial**, por ejemplo `assets/videos/gameplay-01.mp4`. También se admiten URLs HTTPS; estas dependen del servidor externo.

El plugin local de Vite genera un manifiesto de los recursos existentes. Un archivo ausente muestra una ilustración o un estado «Video pendiente» sin solicitar una URL inexistente. Al añadir archivos, Vite recarga automáticamente; en producción hay que **compilar y desplegar de nuevo**. Los errores de reproducción muestran un estado comprensible.

Ejemplo de un video real:

```js
{
  id: 'gameplay-04',
  title: 'Una nueva mecánica',
  description: 'Descripción de lo que se observa.',
  video: 'assets/videos/gameplay-04.mp4',
  image: 'assets/images/gameplay-04.jpg',
  captions: 'assets/videos/gameplay-04.es.vtt',
  transcript: 'Transcripción o descripción de los acontecimientos del video.'
}
```

La duración se obtiene de los metadatos. Se usan controles nativos, `playsInline`, `preload="metadata"` y ninguna reproducción automática. Al comenzar un video se pausan todos los demás, incluidas las pruebas con usuarios. Añade subtítulos WebVTT y transcripciones a las grabaciones para mantener la accesibilidad. Usa MP4 H.264/AAC para compatibilidad amplia; comprime las imágenes y evita grabaciones excesivamente pesadas.

## Interacción y accesibilidad

- Navegación fija con sección activa, menú móvil con `aria-expanded`, cierre con Escape y barra de progreso.
- Enlaces de sección reales y salto al contenido para teclado.
- Mecánicas expandibles con clic, tap, Enter o espacio.
- Lightbox compartido por storyboard y galería, contador, botones, flechas del teclado, Escape y cierre pulsando el fondo.
- Foco contenido en el diálogo, contenido de fondo inerte, scroll bloqueado y devolución del foco al elemento de apertura.
- Estados hover, active, focus-visible, seleccionado, deshabilitado y reproducción.
- Soporte `prefers-reduced-motion`, imágenes diferidas y fuentes locales.
- Diseño específico para móvil desde 320 px, tablet y escritorio.

La lectura con tecnologías asistivas y el contraste del contenido multimedia definitivo deben revisarse al añadir los recursos reales; no se afirma una certificación WCAG.

## Verificación

```sh
npx playwright install chromium
npm test
```

Las pruebas de navegador comprueban navegación activa, enlaces internos, tarjetas, lightbox y restauración del foco, menú móvil, tamaños de 320/390/768/1440 px, recursos pendientes, reducción de movimiento y reproducción exclusiva mediante un video sintético de prueba. El video de `tests/fixtures/` es solo una fixture, no se publica como gameplay.

## GitHub Pages

Se incluye `.github/workflows/deploy.yml`. Para publicarlo:

1. Sube el repositorio a GitHub con la rama `main` (o ajusta la rama en el workflow).
2. En **Settings → Pages → Build and deployment**, selecciona **GitHub Actions**.
3. Un push a `main`, o la ejecución manual del workflow, compila y publica `dist/`.

La configuración `base: './'` y el helper `asset()` permiten desplegar bajo `/nombre-del-repositorio/` o en un dominio propio. No se usa router de cliente ni se necesitan redirecciones SPA. Todos los enlaces de navegación son anclas de la misma página. El workflow requiere permisos de Pages habilitados en el repositorio.

## Estructura

```text
src/
  components/           Secciones independientes
    ui/                 Botón, títulos, medios, tarjetas y lightbox
  data/                 Contenido editable
  hooks/                Progreso y sección activa
  styles/index.css      Tokens, diseño y responsive
  App.jsx
  main.jsx
public/assets/          Recursos originales y futuros archivos multimedia
tests/                  Pruebas de navegador
```

Las fuentes se distribuyen con sus licencias en los paquetes `@fontsource`; los iconos proceden de Lucide. No se usan fotos ni capturas de terceros.
