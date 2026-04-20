import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function ProductCard({ produto }) {

  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">

      {/* link para página de detalhe */}
      <Link to={`/produto/${produto.id}`}>
        <img
          src={produto.image}
          alt={produto.title}
        />

        <h3>{produto.title}</h3>
      </Link>

      <p>R$ {produto.price.toFixed(2)}</p>

      {/* adiciona produto ao carrinho */}
      <button onClick={() => addToCart(produto)}>
        Adicionar ao carrinho
      </button>

    </div>
  );
}

export default ProductCard;