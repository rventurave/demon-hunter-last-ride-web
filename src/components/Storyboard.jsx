import { Expand } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import ImageCard from "./ui/ImageCard";
import { storyboard } from "../data/storyboard";
export default function Storyboard({ onOpen }) {
  return (
    <section
      id="storyboard"
      data-nav="storyboard"
      className="section container"
    >
      <SectionTitle
        number="03"
        eyebrow="ANTES DE LA PRIMERA LÍNEA DE CÓDIGO"
        title="Storyboard"
        description="De la idea a la experiencia."
      >
        <span className="section-tip">
          <Expand size={15} /> Selecciona una escena para ampliarla
        </span>
      </SectionTitle>
      <div className="storyboard-grid">
        {storyboard.map((item, i) => (
          <ImageCard
            key={item.id}
            item={item}
            index={i}
            onOpen={() => onOpen(storyboard, i, "Storyboard")}
            data-reveal
            style={{ "--reveal-delay": `${(i % 3) * 70}ms` }}
          />
        ))}
      </div>
    </section>
  );
}
