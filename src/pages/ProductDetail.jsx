import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  // pega o id da URL
  const { id } = useParams();

  // estado do produto
  const [produto, setProduto] = useState(null);

  // loading
  const [loading, setLoading] = useState(true);

  // busca o produto pelo id
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduto(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div className="produto-detalhe">

      {/* imagem do produto */}
      <img src={produto.image} alt={produto.title} />

      <div>
        <h1>{produto.title}</h1>

        {/* descrição */}
        <p>{produto.description}</p>

        {/* preço */}
        <h2>R$ {produto.price.toFixed(2)}</h2>
      </div>

    </div>
  );
}

export default ProductDetail;