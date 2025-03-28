import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children}: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (item:any) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
