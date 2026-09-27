import SectionTitle from "./ui/SectionTitle";
import Media from "./ui/Media";
import { story } from "../data/content";
export default function Story() {
  return (
    <section id="historia" data-nav="historia" className="section container">
      <SectionTitle
        number="01"
        eyebrow="EL MUNDO QUE TE ESPERA"
        title="La historia"
        description="Un camino. Cuatro llamas. Ninguna vuelta atrás."
      />
      {story.map((item, i) => (
        <article
          className={`story-row ${i % 2 ? "reverse" : ""}`}
          key={item.number}
        >
          <div className="story-image">
            <Media src={item.image} alt={item.title} />
            <span className="image-caption">{item.caption}</span>
          </div>
          <div className="story-text">
            <span className="chapter">
              CAPÍTULO {item.number}
              <span />
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <p>{item.detail}</p>
            {i === 2 && (
              <div
                className="candles"
                aria-label="Cuatro velas: conserva al menos una encendida"
              >
                {[1, 2, 3, 4].map((n) => (
                  <span key={n}>
                    <span className="flame" />
                    <span className="candle" />
                  </span>
                ))}
                <small>LA LUZ ES TU ÚLTIMA DEFENSA.</small>
              </div>
            )}
          </div>
        </article>
      ))}
    </section>
  );
}
