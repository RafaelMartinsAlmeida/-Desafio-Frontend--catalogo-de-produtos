// Contexto global do carrinho (compartilhado entre toda a aplicação)
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  // Carrega o carrinho salvo no navegador ao iniciar a aplicação
  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("cart");

    if (carrinhoSalvo) {
      try {
        setCart(JSON.parse(carrinhoSalvo));
      } catch {
        setCart([]);
      }
    }
  }, []);

  // Salva o carrinho sempre que houver alteração (persistência)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona produto ao carrinho (incrementa se já existir)
  const addToCart = (product) => {
    const existe = cart.find(item => item.id === product.id);

    if (existe) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantidade: 1 }]);
    }
  };

  // Controle de quantidade
  const increase = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantidade: item.quantidade + 1 }
        : item
    ));
  };

  const decrease = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? {
            ...item,
            quantidade: item.quantidade > 1
              ? item.quantidade - 1
              : 1
          }
        : item
    ));
  };

  // Remove produto completamente do carrinho
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Limpa todo o carrinho
  const clearCart = () => {
    setCart([]);
  };

  // Calcula o valor total da compra
  const getTotal = () => {
    return cart.reduce((total, item) => {
      return total + item.price * item.quantidade;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        removeFromCart,
        clearCart,
        getTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};