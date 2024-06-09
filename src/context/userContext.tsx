import React, { createContext, useContext, useEffect, useState } from "react";
import { IItem } from "../types/burger.type";

// Interfaces de Tipos
export interface User {
	id: number;
	user_name: string;
	user_password: string;
	email: string;
}

export interface CartItem extends IItem {
	quantity: number;
}

export interface Order {
	id?: number;
	user_id: number;
	store_id: number;
	items: CartItem[];
	status: "pending" | "in_process" | "delivered";
	order_date?: string; // opcional para el manejo de la fecha de pedido
}

// Tipos del Contexto
interface UserCartContextType {
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	cart: CartItem[];
	addToCart: (item: IItem) => void;
	removeFromCart: (item: IItem) => void;
	updateItemQuantity: (item: IItem, quantity: number) => void;
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
	updateItemQuantity: () => null,
	clearCart: () => null,
	submitOrder: async () => {},
});

export const useUserCartContext = () => useContext(UserCartContext);

// Proveedor del Contexto
export const UserCartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
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

	const addToCart = (item: IItem) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
	};

	const removeFromCart = (item: IItem) => {
		setCart((prevCart) =>
			prevCart.filter((cartItem) => cartItem.id !== item.id)
		);
	};

	const updateItemQuantity = (item: IItem, quantity: number) => {
		setCart((prevCart) => {
			if (quantity <= 0) {
				return prevCart.filter((cartItem) => cartItem.id !== item.id);
			} else {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
				);
			}
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	const submitOrder = async (store_id: number) => {
		if (!user) {
			alert("Usuario no autenticado");
			return;
		}

		const order: Order = {
			user_id: user.id,
			store_id,
			items: cart,
			status: "pending",
		};

		const response = await fetch("/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(order),
		});

		if (response.ok) {
			alert("Pedido realizado con éxito");
			clearCart();
		} else {
			alert("Error al realizar el pedido");
		}
	};

	return (
		<UserCartContext.Provider
			value={{
				user,
				setUser,
				cart,
				addToCart,
				removeFromCart,
				updateItemQuantity,
				clearCart,
				submitOrder,
			}}
		>
			{children}
		</UserCartContext.Provider>
	);
};
