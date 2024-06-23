/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as s from "../../styles";

import { Text } from "../../../../components/atomic/text";
import { useFetchOrders } from "../../../../hooks/orders/useFetchOrders";
import { Header } from "../../components/header";
import { CardOrder } from "./components/card-store";

export const HistoryDashboard: React.FC = () => {
	const { data: orderData } = useFetchOrders();

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Historial"
					subtitle="Visualiza el historial de los pedidos realizados"
				/>
				<s.Body>
					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							backgroundColor: "#edf3fc",
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
							marginBottom: "4px",
							gap: "16px",
							padding: "8px 16px",
						}}
					>
						<Text weight="medium" text={"Fecha"} type="text" />
						<Text weight="medium" text={"Estatus"} type="text" />
						<Text weight="medium" text={"Cliente"} type="text" />
						<Text weight="medium" text={"Local"} type="text" />
						<Text weight="medium" text={"Pedido"} type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
						}}
					>
						{orderData?.map((order) => (
							<CardOrder key={order.order_id} data={order} />
						))}
					</div>
				</s.Body>
			</s.ContainerLeft>
		</>
	);
};
