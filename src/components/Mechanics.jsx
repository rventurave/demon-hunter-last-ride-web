import { useState } from "react";
import {
  Swords,
  Move,
  Zap,
  Bug,
  Weight,
  Skull,
  Flame,
  Plus,
  Minus,
} from "lucide-react";
import { mechanics } from "../data/mechanics";
import SectionTitle from "./ui/SectionTitle";
const icons = { Swords, Move, Zap, Bug, Weight, Skull, Flame };
export default function Mechanics() {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="mecanicas"
      data-nav="mecanicas"
      className="section section-tinted"
    >
      <div className="container">
        <SectionTitle
          number="02"
          eyebrow="CADA DECISIÓN CUENTA"
          title="Mecánicas principales"
          description="Domina tus herramientas. Conoce tus amenazas. Sobrevive al recorrido."
        />
        <div className="mechanics-grid">
          {mechanics.map((item, i) => {
            const Icon = icons[item.icon],
              active = selected === i;
            return (
              <article
                key={item.title}
                className={`mechanic-card ${active ? "selected" : ""}`}
                data-reveal
                style={{ "--reveal-delay": `${(i % 4) * 60}ms` }}
              >
                <button
                  aria-expanded={active}
                  aria-controls={`mechanic-${i}`}
                  onClick={() => setSelected(active ? null : i)}
                >
                  <span className="mechanic-top">
                    <Icon size={27} />
                    <span>0{i + 1}</span>
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <span className="card-action">
                    {active ? "Cerrar detalle" : "Explorar mecánica"}
                    {active ? <Minus size={17} /> : <Plus size={17} />}
                  </span>
                </button>
                <div
                  id={`mechanic-${i}`}
                  hidden={!active}
                  className="mechanic-detail"
                >
                  {item.detail}
                </div>
              </article>
            );
          })}
          <div className="mechanic-quote">
            <span aria-hidden="true">生き残れ</span>
            <p>
              No basta con luchar.
              <br />
              <em>Hay que seguir avanzando.</em>
            </p>
            <span className="small-rule" />
          </div>
        </div>
      </div>
    </section>
  );
}
