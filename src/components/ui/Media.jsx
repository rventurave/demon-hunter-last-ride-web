import { useState } from "react";
import available from "virtual:media";
import { asset, fallbackImage } from "../../data/content";
export const mediaExists = (path) =>
  Boolean(
    path &&
    (available.includes(path.replace(/^\//, "")) || /^https?:\/\//.test(path)),
  );
export const mediaUrl = (path) =>
  /^https?:\/\//.test(path) ? path : asset(path);
export default function Media({
  src,
  alt,
  className = "",
  eager = false,
  showLabel = true,
}) {
  const [failed, setFailed] = useState(false);
  const ready = mediaExists(src) && !failed;
  return (
    <span className={`media ${className}`}>
      <img
        src={ready ? mediaUrl(src) : fallbackImage}
        alt={
          ready
            ? alt
            : `Ilustración de ambiente: ${alt}. Imagen del juego pendiente.`
        }
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        onError={() => setFailed(true)}
      />
      {!ready && showLabel && (
        <span className="media-label">
          Ilustración conceptual · material pendiente
        </span>
      )}
    </span>
  );
}
