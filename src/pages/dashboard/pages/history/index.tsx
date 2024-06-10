/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as s from "../../styles";

import { Text } from "../../../../components/atomic/text";
import { useFetchOrders } from "../../../../hooks/orders/useFetchOrders";
import { Header } from "../../components/header";
import { CardOrder } from "./components/card-store";

export const HistoryDashboard: React.FC = () => {
	// const createStore = useBoolean();

	const { data: orderData } = useFetchOrders();

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Historial"
					subtitle="Visualiza el historial de los pedidos realizados"
				/>
				<s.Body>
					<input
						type="text"
						placeholder="O  Buscar por nombre de hamburguesa"
						style={{
							width: "50%",
							marginBottom: "24px",
							border: "1px solid #bfbfbf",
							minHeight: "40px",
							padding: "4px 8px",
							fontSize: "14px",
							borderRadius: "8px",
						}}
					/>

					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							backgroundColor: "#edf3fc",
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 100px",
							marginBottom: "4px",
							padding: "8px 16px",
						}}
					>
						<Text weight="medium" text={"Nombre"} type="text" />
						<Text weight="medium" text={"Apertura"} type="text" />
						<Text weight="medium" text={"Cierre"} type="text" />
						<Text weight="medium" text={"Dirección"} type="text" />
						<Text weight="medium" text={"Número"} type="text" />
						<Text weight="medium" text={"Imagen"} type="text" />
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
