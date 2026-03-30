import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Carrinho() {

  // pega tudo do contexto
  const { cart, removeFromCart, clearCart, getTotal } = useContext(CartContext);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Meu Carrinho</h1>

      {/* se estiver vazio */}
      {cart.length === 0 ? (
        <p>Carrinho vazio</p>
      ) : (
        <>
          {/* lista de produtos */}
          {cart.map(item => (
            <div key={item.id} style={{ marginBottom: "15px" }}>

              <h3>{item.title}</h3>

              <p>Quantidade: {item.quantidade}</p>

              <p>Preço: R$ {item.price.toFixed(2)}</p>

              <p>
                Subtotal: R$ {(item.price * item.quantidade).toFixed(2)}
              </p>

              {/* botão remover */}
              <button onClick={() => removeFromCart(item.id)}>
                Remover
              </button>

            </div>
          ))}

          {/* total */}
          <h2>Total: R$ {getTotal().toFixed(2)}</h2>

          {/* limpar carrinho */}
          <button onClick={clearCart}>
            Limpar Carrinho
          </button>
        </>
      )}
    </div>
  );
}

export default Carrinho;