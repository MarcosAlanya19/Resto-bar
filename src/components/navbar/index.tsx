import { FC } from "react";
import * as s from "./styles";

import { Popover, Transition } from "@headlessui/react";
import { Text } from "../atomic/text";
import { FaCartShopping } from "react-icons/fa6";
import { useUserCartContext } from "../../context/userContext";
import { IItem } from "../../types/burger.type";
import { MdCancel } from "react-icons/md";

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
							<div
								style={{
									background: "#0e0e0e",
									borderRadius: "8px",
									color: "#fff",
									padding: "16px",
								}}
							>
								<Text text="Carrito de Compras" type="title" />
								{cart.length === 0 && <p>El carrito está vacío.</p>}
								<div
									style={{
										display: "grid",
										gap: "8px",
										padding: "8px 0 16px 0",
									}}
								>
									{cart.map((item, index) => (
										<div
											style={{
												backgroundColor: "#bfbfbf20",
												borderRadius: "8px",
												// color: "#000",
												display: "grid",
												gridTemplateColumns: "7fr 1fr",
												padding: "8px",
												alignItems: "center",
											}}
											key={index}
										>
											<div>
												<Text text={`${item.item_name} - S/ ${item.price}`} style={{color: "#ECA400"}} />
												<div style={{ display: "flex", gap: "8px" }}>
													<Text text="Cantidad:" />
													<div>
														<s.QuantityInput
															type="number"
															value={item.quantity}
															onChange={(e) =>
																handleQuantityChange(item, e.target.value)
															}
															min="1"
														/>
													</div>
												</div>
											</div>
											<MdCancel
												onClick={() => removeFromCart(item)}
												size={30}
												color="#F14A41"
											/>
										</div>
									))}
								</div>
								{cart.length > 0 && (
									<div
										style={{
											display: "grid",
											gridTemplateColumns: "1fr 1fr",
											gap: "8px",
										}}
									>
										<button
											style={{
												justifyContent: "center",
												alignItems: "center",
												display: "flex",
												backgroundColor: "#F14A41",
												color: "#fff",
												padding: "8px",
												border: "none",
												borderRadius: "8px",
											}}
											onClick={clearCart}
										>
											<Text
												text="Vaciar Carrito"
												type="text"
												weight="medium"
												style={{ textTransform: "uppercase" }}
											/>
										</button>
										<button
											style={{
												justifyContent: "center",
												alignItems: "center",
												display: "flex",
												backgroundColor: "#3FB43D",
												color: "#fff",
												padding: "8px",
												border: "none",
												borderRadius: "8px",
											}}
											onClick={() => submitOrder(1)}
										>
											<Text
												text="Realizar Pedido"
												type="text"
												weight="medium"
												style={{ textTransform: "uppercase" }}
											/>
										</button>
									</div>
								)}
							</div>
						</s.StyledPopoverPanel>
					</Transition>
				</Popover>

				<s.StyledNavLink to={"/"}>
					<Text text="Inicio" type="textDefault" />
				</s.StyledNavLink>

				<s.StyledNavLink to={"menu"}>
					<Text text="Menú" type="textDefault" />
				</s.StyledNavLink>

				<Text text="Blog" type="textDefault" />
			</div>
		</div>
	);
};
