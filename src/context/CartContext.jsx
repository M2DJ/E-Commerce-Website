import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, quantity: 1 }]);
  };

  const deleteFromCart = (productId) => {
    setCart((prev) => prev.filter((pro) => pro.id !== productId));
  };

  const isInCart = (productId) => {
    return cart.some((pro) => pro.id === productId);
  };

  const increaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const handleDarkMode = () => {
    setIsDark(!isDark);
  }

  const functions = {
    cart,
    addToCart,
    deleteFromCart,
    isInCart,
    increaseQuantity,
    decreaseQuantity,
    isDark,
    handleDarkMode
  };
  return (
    <CartContext.Provider value={functions}>{children}</CartContext.Provider>
  );
};
