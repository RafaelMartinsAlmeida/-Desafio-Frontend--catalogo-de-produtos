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

  // estado de erro (NOVO)
  const [erro, setErro] = useState(null);

  // esse useEffect roda uma vez quando a página carrega
  // aqui eu busco todos os produtos da API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        // verifica se deu erro na requisição
        if (!res.ok) {
          throw new Error("Erro ao buscar produtos");
        }
        return res.json();
      })
      .then(data => {
        setProdutos(data);
        setLoading(false);
      })
      .catch(err => {
        console.log("Erro ao buscar produtos:", err);
        setErro("Erro ao carregar produtos"); // NOVO
        setLoading(false);
      });
  }, []);

  // esse useEffect busca as categorias da API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then(res => res.json())
      .then(data => {
        setCategorias(data);
      })
      .catch(err => {
        console.log("Erro ao buscar categorias:", err);
      });
  }, []);

  // aqui faço o filtro dos produtos baseado na categoria selecionada
  const produtosFiltrados =
    categoriaSelecionada === "all"
      ? produtos
      : produtos.filter(p => p.category === categoriaSelecionada);

  // enquanto carrega
  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  // se deu erro
  if (erro) {
    return <p>{erro}</p>;
  }

  return (
    <div>
      <h1>Catálogo de Produtos</h1>

      {/* filtro de categorias */}
      <div className="filtro">

        {/* botão para mostrar todos */}
        <button
          onClick={() => setCategoriaSelecionada("all")}
          className={categoriaSelecionada === "all" ? "ativo" : ""}
        >
          Todos
        </button>

        {/* renderiza um botão para cada categoria */}
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