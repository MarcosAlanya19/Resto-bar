import React from "react";

import dayjs from "dayjs";
import { Text } from "../../../../../../../components/atomic/text";
import { IOrder } from "../../../../../../../types/order.type";

interface IProps {
	data: IOrder;
	refresh: () => void;
}

export const CardOrderDelivered: React.FC<IProps> = (props) => {
	const [order, setOrder] = React.useState(props.data);

	React.useEffect(() => {
		setOrder(props.data);
	}, [props.data]);

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
			<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
				<div style={{ display: "grid", gap: "4px" }}>
					<div>
						<Text
							text={`Local encargado:`}
							type="textDefault"
							weight="medium"
						/>
						<Text text={` ${order.store.store_name}`} type="textDefault" />
					</div>
					<div>
						<Text
							text={`Cliente: ${order.user.user_name}`}
							type="textDefault"
							weight="medium"
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
					</div>
				</div>

				<div>
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
			</div>
		</div>
	);
};
