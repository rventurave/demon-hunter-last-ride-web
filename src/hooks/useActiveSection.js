import { useEffect, useState } from "react";
export default function useActiveSection() {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    let frame;
    const sections = [...document.querySelectorAll("[data-nav]")];
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        let current = "inicio";
        for (const section of sections)
          if (section.getBoundingClientRect().top <= window.innerHeight * 0.35)
            current = section.dataset.nav;
        setActive(current);
      });
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
  return active;
}
