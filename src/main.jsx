import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// importa o BrowserRouter para habilitar navegação entre páginas
import { BrowserRouter } from "react-router-dom";

// importa o contexto do carrinho
import { CartProvider } from "./context/CartContext";

// importa o CSS global
import "./index.css";

// aqui é onde a aplicação React é renderizada
ReactDOM.createRoot(document.getElementById("root")).render(
  // envolve tudo com o CartProvider (estado global)
  <CartProvider>
    {/* Router continua funcionando normalmente */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);