import SectionTitle from "./ui/SectionTitle";
import { storyNarrative } from "../data/content";
export default function Story() {
  return (
    <section id="historia" data-nav="historia" className="section container">
      <SectionTitle
        number="01"
        eyebrow="EL MUNDO QUE TE ESPERA"
        title="La historia"
        description="Un camino, un bosque y una sola oportunidad de llegar con vida."
      />
      <div className="story-narrative">
        {storyNarrative.map((paragraph, i) => (
          <p key={i} className={i === 0 ? "story-lead" : undefined}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
