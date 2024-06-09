/* eslint-disable @typescript-eslint/no-explicit-any */
import * as sg from "../../styles";
import * as s from "./styles";

import { useFetchOrders } from "../../../../hooks/delivery/useFetchOrders";
import { Header } from "../../components/header";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import { Text } from "../../../../components/atomic/text";

export const HomeDashboard = () => {
	const { data: dataOrders, loading: isLoading, error } = useFetchOrders();

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
							<TabList
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(3, 1fr)",
									gap: "8px",
									background: "#edf3fc",
									padding: "8px",
									borderRadius: "8px",
								}}
							>
								<Tab as={React.Fragment}>
									{({ selected }) => (
										<s.BtnTab selected={selected}>
											<Text
												text="Pendientes"
												weight={selected ? "semiBold" : "medium"}
												type="textDefault"
											/>
										</s.BtnTab>
									)}
								</Tab>

								<Tab as={React.Fragment}>
									{({ selected }) => (
										<s.BtnTab selected={selected}>
											<Text
												text="En proceso"
												weight={selected ? "semiBold" : "medium"}
												type="textDefault"
											/>
										</s.BtnTab>
									)}
								</Tab>

								<Tab as={React.Fragment}>
									{({ selected }) => (
										<s.BtnTab selected={selected}>
											<Text
												text="Entregados"
												weight={selected ? "semiBold" : "medium"}
												type="textDefault"
											/>
										</s.BtnTab>
									)}
								</Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									{dataOrders
										.filter((order) => order.status === "pending")
										.map((order) => (
											<div key={order.order_id}>
												<h3>{order.user_name}</h3>
												<p>{order.order_date}</p>
												<ul>
													{order.items.map((item) => (
														<li key={item.id}>
															{item.item_name} - {item.quantity}
														</li>
													))}
												</ul>
											</div>
										))}
								</TabPanel>

								<TabPanel>
									{dataOrders
										.filter((order) => order.status === "in_process")
										.map((order) => (
											<div key={order.order_id}>
												<h3>{order.user_name}</h3>
												<p>{order.order_date}</p>
												<ul>
													{order.items.map((item) => (
														<li key={item.id}>
															{item.item_name} - {item.quantity}
														</li>
													))}
												</ul>
											</div>
										))}
								</TabPanel>

								<TabPanel>
									{dataOrders
										.filter((order) => order.status === "delivered")
										.map((order) => (
											<div key={order.order_id}>
												<h3>{order.user_name}</h3>
												<p>{order.order_date}</p>
												<ul>
													{order.items.map((item) => (
														<li key={item.id}>
															{item.item_name} - {item.quantity}
														</li>
													))}
												</ul>
											</div>
										))}
								</TabPanel>
							</TabPanels>
						</TabGroup>
					)}
				</sg.Body>
			</sg.ContainerLeft>
		</>
	);
};
