/* eslint-disable @typescript-eslint/no-explicit-any */
import * as sg from "../../styles";

import { TabGroup } from "@headlessui/react";
import { useFetchOrders } from "../../../../hooks/delivery/useFetchOrders";
import { Header } from "../../components/header";
import { TabHeader } from "./components/tabs/header";
import { TabBody } from "./components/tabs/body";

export const Reception = () => {
	const {
		data: dataOrders,
		loading: isLoading,
		error,
		fetchOrder,
	} = useFetchOrders();

	return (
		<>
			<sg.ContainerLeft>
				<Header
					title="Pedidos"
					subtitle="Crea y configura las hamburguesas de la marca"
				/>
				<sg.Body>
					{isLoading ? (
						<div>Cargando pedidos...</div>
					) : error ? (
						<div>Error al cargar los pedidos: {error}</div>
					) : (
						<TabGroup>
							<TabHeader />
							<TabBody data={dataOrders} refresh={fetchOrder} />
						</TabGroup>
					)}
				</sg.Body>
			</sg.ContainerLeft>
		</>
	);
};
