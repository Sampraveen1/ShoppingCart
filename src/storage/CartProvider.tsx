import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([]); // shoppingcart
    const [favorites, setFavorites] = useState<any[]>([]);   //favourite

const addToCart = (item: any) => {
  const itemWithId = { ...item, id: Date.now() }; // ensures uniqueness
  setCart((prevCart) => [...prevCart, itemWithId]);
};


    const toggleFavorite = (item: any) => {   //favourite
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFromCart = (id: any) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, favorites, toggleFavorite, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);