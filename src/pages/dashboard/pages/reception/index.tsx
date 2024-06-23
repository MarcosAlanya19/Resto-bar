/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as sg from "../../styles";

import { TabGroup } from "@headlessui/react";
import dayjs from "dayjs";
import { useFetchOrders } from "../../../../hooks/orders/useFetchOrders";
import { IOrder } from "../../../../types/order.type";
import { Header } from "../../components/header";
import { TabBody } from "./components/tabs/body";
import { TabHeader } from "./components/tabs/header";
import { Text } from "../../../../components/atomic/text";

export const Reception = () => {
	const { data: dataOrders, loading: isLoading, fetchOrder } = useFetchOrders();

	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		new Date()
	);
	const [filteredOrders, setFilteredOrders] = React.useState<IOrder[]>([]);

	React.useEffect(() => {
		if (selectedDate) {
			const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
			const filtered = dataOrders.filter((order) =>
				order.order_date.startsWith(formattedDate)
			);
			setFilteredOrders(filtered);
		} else {
			setFilteredOrders(dataOrders);
		}
	}, [selectedDate, dataOrders]);

	return (
		<>
			<sg.ContainerLeft>
				<Header
					title="Pedidos"
					subtitle="Maneja los pedidos en tres secciones"
				/>
				<sg.Body>
					<div
						style={{
							display: "flex",
							justifyContent: "start",
							paddingBottom: "16px",
						}}
					>
						<div style={{ display: "grid" }}>
							<Text text="Filtro por fechas" weight="medium" />
							<sg.StyleDate
								selected={selectedDate}
								onChange={(date) => setSelectedDate(date)}
								dateFormat="yyyy-MM-dd"
							/>
						</div>
					</div>
					{isLoading ? (
						<div>Cargando pedidos...</div>
					) : (
						<TabGroup>
							<TabHeader />
							<TabBody data={filteredOrders} refresh={fetchOrder} />
						</TabGroup>
					)}
				</sg.Body>
			</sg.ContainerLeft>
		</>
	);
};
