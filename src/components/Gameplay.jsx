import {
  Headset,
  Navigation,
  Zap,
  TrendingDown,
  Sword,
  Ghost,
  Weight,
  Skull,
  Route,
  Orbit,
  HeartPulse,
  Trophy,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import VideoCard from "./ui/VideoCard";
import { gameplayVideo, gameplayFeatures } from "../data/gameplay";
const icons = {
  Headset,
  Navigation,
  Zap,
  TrendingDown,
  Sword,
  Ghost,
  Weight,
  Skull,
  Route,
  Orbit,
  HeartPulse,
  Trophy,
};
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
          description="Un vistazo al recorrido y a las funcionalidades que sostienen la experiencia."
        />
        <div className="gameplay-showcase" data-reveal>
          <VideoCard item={gameplayVideo} showPoster={false} />
        </div>
        <div className="gameplay-features">
          {gameplayFeatures.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <article
                key={feature.title}
                className="feature-card"
                data-reveal
                style={{ "--reveal-delay": `${(index % 4) * 70}ms` }}
              >
                <span className="feature-icon" aria-hidden="true">
                  <Icon size={24} />
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </div>
        <p className="section-footnote">
          Sin reproducción automática. Tú decides cuándo entrar en la
          experiencia.
        </p>
      </div>
    </section>
  );
}
