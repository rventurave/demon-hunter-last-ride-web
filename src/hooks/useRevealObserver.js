import { useEffect } from "react";

export default function useRevealObserver() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    if (!elements.length) return;
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-revealed", "true"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // Keep the reveal marker independent of React's dynamic className.
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
