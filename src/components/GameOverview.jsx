import { Headset, Swords, Flame, ArrowUpRight } from "lucide-react";
export default function GameOverview() {
  return (
    <section id="juego" data-nav="inicio" className="overview">
      <div className="container overview-inner">
        <div className="overview-intro" data-reveal>
          <span className="eyebrow">EL JUEGO</span>
          <h2>
            La oscuridad avanza.
            <br />
            <span>Tú también debes hacerlo.</span>
          </h2>
        </div>
        <div className="overview-copy" data-reveal style={{ "--reveal-delay": "80ms" }}>
          <p>
            Viaja por caminos infestados de criaturas mientras defiendes tu
            carreta y proteges las últimas llamas que mantienen viva tu
            esperanza.
          </p>
          <div className="genre-tags">
            <span>
              <Headset /> Realidad virtual
            </span>
            <span>
              <Flame /> Supervivencia
            </span>
            <span>
              <Swords /> Acción
            </span>
          </div>
        </div>
        <a
          href="#mecanicas"
          className="round-link"
          aria-label="Explorar las mecánicas"
          data-reveal
          style={{ "--reveal-delay": "140ms" }}
        >
          <ArrowUpRight />
        </a>
      </div>
    </section>
  );
}
