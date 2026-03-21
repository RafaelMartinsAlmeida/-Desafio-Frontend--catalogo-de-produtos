import { Link } from "react-router-dom";

function ProductCard({ produto }) {
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

    </div>
  );
}

export default ProductCard;