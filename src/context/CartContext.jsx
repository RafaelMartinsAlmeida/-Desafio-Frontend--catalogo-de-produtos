// Importa funções do React
import { createContext, useState, useEffect } from "react";

// Cria o contexto (tipo um "global")
export const CartContext = createContext();

// Provider é o que vai envolver a aplicação
export const CartProvider = ({ children }) => {

  // carrega o carrinho salvo no navegador (se existir)
  const [cart, setCart] = useState(() => {
    const carrinhoSalvo = localStorage.getItem("cart");
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];
  });

  // sempre que o carrinho mudar, salva no localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Função para adicionar produto
  const addToCart = (product) => {

    // Verifica se o produto já existe no carrinho
    const produtoExiste = cart.find(item => item.id === product.id);

    if (produtoExiste) {
      // Se já existe → aumenta quantidade
      const novoCarrinho = cart.map(item =>
        item.id === product.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );

      setCart(novoCarrinho);
    } else {
      // Se não existe → adiciona com quantidade 1
      setCart([...cart, { ...product, quantidade: 1 }]);
    }
  };

  // Função para remover produto
  const removeFromCart = (id) => {
    const novoCarrinho = cart.filter(item => item.id !== id);
    setCart(novoCarrinho);
  };

  // Função para limpar carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Função para calcular total
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantidade;
    }, 0);
  };

  return (
    // Disponibiliza tudo globalmente
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};