import { Routes, Route } from "react-router-dom";

// importação das páginas
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Categorias from "./pages/Categorias";
import Carrinho from "./pages/Carrinho";

// import do header (menu)
import Header from "./components/Header";

function App() {
  return (
    <>
      {/* Header aparece em todas as páginas */}
      <Header />

      {/* sistema de rotas da aplicação */}
      <Routes>

        {/* página inicial */}
        <Route path="/" element={<Home />} />

        {/* página de detalhe de produto (usa id dinâmico) */}
        <Route path="/produto/:id" element={<ProductDetail />} />

        {/* páginas adicionais */}
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/carrinho" element={<Carrinho />} />

      </Routes>
    </>
  );
}

export default App;