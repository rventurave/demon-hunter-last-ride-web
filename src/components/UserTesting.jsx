import { Eye, TriangleAlert, Check, ArrowDown, Users } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import VideoCard from "./ui/VideoCard";
import { userTests } from "../data/userTests";
import { project } from "../data/content";
export default function UserTesting() {
  return (
    <section id="pruebas" data-nav="pruebas" className="section container">
      <SectionTitle
        number="05"
        eyebrow="DISEÑADO CON PERSONAS, PARA PERSONAS"
        title="Pruebas con usuarios"
        description="Observando cómo los jugadores interactúan realmente con nuestra experiencia VR."
      />
      {project.demo && (
        <div className="demo-notice">
          <Users size={18} />
          <p>
            <strong>Documentación de ejemplo.</strong> Las sesiones, métricas y
            mejoras de esta sección son contenido inicial. Se sustituirán por
            evidencias de las pruebas reales.
          </p>
        </div>
      )}
      {userTests.map((item, i) => (
        <article className="user-test" key={item.id}>
          <div className="test-video">
            <div className="test-heading">
              <span className="test-avatar">
                <Users size={21} />
              </span>
              <div>
                <span className="eyebrow">{item.participant}</span>
                <h3>{item.title}</h3>
              </div>
              <span className="sample-tag">
                {project.demo ? "EJEMPLO" : "SESIÓN"}
              </span>
            </div>
            <p className="test-objective">
              <strong>Objetivo</strong> {item.objective}
            </p>
            <VideoCard item={item} index={i} label="SESIÓN" compact />
          </div>
          <div className="test-flow">
            {[
              [Eye, "OBSERVAMOS", item.observation, "observation"],
              [TriangleAlert, "PROBLEMA", item.problem, "problem"],
              [Check, "CAMBIO REALIZADO", item.improvement, "improvement"],
            ].map(([Icon, label, text, className], j) => (
              <div className={`flow-step ${className}`} key={label}>
                <span className="flow-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <span className="eyebrow">{label}</span>
                  <p>{text}</p>
                </div>
                {j < 2 && <ArrowDown className="flow-arrow" size={15} />}
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
