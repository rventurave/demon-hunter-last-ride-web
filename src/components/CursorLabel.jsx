import { useEffect, useRef } from "react";

export default function CursorLabel() {
  const ref = useRef(null);
  useEffect(() => {
    if (
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const render = () => {
      frame = 0;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    };
    const move = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!frame) frame = requestAnimationFrame(render);
    };
    const over = (e) => {
      const target = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      if (target) {
        el.textContent = target.dataset.cursor;
        el.classList.add("is-visible");
      }
    };
    const out = (e) => {
      const target = e.target instanceof Element ? e.target.closest("[data-cursor]") : null;
      if (target && !target.contains(e.relatedTarget)) {
        el.classList.remove("is-visible");
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, true);
    document.addEventListener("mouseout", out, true);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over, true);
      document.removeEventListener("mouseout", out, true);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <div ref={ref} className="cursor-label" aria-hidden="true" />;
}
