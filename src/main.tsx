import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@app/App";
import { BrowserRouter } from "react-router";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
