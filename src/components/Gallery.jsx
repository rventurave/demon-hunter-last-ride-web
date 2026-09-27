import SectionTitle from "./ui/SectionTitle";
import ImageCard from "./ui/ImageCard";
import { gallery } from "../data/content";
export default function Gallery({ onOpen }) {
  return (
    <section
      id="galeria"
      data-nav="proyecto"
      className="section section-tinted"
    >
      <div className="container">
        <SectionTitle
          number="07"
          eyebrow="FRAGMENTOS DE NUESTRO MUNDO"
          title="Galería"
          description="Una mirada a la atmósfera y los detalles de la experiencia."
        />
        <div className="gallery-grid">
          {gallery.map((item, i) => (
            <ImageCard
              key={item.id}
              item={item}
              index={i}
              label="CAPTURA"
              onOpen={() => onOpen(gallery, i, "Galería")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
