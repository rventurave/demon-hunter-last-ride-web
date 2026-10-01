import { useRef, useState } from "react";
import { Play, Film, Pause, Volume2 } from "lucide-react";
import { mediaExists, mediaUrl } from "./Media";
import { fallbackImage } from "../../data/content";

export default function VideoCard({
  item,
  index = 0,
  label = "GAMEPLAY",
  compact = false,
  showPoster = true,
  showPlayOverlay = false,
  ...rest
}) {
  const [playing, setPlaying] = useState(false),
    [started, setStarted] = useState(false),
    [failed, setFailed] = useState(false),
    [duration, setDuration] = useState(null);
  const video = useRef(null);
  const available = mediaExists(item.video) && !failed;
  const poster = showPoster
    ? mediaExists(item.image)
      ? mediaUrl(item.image)
      : fallbackImage
    : undefined;
  const showCover = available && showPlayOverlay && !started;
  return (
    <article
      className={`video-card ${playing ? "is-playing" : ""} ${compact ? "compact" : ""}`}
      {...rest}
    >
      <div className="video-frame">
        {available ? (
          <>
            <video
              ref={video}
              controls={started || !showPlayOverlay}
              preload="metadata"
              playsInline
              poster={poster}
              aria-label={item.title}
              onPlay={(e) => {
                document.querySelectorAll("video").forEach((other) => {
                  if (other !== e.currentTarget) other.pause();
                });
                setStarted(true);
                setPlaying(true);
              }}
              onPause={() => setPlaying(false)}
              onEnded={() => setPlaying(false)}
              onError={() => {
                setFailed(true);
                setPlaying(false);
              }}
              onLoadedMetadata={(e) => {
                const time = e.currentTarget.duration;
                if (Number.isFinite(time))
                  setDuration(
                    `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, "0")}`,
                  );
              }}
            >
              <source src={mediaUrl(item.video)} type="video/mp4" />
              {item.captions && (
                <track
                  kind="captions"
                  src={mediaUrl(item.captions)}
                  srcLang="es"
                  label="Español"
                  default
                />
              )}
              Tu navegador no admite videos HTML5.
            </video>
            {showCover && (
              <button
                type="button"
                className="video-cover"
                data-cursor="PLAY"
                aria-label={`Reproducir: ${item.title}`}
                onClick={() => video.current?.play()}
              >
                <span
                  className="video-cover-bg"
                  style={{
                    backgroundImage: `linear-gradient(#090b0b55,#090b0be6),url("${poster || fallbackImage}")`,
                  }}
                />
                <span className="video-cover-play">
                  <Play size={30} />
                </span>
              </button>
            )}
          </>
        ) : (
          <div
            className="video-placeholder"
            style={{
              backgroundImage: `linear-gradient(#090b0b88,#090b0bea),url("${fallbackImage}")`,
            }}
          >
            <Film size={32} />
            <span>
              {failed
                ? "Video no disponible"
                : "El recorrido está por comenzar"}
            </span>
            <small>
              {failed
                ? "No se pudo reproducir este archivo."
                : "Próximamente · material del prototipo"}
            </small>
            <button disabled className="pending-button">
              <Play size={13} /> VIDEO PENDIENTE
            </button>
          </div>
        )}
        {!showCover && (
          <span
            className={`video-status ${playing ? "playing" : ""}`}
            aria-live="polite"
          >
            {playing ? (
              <>
                <Volume2 size={12} /> REPRODUCIENDO
              </>
            ) : available ? (
              <>
                <Pause size={12} /> EN PAUSA
              </>
            ) : (
              <>MATERIAL PENDIENTE</>
            )}
          </span>
        )}
        {duration && <span className="duration">{duration}</span>}
      </div>
      <div className="video-info">
        <span className="eyebrow">
          {label} {String(index + 1).padStart(2, "0")}
        </span>
        <h3>{item.title}</h3>
        {item.description && <p>{item.description}</p>}
        {item.transcript && (
          <details>
            <summary>Leer transcripción</summary>
            <p>{item.transcript}</p>
          </details>
        )}
      </div>
    </article>
  );
}
