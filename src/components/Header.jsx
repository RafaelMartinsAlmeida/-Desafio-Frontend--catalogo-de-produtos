import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      {/* nome/logo do site */}
      <h2>🛍️ FakeStore</h2>

      {/* navegação entre páginas */}
      <nav>
        {/* Link evita recarregar a página */}
        <Link to="/">Produtos</Link>
        <Link to="/categorias">Categorias</Link>
        <Link to="/carrinho">Carrinho</Link>
      </nav>
    </header>
  );
}

export default Header;