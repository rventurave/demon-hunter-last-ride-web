import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navItems } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import useScrollProgress from "../hooks/useScrollProgress";
export function Mark() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="35"
      height="35"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 8q16 5 32 0M7 15h26M12 12v23M28 12v23M12 24h16"
        stroke="currentColor"
        strokeWidth="3"
      />
    </svg>
  );
}
export default function Navbar() {
  const active = useActiveSection(),
    progress = useScrollProgress();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    function key(e) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <header className={`navbar ${progress > 0.01 ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <a
          className="brand"
          href="#inicio"
          aria-label="Demon Hunter: Last Ride, inicio"
          onClick={() => setOpen(false)}
        >
          <Mark />
          <span>
            DEMON HUNTER
            <br />
            <strong>LAST RIDE</strong>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
          <span>{open ? "Cerrar" : "Menú"}</span>
        </button>
        <nav
          id="navigation"
          aria-label="Navegación principal"
          className={open ? "open" : ""}
        >
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a className="nav-project" href="#proyecto">
            EL PROYECTO <ArrowUpRight size={15} />
          </a>
        </nav>
      </div>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
