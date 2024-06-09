import { FC } from "react";
import * as s from "./styles";

import { Popover, Transition } from "@headlessui/react";
import { Text } from "../atomic/text";
import { FaCartShopping } from "react-icons/fa6";
import { useUserCartContext } from "../../context/userContext";
import { IItem } from "../../types/burger.type";

export const Navbar: FC = () => {
	const { cart, removeFromCart, clearCart, submitOrder, updateItemQuantity } =
		useUserCartContext();

	const handleQuantityChange = (item: IItem, quantity: string) => {
		updateItemQuantity(item, parseInt(quantity, 10));
	};

	return (
		<div
			style={{
				height: "64px",
				backgroundColor: "#0e0e0e",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingInline: "40px",
				color: "#fff",
			}}
		>
			<div style={{ display: "grid", justifyItems: "center", lineHeight: "1" }}>
				<Text text="TOSTADO" type="textDefault" weight="bold" />
				<Text text="restobar." type="textDefault" />
			</div>

			<div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
				<s.StyledNavLink to={"/"}>
					<Text text="Inicio" type="textDefault" />
				</s.StyledNavLink>

				<s.StyledNavLink to={"menu"}>
					<Text text="Menú" type="textDefault" />
				</s.StyledNavLink>

				<Text text="Blog" type="textDefault" />

				<Popover>
					<s.StyledPopoverButton>
						<FaCartShopping size={20} />
					</s.StyledPopoverButton>
					<Transition
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 translate-y-1"
						enterTo="opacity-100 translate-y-0"
						leave="transition ease-in duration-150"
						leaveFrom="opacity-100 translate-y-0"
						leaveTo="opacity-0 translate-y-1"
					>
						<s.StyledPopoverPanel anchor="bottom">
							<h2>Carrito de Compras</h2>
							{cart.length === 0 && <p>El carrito está vacío.</p>}
							<ul>
								{cart.map((item, index) => (
									<li key={index}>
										{item.item_name} - ${item.price} x
										<input
											type="number"
											value={item.quantity}
											onChange={(e) =>
												handleQuantityChange(item, e.target.value)
											}
											min="1"
										/>
										<button onClick={() => removeFromCart(item)}>
											Eliminar
										</button>
									</li>
								))}
							</ul>
							{cart.length > 0 && (
								<div>
									<button onClick={clearCart}>Vaciar Carrito</button>
									<button onClick={() => submitOrder(1)}>
										Realizar Pedido
									</button>
								</div>
							)}
						</s.StyledPopoverPanel>
					</Transition>
				</Popover>
			</div>
		</div>
	);
};
