import SectionTitle from "./ui/SectionTitle";
import { development } from "../data/content";
export default function DevelopmentTimeline() {
  return (
    <section id="desarrollo" data-nav="proyecto" className="section container">
      <SectionTitle
        number="06"
        eyebrow="DE LA IDEA AL PROTOTIPO"
        title="El proceso de desarrollo"
        description="Construir una experiencia, una decisión a la vez."
      />
      <ol className="development-timeline">
        {development.map(([title, description], i) => (
          <li key={title}>
            <span className="timeline-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
