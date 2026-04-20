import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import PageWrapper from "../components/PageWrapper";

function Home() {

  const [produtos, setProdutos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  // busca produtos
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(() => {
        setErro("Erro ao carregar produtos");
        setLoading(false);
      });
  }, []);

  // busca categorias
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => setCategorias(data));
  }, []);

  // filtro combinado
  const produtosFiltrados = produtos.filter(produto => {
    const matchCategoria =
      categoriaSelecionada === "all" ||
      produto.category === categoriaSelecionada;

    const matchBusca = produto.title
      .toLowerCase()
      .includes(busca.toLowerCase());

    return matchCategoria && matchBusca;
  });

  // 🔥 SKELETON LOADING
  if (loading) {
    return (
      <PageWrapper>
        <div className="produtos-grid">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="card skeleton skeleton-card"></div>
          ))}
        </div>
      </PageWrapper>
    );
  }

  if (erro) return <p>{erro}</p>;

  return (
    <PageWrapper>
      <h1>Catalogo de Produtos</h1>

      {/* busca */}
      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />

      {/* categorias */}
      <div className="filtro">
        <button
          onClick={() => setCategoriaSelecionada("all")}
          className={categoriaSelecionada === "all" ? "ativo" : ""}
        >
          Todos
        </button>

        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            className={categoriaSelecionada === cat ? "ativo" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* produtos */}
      <div className="produtos-grid">
        {produtosFiltrados.map(produto => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </PageWrapper>
  );
}

export default Home;