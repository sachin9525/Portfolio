import React from "react";
import ReactDOM from "react-dom/client";
import { PortfolioApp } from "./portfolio/PortfolioApp";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PortfolioApp />
  </React.StrictMode>
);
