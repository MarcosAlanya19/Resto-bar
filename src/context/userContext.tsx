import React, { createContext, useContext, useState, useEffect } from "react";
export interface User {
    id: number;
    user_name: string;
    user_password: string;
    email: string;
}

export interface MenuItem {
    id: number;
    item_name: string;
    public_id: string;
    secure_url: string;
    description: string;
    price: number;
}

export interface CartItem extends MenuItem {
    quantity: number;
}

export interface Order {
    id?: number;
    user_id: number;
    store_id: number;
    items: CartItem[];
    status: 'pending' | 'in_process' | 'delivered';
    order_date?: string;
}

// Tipos del Contexto
interface UserCartContextType {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
    clearCart: () => void;
    submitOrder: (store_id: number) => Promise<void>;
}

// Creación del Contexto
const UserCartContext = createContext<UserCartContextType>({
    user: null,
    setUser: () => null,
    cart: [],
    addToCart: () => null,
    removeFromCart: () => null,
    clearCart: () => null,
    submitOrder: async () => {},
});

export const useUserCartContext = () => useContext(UserCartContext);

// Proveedor del Contexto
export const UserCartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const [cart, setCart] = useState<CartItem[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (item: CartItem) => {
        setCart(prevCart => [...prevCart, item]);
    };

    const removeFromCart = (item: CartItem) => {
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const submitOrder = async (store_id: number) => {
        if (!user) {
            alert('Usuario no autenticado');
            return;
        }

        const order: Order = {
            user_id: user.id,
            store_id,
            items: cart,
            status: 'pending',
        };

        const response = await fetch('/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        if (response.ok) {
            alert('Pedido realizado con éxito');
            clearCart();
        } else {
            alert('Error al realizar el pedido');
        }
    };

    return (
        <UserCartContext.Provider value={{ user, setUser, cart, addToCart, removeFromCart, clearCart, submitOrder }}>
            {children}
        </UserCartContext.Provider>
    );
};
