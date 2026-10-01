import { Check, ArrowUpRight, ArrowRight } from "lucide-react";
import { results, findings, improvements } from "../data/userTests";
import { project } from "../data/content";
export default function TestingResults() {
  return (
    <section
      id="resultados"
      data-nav="resultados"
      className="section results-section"
    >
      <div className="container">
        <div className="results-title" data-reveal>
          <h2>Escuchar. Aprender. Mejorar.</h2>
          <span className="eyebrow">
            RESULTADOS DE LAS PRUEBAS {project.demo && "· EJEMPLO"}
          </span>
        </div>
        <div className="stats-grid">
          {results.map((item, i) => (
            <div
              key={item.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` }}
            >
              <strong>{String(item.value).padStart(2, "0")}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div className="findings-grid">
          <div data-reveal>
            <h3>
              <ArrowUpRight size={19} /> Principales hallazgos
            </h3>
            <ul>
              {findings.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" }}>
            <h3>
              <Check size={19} /> Cambios implementados
            </h3>
            <ul className="improvements">
              {improvements.map((text) => (
                <li key={text}>
                  <Check size={14} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="iteration" data-reveal>
          <div>
            <span className="eyebrow">UN PROCESO QUE NO SE DETIENE</span>
            <h3>Cada prueba transforma el diseño.</h3>
            <p>
              Las observaciones de los jugadores orientan la siguiente versión
              del prototipo.
            </p>
          </div>
          <ol>
            {[
              "Diseñar",
              "Prototipar",
              "Probar",
              "Observar",
              "Mejorar",
              "Volver a probar",
            ].map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                {step}
                {i < 5 && <ArrowRight size={15} />}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
