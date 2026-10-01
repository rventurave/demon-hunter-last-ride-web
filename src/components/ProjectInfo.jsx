import { ArrowUpRight, Code2 } from "lucide-react";
import { technical } from "../data/content";
export default function ProjectInfo() {
  return (
    <section
      id="proyecto"
      data-nav="proyecto"
      className="section container project-info"
    >
      <div data-reveal>
        <span className="eyebrow">08 / DETRÁS DE LA EXPERIENCIA</span>
        <h2>Project info</h2>
        <p>
          Un proyecto académico que explora la supervivencia, la presencia y la
          interacción en realidad virtual.
        </p>
        <span className="development-badge">
          <span className="live-dot" /> PROTOTIPO EN DESARROLLO
        </span>
        <Code2 className="project-symbol" size={115} strokeWidth={0.7} />
      </div>
      <dl data-reveal style={{ "--reveal-delay": "80ms" }}>
        {technical.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>
              {value}
              {label === "Estado" && <ArrowUpRight size={15} />}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
