import React from "react";
import "@fontsource-variable/manrope";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/cinzel/latin-400.css";
import "@fontsource/cinzel/latin-500.css";
import "@fontsource/cinzel/latin-600.css";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/index.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
