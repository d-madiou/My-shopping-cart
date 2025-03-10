import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };
  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        )
    );
};

const decrementQuantity = (productId) => {
    setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    );
};

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalItems, removeFromCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);