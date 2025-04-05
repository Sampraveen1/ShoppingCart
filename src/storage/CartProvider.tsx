import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children}: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([]); // shoppingcart
    const [favorites, setFavorites] = useState<any[]>([]);   //favourite
    

    const addToCart = (item:any) => {     // shoppingcart
        setCart((prevCart) => [...prevCart, item]);
    };

    const toggleFavorite = (item: any) => {   //favourite
        setFavorites((prevFavorites) => [...prevFavorites,item]);
        
    };


    return (
        <CartContext.Provider value={{ cart, addToCart, favorites,toggleFavorite }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
