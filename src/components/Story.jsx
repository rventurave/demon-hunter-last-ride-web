import SectionTitle from "./ui/SectionTitle";
import { storyParagraphs } from "../data/story";

export default function Story() {
  return (
    <section id="historia" data-nav="historia" className="section container">
      <SectionTitle
        number="01"
        eyebrow="EL MUNDO QUE TE ESPERA"
        title="La historia"
      />
      <div className="story-narrative" data-reveal>
        {storyParagraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    </section>
  );
}
