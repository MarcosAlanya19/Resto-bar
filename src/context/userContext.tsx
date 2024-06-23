import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { IItem } from "../types/burger.type";
import { IOrderStatus } from "../types/order.type";
import { IUser } from "../types/user.type";

// Interfaces de Tipos
export interface CartItem extends IItem {
	quantity: number;
}

export interface Order {
	id?: number;
	user_id: number;
	store_id: number;
	items: CartItem[];
	status: IOrderStatus;
	order_date?: string;
}

// Tipos del Contexto
interface UserCartContextType {
	user: IUser | null;
	setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
	cart: CartItem[];
	addToCart: (item: IItem) => void;
	removeFromCart: (item: IItem) => void;
	updateItemQuantity: (item: IItem, quantity: number) => void;
	clearCart: () => void;
	submitOrder: () => Promise<void>;
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
	const [user, setUser] = useState<IUser | null>(() => {
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

	const orderItems = cart.map((item) => ({
		item_id: item.id,
		quantity: item.quantity,
		price: item.price,
		item_name: item.item_name,
	}));

	const sendWhatsAppMessage = async (order: {
		user_id: string;
		user_name: string;
		items: typeof orderItems;
		status: IOrderStatus;
	}) => {
		let message = `TostiDetalle:\n`;

		order.items.forEach((item) => {
			const product = item.item_name;
			const quantity = item.quantity;
			const price = parseFloat(item.price) * quantity;
			message += `- ${product} x ${quantity} = S/. ${price}\n`;
		});

		const totalPrice = order.items.reduce((total, item) => {
			const price = parseFloat(item.price) * item.quantity;
			return total + price;
		}, 0);

		message += `\nTotal: S/. ${totalPrice}`;

		const confirmed = window.confirm(
			`¿Deseas enviar el siguiente pedido por WhatsApp?\n\n${message}`
		);
		if (confirmed) {
			const phoneNumber = "+51934737663";
			const formattedMessage = encodeURIComponent(message);
			const whatsappUrl = `https://wa.me/${phoneNumber}?text=${formattedMessage}`;

			try {
				const newWindow = window.open(whatsappUrl, "_blank");
				if (
					!newWindow ||
					newWindow.closed ||
					typeof newWindow.closed === "undefined"
				) {
					throw new Error(
						"No se pudo abrir la ventana emergente. Por favor, permite las ventanas emergentes para este sitio."
					);
				}
			} catch (error) {
				console.error(
					"Error al intentar abrir WhatsApp en una nueva ventana:",
					error
				);
			}
		} else {
			console.log("El usuario canceló el envío del pedido por WhatsApp.");
		}
	};

	const submitOrder = async () => {
		if (!user) {
			alert("Requiere de inicio de sesión");
			return;
		}

		const order: {
			user_name: string;
			user_id: string;
			items: typeof orderItems;
			status: IOrderStatus;
		} = {
			user_name: user.user_name,
			user_id: user.id,
			items: orderItems,
			status: IOrderStatus.pending,
		};

		try {
			const response = await axios.post(
				"http://localhost:3000/api/orders",
				order
			);

			if (response.status === 201) {
				await sendWhatsAppMessage(order);
				clearCart();
			} else {
				alert("Error al realizar el pedido");
			}
		} catch (error) {
			console.error("Error al realizar el pedido:", error);
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
