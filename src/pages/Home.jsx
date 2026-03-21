import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  // estado que guarda todos os produtos vindos da API
  const [produtos, setProdutos] = useState([]);

  // estado que guarda as categorias
  const [categorias, setCategorias] = useState([]);

  // controla qual categoria o usuário selecionou
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("all");

  // controle de carregamento (UX)
  const [loading, setLoading] = useState(true);

  // esse useEffect roda uma vez quando a página carrega
  // aqui eu busco todos os produtos da API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        setProdutos(data); // salva os produtos no estado
        setLoading(false); // finaliza o loading
      })
      .catch(err => {
        console.log("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  // esse useEffect busca as categorias da API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategorias(data); // salva as categorias
      })
      .catch(err => {
        console.log("Erro ao buscar categorias:", err);
      });
  }, []);

  // aqui faço o filtro dos produtos baseado na categoria selecionada
  const produtosFiltrados =
    categoriaSelecionada === "all"
      ? produtos // se for "all", mostra tudo
      : produtos.filter(p => p.category === categoriaSelecionada);

  // enquanto carrega
  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {/* filtro de categorias */}
      <div className="filtro">

        {/* botão para mostrar todos */}
        <button onClick={() => setCategoriaSelecionada("all")}>
          Todos
        </button>

        {/* renderiza um botão para cada categoria */}
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
          >
            {cat}
          </button>
        ))}

      </div>

      {/* grid de produtos */}
      <div className="produtos-grid">
        {produtosFiltrados.map(produto => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Home;