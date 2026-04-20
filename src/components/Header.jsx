import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useTheme } from "../hooks/useTheme";

function Header() {

  const { cart } = useContext(CartContext);
  const { theme, toggleTheme } = useTheme();

  // total de itens
  const totalItens = cart.reduce((total, item) => {
    return total + item.quantidade;
  }, 0);

  return (
    <header className="header">

      {/* LOGO */}
      <Link to="/" className="logo">
        🛍️ DevStore
      </Link>

      {/* MENU */}
      <nav className="nav">
        <Link to="/">Produtos</Link>

        <Link to="/carrinho">
          🛒 Carrinho ({totalItens})
        </Link>

        {/* BOTÃO DARK MODE */}
        <button onClick={toggleTheme}>
          {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
        </button>
      </nav>

    </header>
  );
}

export default Header;