import { FC } from "react";
import * as s from "./styles";

import { Popover, Transition } from "@headlessui/react";
import { FaCartShopping } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { useUserCartContext } from "../../context/userContext";
import { IItem } from "../../types/burger.type";
import { Text } from "../atomic/text";

export const Navbar: FC = () => {
	const {
		setUser,
		user,
		cart,
		removeFromCart,
		clearCart,
		submitOrder,
		updateItemQuantity,
	} = useUserCartContext();

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
						{cart.length > 0 && (
							<div
								style={{
									minWidth: "20px",
									minHeight: "20px",
									backgroundColor: "#ECA400",
									borderRadius: "50%",
									position: "absolute",
									bottom: "-10px",
									right: "-5px",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<Text
									text={cart.length.toString()}
									weight="semiBold"
									type="text"
									style={{ color: "#000" }}
								/>
							</div>
						)}
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
								{cart.length === 0 ? (
									<Text text={`El carrito está vacío.`} />
								) : (
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
													display: "grid",
													gridTemplateColumns: "7fr 1fr",
													padding: "8px",
													alignItems: "center",
												}}
												key={index}
											>
												<div>
													<Text
														text={`${item.item_name} - S/ ${item.price}`}
														style={{ color: "#ECA400	" }}
													/>
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
													style={{ cursor: "pointer" }}
												/>
											</div>
										))}
									</div>
								)}
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
												cursor: "pointer",
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
												cursor: "pointer",
											}}
											onClick={() => submitOrder(4)}
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

				{user ? (
					<div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
						<div
							style={{
								display: "flex",
								background: "#bfbfbf20",
								padding: "4px 10px",
								borderRadius: "16px",
							}}
						>
							<Text text={user.user_name} type="textDefault" />
						</div>
						<RiLogoutCircleLine
							onClick={() => {
								setUser(null);
								toast.success("Cerrado de sesión exitoso");
							}}
							style={{ transform: "rotate(180deg)", cursor: "pointer" }}
							size={24}
						/>
					</div>
				) : (
					<Text text="Iniciar sesión" type="textDefault" />
				)}
			</div>
		</div>
	);
};
