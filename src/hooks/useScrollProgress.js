import { useEffect, useState } from "react";
export default function useScrollProgress() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let frame;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setValue(
          window.scrollY /
            Math.max(
              1,
              document.documentElement.scrollHeight - window.innerHeight,
            ),
        ),
      );
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return value;
}
