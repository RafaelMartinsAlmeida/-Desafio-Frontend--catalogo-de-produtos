// Componente responsável por mostrar um produto individual

function ProductCard({ produto }) {
    return (
      <div className="card">
  
        {/* imagem do produto */}
        <img src={produto.image} alt={produto.title} />
  
        {/* título do produto */}
        <h3>{produto.title}</h3>
  
        {/* preço formatado em Real */}
        <p className="price">
          {produto.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </p>
  
      </div>
    );
  }
  
  export default ProductCard;