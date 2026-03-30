// Importa o contexto do carrinho
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ produto }) {

  // pega a função de adicionar ao carrinho
  const { addToCart } = useContext(CartContext);

 

  return (
    <div className="card">

      {/* ao clicar, vai para a página de detalhe */}
      <Link to={`/produto/${produto.id}`}>
        <img src={produto.image} alt={produto.title} />

        {/* título do produto */}
        <h3>{produto.title}</h3>
      </Link>

      {/* preço formatado */}
      <p>R$ {produto.price.toFixed(2)}</p>

      {/* BOTÃO NOVO */}
      <button onClick={() => addToCart(produto)}>
        Adicionar ao carrinho
      </button>

    </div>
  );
}

export default ProductCard;