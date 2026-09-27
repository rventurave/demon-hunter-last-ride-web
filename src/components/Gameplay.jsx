import SectionTitle from "./ui/SectionTitle";
import VideoCard from "./ui/VideoCard";
import { gameplay } from "../data/gameplay";
export default function Gameplay() {
  return (
    <section
      id="gameplay"
      data-nav="gameplay"
      className="section section-tinted"
    >
      <div className="container">
        <SectionTitle
          number="04"
          eyebrow="DENTRO DE LA EXPERIENCIA"
          title="Gameplay"
          description="Observa algunas de las principales mecánicas implementadas en el prototipo."
        />
        <div className="video-grid">
          {gameplay.map((item, index) => (
            <VideoCard key={item.id} item={item} index={index} />
          ))}
        </div>
        <p className="section-footnote">
          Sin reproducción automática. Tú decides cuándo entrar en la
          experiencia.
        </p>
      </div>
    </section>
  );
}
