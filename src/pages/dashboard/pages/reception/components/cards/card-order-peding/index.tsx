import React from "react";
import * as s from "./styles";

import { useForm, useWatch } from "react-hook-form";
import { Text } from "../../../../../../../components/atomic/text";
import { apiConfig } from "../../../../../../../config/axios";
import { useFetchStores } from "../../../../../../../hooks/store/useFetchStore";
import { IOrder, IOrderStatus } from "../../../../../../../types/order.type";
import dayjs from "dayjs";

interface IProps {
	data: IOrder;
	refresh: () => void;
}

export const CardOrderPeding: React.FC<IProps> = (props) => {
	const [order, setOrder] = React.useState(props.data);
	const { data: dataStore } = useFetchStores();

	React.useEffect(() => {
		setOrder(props.data);
	}, [props.data]);

	const { register, control } = useForm({
		defaultValues: {
			store: "",
		},
	});

	const selectedStoreWatch = useWatch({
		control,
		name: "store",
	});

	const updateOrderStatus = async (orderId: number) => {
		try {
			await apiConfig.patch(`/orders/${orderId}`, {
				newStatus: IOrderStatus.process,
				newStoreId: selectedStoreWatch,
			});

			props.refresh();
		} catch (error) {
			console.error("Error updating order status:", error);
		}
	};

	return (
		<div
			key={order.order_id}
			style={{
				border: "1px solid #e0e0e0",
				padding: "16px",
				borderRadius: "8px",
				boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
				transition: "transform 0.2s",
			}}
			onMouseEnter={(e) => {
				(e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
			}}
			onMouseLeave={(e) => {
				(e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
			}}
		>
			<Text
				text={`Cliente: ${order.user.user_name}`}
				type="textDefault"
				weight="semiBold"
			/>
			<div style={{ display: "flex", gap: "4px" }}>
				<Text text={`${order.user.phone_number}`} type="text" />
				<Text text={`-`} type="text" />
				<Text text={`${order.user.address}`} type="text" />
			</div>
			<Text
				text={`Hora pedido: ${dayjs(order.order_date).format("hh:mm A")}`}
				type="text"
				style={{ color: "#757575" }}
			/>
			<ul style={{ listStyleType: "none", paddingLeft: 0 }}>
				{order.items.map((item) => (
					<li key={item.id} style={{ marginBottom: "4px" }}>
						<Text
							text={`${item.item_name} - Cantidad: ${item.quantity}`}
							type="textDefault"
							style={{ color: "#424242" }}
						/>
					</li>
				))}
			</ul>

			<div style={{ display: "grid", width: "100%", gap: "8px" }}>
				<select
					{...register("store")}
					style={{
						borderRadius: "8px",
						padding: "8px",
						boxSizing: "border-box",
						border: "1px solid #ccc",
						fontSize: "14px",
					}}
				>
					<option value="" disabled hidden>
						Designar tienda
					</option>
					{dataStore.map((option, index) => (
						<option key={index} value={option.id}>
							{option.store_name}
						</option>
					))}
				</select>
				<s.BtnStatus
					selected={!selectedStoreWatch}
					onClick={() => updateOrderStatus(order.order_id)}
					disabled={selectedStoreWatch === ""}
				>
					Marcar como En Proceso
				</s.BtnStatus>
			</div>
		</div>
	);
};
