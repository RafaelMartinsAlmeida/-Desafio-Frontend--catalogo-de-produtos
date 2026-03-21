import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// importa o BrowserRouter para habilitar navegação entre páginas
import { BrowserRouter } from "react-router-dom";

// importa o CSS global
import "./index.css";

// aqui é onde a aplicação React é renderizada
ReactDOM.createRoot(document.getElementById("root")).render(
  // envolve o App com o Router para permitir rotas
  <BrowserRouter>
    <App />
  </BrowserRouter>
);