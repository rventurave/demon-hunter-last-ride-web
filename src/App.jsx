import { useCallback, useState, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameOverview from "./components/GameOverview";
import Story from "./components/Story";
import Mechanics from "./components/Mechanics";
import Storyboard from "./components/Storyboard";
import Gameplay from "./components/Gameplay";
import UserTesting from "./components/UserTesting";
import TestingResults from "./components/TestingResults";
import DevelopmentTimeline from "./components/DevelopmentTimeline";
import ProjectInfo from "./components/ProjectInfo";
import Footer from "./components/Footer";
import Modal from "./components/ui/Modal";
import BackToTop from "./components/BackToTop";
import CursorLabel from "./components/CursorLabel";
import useRevealObserver from "./hooks/useRevealObserver";
export default function App() {
  useRevealObserver();
  const [lightbox, setLightbox] = useState(null);
  const opener = useRef(null);
  const open = useCallback((items, index, title) => {
    opener.current = document.activeElement;
    setLightbox({ items, index, title });
  }, []);
  const close = useCallback(() => {
    setLightbox(null);
    requestAnimationFrame(() => opener.current?.focus({ preventScroll: true }));
  }, []);
  const change = useCallback(
    (delta) =>
      setLightbox((current) =>
        current
          ? {
              ...current,
              index:
                (current.index + delta + current.items.length) %
                current.items.length,
            }
          : null,
      ),
    [],
  );
  return (
    <>
      <div inert={lightbox ? true : undefined}>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" tabIndex={-1}>
          <Hero />
          <GameOverview />
          <Story />
          <Mechanics />
          <Storyboard onOpen={open} />
          <Gameplay />
          <UserTesting />
          <TestingResults />
          <DevelopmentTimeline />
          <ProjectInfo />
        </main>
        <Footer />
        <BackToTop />
      </div>
      {lightbox && <Modal value={lightbox} onClose={close} onChange={change} />}
      <CursorLabel />
    </>
  );
}
