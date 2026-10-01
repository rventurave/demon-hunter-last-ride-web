import { ArrowUp } from "lucide-react";
import { Mark } from "./Navbar";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <a href="#inicio" className="brand">
            <Mark />
            <span>
              DEMON HUNTER
              <br />
              <strong>LAST RIDE</strong>
            </span>
          </a>
          <span className="eyebrow">THE DARKNESS IS ONLY THE BEGINNING.</span>
          <a className="back-top" href="#inicio">
            VOLVER ARRIBA <ArrowUp size={17} />
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © 2026 Demon Hunter: Last Ride · VR Experience
            <br />
            <small>Proyecto académico.</small>
          </span>
          <nav aria-label="Enlaces del pie de página">
            <a href="#historia">Historia</a>
            <a href="#storyboard">Storyboard</a>
            <a href="#gameplay">Gameplay</a>
            <a href="#pruebas">User Testing</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
