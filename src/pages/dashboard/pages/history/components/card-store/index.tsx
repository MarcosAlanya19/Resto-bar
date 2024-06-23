import React from "react";

import dayjs from "dayjs";
import { Text } from "../../../../../../components/atomic/text";
import { IOrder, IOrderStatus } from "../../../../../../types/order.type";

interface IProps {
	data: IOrder;
}

export const CardOrder: React.FC<IProps> = (props) => {
	const { data } = props;

	const handleWhatsAppRedirect = () => {
		const phoneNumber = data?.user?.phone_number.replace(/\D/g, "");
		const whatsappLink = `https://wa.me/+51${phoneNumber}`;
		window.location.href = whatsappLink;
	};

	const orderStatusTranslations = {
		[IOrderStatus.pending]: "Pendiente",
		[IOrderStatus.process]: "En proceso",
		[IOrderStatus.delivered]: "Entregado",
		[IOrderStatus.canceled]: "Cancelado",
		[IOrderStatus.rejected]: "Rechazado",
	};

	return (
		<>
			<div
				style={{
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					backgroundColor: "#fff",
					display: "grid",
					alignItems: "center",
					gap: "16px",
					gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
					padding: "8px 16px",
				}}
			>
				<Text
					text={dayjs(data.order_date).format("DD/MM/YYYY HH:mm")}
					type="text"
				/>
				<Text text={orderStatusTranslations[data.status]} type="text" />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Text text={data.user.user_name} type="text" />
					<Text text={data.user.address} type="text" />
					<Text
						onClick={handleWhatsAppRedirect}
						text={data.user.phone_number}
						type="text"
					/>
				</div>
				<Text text={data.store.store_name ?? "Sin local"} type="text" />
				<div>
					{data.items.map((item) => (
						<Text text={`${item.item_name}`} type="text" />
					))}
				</div>
			</div>
		</>
	);
};
