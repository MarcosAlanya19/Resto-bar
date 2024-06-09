import React from "react";

import { useForm, useWatch } from "react-hook-form";
import { Text } from "../../../../../../components/atomic/text";
import { apiConfig } from "../../../../../../config/axios";
import { useFetchStores } from "../../../../../../hooks/store/useFetchStore";
import { IOrder, IOrderStatus } from "../../../../../../types/order.type";

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
				text={`Cliente: ${order.user_name}`}
				type="textDefault"
				style={{ fontWeight: "bold", marginBottom: "8px" }}
			/>
			<Text
				text={`Fecha: ${new Date(order.order_date).toLocaleString()}`}
				type="textDefault"
				style={{ marginBottom: "8px", color: "#757575" }}
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
				<button
					onClick={() => updateOrderStatus(order.order_id)}
					disabled={selectedStoreWatch === ""}
					style={{
						backgroundColor: selectedStoreWatch === "" ? "#bfbfbf" : "#007BFF",
						color: "white",
						border: "none",
						padding: "8px 16px",
						borderRadius: "4px",
						cursor: selectedStoreWatch === "" ? "not-allowed" : "pointer",
					}}
				>
					Marcar como En Proceso
				</button>
			</div>
		</div>
	);
};
