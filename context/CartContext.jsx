import { createContext, useContext, useState } from "react";


const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [amount, setAmount] = useState(0);

    const addToCart = (product) => {
        setCart(prev => [...prev, product]);
    }

    const deleteFromCart = (productId) => {
        setCart(prev => prev.filter(pro => pro.id !== productId));
    }

    const isInCart = (productId) => {
        return cart.some(pro => pro.id === productId);
    }

    const increaseAmount = () => {
        setAmount(prev => prev + 1);
    }

    const decreaseAmount = () => {
        setAmount(prev => prev - 1);
    }

    const functions = {
        cart,
        amount,
        addToCart,
        deleteFromCart,
        isInCart,
        increaseAmount,
        decreaseAmount
    }
    return <CartContext.Provider value={functions}>
        {children}
    </CartContext.Provider>
}