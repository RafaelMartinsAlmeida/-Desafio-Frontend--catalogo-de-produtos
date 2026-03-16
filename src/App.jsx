// Importando hooks do React
import { useEffect, useState } from "react";

// Importando componentes criados
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";

function App() {

  // Estado que armazenará os produtos vindos da API
  const [produtos, setProdutos] = useState([]);

  // useEffect executa quando a página carrega
  // Aqui fazemos a requisição para a Fake Store API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {

        // salvando os produtos no estado
        setProdutos(data);

      });
  }, []);

  return (
    <div>

      {/* Header da aplicação */}
      <Header />

      <h1>Catálogo de Produtos</h1>

      {/* Grid que irá mostrar os produtos */}
      <div className="grid">

        {/* percorre todos os produtos retornados pela API */}
        {produtos.map(produto => (

          // criando um card para cada produto
          <ProductCard
            key={produto.id}
            produto={produto}
          />

        ))}

      </div>

    </div>
  );
}

export default App;