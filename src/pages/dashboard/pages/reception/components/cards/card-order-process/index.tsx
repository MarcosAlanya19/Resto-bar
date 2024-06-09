import React from "react";

import { Text } from "../../../../../../../components/atomic/text";
import { apiConfig } from "../../../../../../../config/axios";
import { IOrder, IOrderStatus } from "../../../../../../../types/order.type";

interface IProps {
	data: IOrder;
	refresh: () => void;
}

export const CardOrderProcess: React.FC<IProps> = (props) => {
	const [order, setOrder] = React.useState(props.data);

	React.useEffect(() => {
		setOrder(props.data);
	}, [props.data]);

	const updateOrderStatus = async (orderId: number) => {
		try {
			await apiConfig.patch(`/orders/${orderId}`, {
				newStatus: IOrderStatus.delivered,
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
				display: "grid",
				gridAutoRows: "1fr auto",
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
			<div>
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
			</div>
			<div style={{ display: "grid", width: "100%" }}>
				<button
					onClick={() => updateOrderStatus(order.order_id)}
					style={{
						backgroundColor: "#007BFF",
						color: "white",
						border: "none",
						padding: "8px 16px",
						borderRadius: "4px",
						cursor: "pointer",
						marginRight: "8px",
					}}
				>
					Marcar como Entregado
				</button>
			</div>
		</div>
	);
};
