import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrinho() {

  const {
    cart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
    getTotal
  } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meu Carrinho</h1>

      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">

              {/* imagem do produto */}
              <img
                src={item.image || item.thumbnail}
                alt={item.title}
              />

              <div>
                <h3>{item.title}</h3>

                {/* controle de quantidade */}
                <div className="qtd">
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.quantidade}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>

                <p>Preço: R$ {item.price.toFixed(2)}</p>

                {/* cálculo do subtotal por item */}
                <p>
                  Subtotal: R$ {(item.price * item.quantidade).toFixed(2)}
                </p>

                <button onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>

            </div>
          ))}

          {/* total geral */}
          <h2>Total: R$ {getTotal().toFixed(2)}</h2>

          <button onClick={clearCart}>
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  );
}

export default Carrinho;