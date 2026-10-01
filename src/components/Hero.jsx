import { ArrowDown, ArrowUpRight, Play, Headset } from "lucide-react";
import Media, { mediaExists } from "./ui/Media";
import Button from "./ui/Button";
import { project } from "../data/content";
export default function Hero() {
  return (
    <section id="inicio" data-nav="inicio" className="hero">
      <Media
        src={project.hero}
        alt="Una carreta iluminada atraviesa un bosque japonés oscuro bajo la luna"
        className="hero-art"
        eager
        showLabel={false}
      />
      <div className="hero-shade" />
      <div className="hero-content container hero-seq">
        <div className="eyebrow">
          <span className="live-dot" /> UNA EXPERIENCIA DE SUPERVIVENCIA VR
        </div>
        <h1>
          DEMON HUNTER
          <br />
          <span>LAST RIDE</span>
        </h1>
        <p className="hero-tagline">
          Sobrevive al camino.
          <br className="mobile-break" /> Protege las llamas.
        </p>
        <p className="hero-description">
          Una experiencia de supervivencia en realidad virtual donde deberás
          defender una carreta de criaturas que emergen de la oscuridad.
        </p>
        <div className="hero-actions">
          <Button href="#historia">
            DESCUBRIR LA HISTORIA <ArrowUpRight size={17} />
          </Button>
          <Button href="#gameplay" secondary>
            <Play size={15} /> VER GAMEPLAY
          </Button>
        </div>
        <div className="hero-platform">
          <Headset size={21} />
          <span>META QUEST 2</span>
          <span className="divider" />
          <span>DESARROLLADO EN UNITY</span>
        </div>
      </div>
      <div className="hero-bottom container">
        <a href="#juego" className="scroll-hint">
          <span className="scroll-line" /> SCROLL TO EXPLORE{" "}
          <ArrowDown size={14} />
        </a>
        <span className="hero-note">
          JAPÓN. UNA NOCHE SIN FINAL.
          {!mediaExists(project.hero) && (
            <span>コンセプトアート · ILUSTRACIÓN CONCEPTUAL</span>
          )}
        </span>
      </div>
      <span className="vertical-word" aria-hidden="true">
        闇を越えて
      </span>
    </section>
  );
}
