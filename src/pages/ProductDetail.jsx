import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {

  const { id } = useParams();

  const [produto, setProduto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  // busca produto pelo id
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduto(data);
        setLoading(false);
      })
      .catch(() => {
        setErro("Erro ao carregar produto");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Carregando produto...</p>;
  if (erro) return <p>{erro}</p>;
  if (!produto) return <p>Produto não encontrado</p>;

  return (
    <div className="produto-detalhe">

      <img src={produto.image} alt={produto.title} />

      <div>
        <h1>{produto.title}</h1>
        <p>{produto.description}</p>
        <h2>R$ {produto.price.toFixed(2)}</h2>
      </div>

    </div>
  );
}

export default ProductDetail;