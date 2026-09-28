import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import Media from "./Media";
export default function Modal({ value, onClose, onChange }) {
  const dialog = useRef(null);
  const close = useRef(null);
  const { items, index, title } = value;
  const item = items[index];
  useEffect(() => {
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    close.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
    };
  }, []);
  useEffect(() => {
    function key(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onChange(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onChange(-1);
      }
      if (e.key === "Tab") {
        const buttons = [
          ...dialog.current.querySelectorAll(
            'button:not(:disabled),[href],[tabindex="0"]',
          ),
        ];
        const first = buttons[0],
          last = buttons.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [onClose, onChange]);
  return createPortal(
    <div
      className="modal-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-title"
        aria-describedby={item.description ? "lightbox-description" : undefined}
        ref={dialog}
      >
        <div className="lightbox-top">
          <span>
            {title}{" "}
            <span className="lightbox-count" aria-live="polite">
              {index + 1} / {items.length}
            </span>
          </span>
          <button ref={close} className="text-button" onClick={onClose}>
            <X size={19} /> Cerrar
          </button>
        </div>
        <Media
          key={item.id}
          className="lightbox-image"
          src={item.image}
          alt={item.title}
        />
        <div className="lightbox-bottom">
          <button
            className="text-button"
            disabled={items.length < 2}
            onClick={() => onChange(-1)}
          >
            <ArrowLeft size={20} />
            <span>Anterior</span>
          </button>
          <div aria-live="polite">
            <h3 id="lightbox-title">{item.title}</h3>
            {item.description && <p id="lightbox-description">{item.description}</p>}
          </div>
          <button
            className="text-button"
            disabled={items.length < 2}
            onClick={() => onChange(1)}
          >
            <span>Siguiente</span>
            <ArrowRight size={20} />
          </button>
        </div>
        <p className="keyboard-hint">← → para navegar · ESC para cerrar</p>
      </div>
    </div>,
    document.body,
  );
}
