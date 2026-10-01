import { useState } from "react";
import {
  TriangleAlert,
  MessageSquare,
  CheckCircle2,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import VideoCard from "./ui/VideoCard";
import { userTests } from "../data/userTests";

export default function UserTesting() {
  const [openId, setOpenId] = useState(userTests[0]?.id ?? null);
  return (
    <section id="pruebas" data-nav="pruebas" className="section container">
      <SectionTitle
        number="05"
        eyebrow="DISEÑADO CON PERSONAS, PARA PERSONAS"
        title="Pruebas con usuarios"
        description="Observando cómo los jugadores interactúan realmente con nuestra experiencia VR. Cada prueba es una iteración independiente."
      />
      <div className="user-tests">
        {userTests.map((test, i) => {
          const code = String(test.id).padStart(2, "0");
          const open = openId === test.id;
          const panelId = `user-test-panel-${test.id}`;
          return (
            <article
              className={`user-test-card ${open ? "is-open" : ""}`}
              key={test.id}
              data-reveal
              style={{ "--reveal-delay": `${Math.min(i, 3) * 60}ms` }}
            >
              <button
                type="button"
                className="user-test-head"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : test.id)}
              >
                <span className="user-test-index">
                  <small>PRUEBA</small>
                  <strong>{code}</strong>
                </span>
                <span className="user-test-meta">
                  <span className="eyebrow">{test.tag}</span>
                  <h3>{test.title}</h3>
                </span>
                <span className="user-test-toggle" aria-hidden="true">
                  {open ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              <div
                id={panelId}
                className="user-test-collapse"
                role="region"
                aria-label={`Detalle de la prueba ${code}`}
                inert={open ? undefined : true}
              >
                <div className="user-test-collapse-inner">
                  <div className="user-test-compare">
                    <div className="compare-col is-before">
                      <span className="eyebrow">ANTES</span>
                      <p>{test.before}</p>
                    </div>
                    <span className="compare-arrow" aria-hidden="true">
                      <ArrowRight size={18} />
                    </span>
                    <div className="compare-col is-after">
                      <span className="eyebrow">DESPUÉS</span>
                      <p>{test.after}</p>
                    </div>
                  </div>
                  <div className="user-test-body">
                    <div className="user-test-media">
                      <VideoCard
                        item={test}
                        index={test.id - 1}
                        compact
                        showPoster={false}
                      />
                    </div>
                    <div className="user-test-feedback">
                      <div className="feedback-block is-problem">
                        <span className="eyebrow">
                          <TriangleAlert size={15} /> PROBLEMA IDENTIFICADO
                        </span>
                        <ul>
                          {test.problems.map((text) => (
                            <li key={text}>{text}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="feedback-block is-feedback">
                        <span className="eyebrow">
                          <MessageSquare size={15} /> FEEDBACK DEL USUARIO
                        </span>
                        <p className="feedback-quote">“{test.feedback}”</p>
                      </div>
                      <div className="feedback-block is-solution">
                        <span className="eyebrow">
                          <CheckCircle2 size={15} /> CÓMO LO SOLUCIONAMOS
                        </span>
                        <p>{test.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
