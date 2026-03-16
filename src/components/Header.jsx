// Header do site (logo + menu simples)

function Header() {
    return (
      <header className="header">
  
        {/* Logo do projeto */}
        <h2 className="logo">🛍️ FakeStore</h2>
  
        {/* Menu simples */}
        <nav>
          <a href="#">Produtos</a>
          <a href="#">Categorias</a>
          <a href="#">Carrinho</a>
        </nav>
  
      </header>
    );
  }
  
  export default Header;