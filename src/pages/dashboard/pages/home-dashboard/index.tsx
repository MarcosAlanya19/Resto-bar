/* eslint-disable @typescript-eslint/no-explicit-any */
import * as s from "../../styles";

import { useFetchOrders } from "../../../../hooks/delivery/useFetchOrders";
import { Header } from "../../components/header";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";

export const HomeDashboard = () => {
	const { data: dataOrders, loading: isLoading, error } = useFetchOrders();

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Pedidos"
					subtitle="Crea y configura las hamburguesas de la marca"
				/>
				<s.Body>
				{isLoading ? (
            <div>Cargando pedidos...</div>
          ) : error ? (
            <div>Error al cargar los pedidos: {error}</div>
          ) : (
            <TabGroup>
              <TabList>
                <Tab as={React.Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected ? "text-blue-500" : "text-gray-500"
                      }`}
                    >
                      Pendientes
                    </button>
                  )}
                </Tab>
                <Tab as={React.Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected ? "text-blue-500" : "text-gray-500"
                      }`}
                    >
                      En proceso
                    </button>
                  )}
                </Tab>
                <Tab as={React.Fragment}>
                  {({ selected }) => (
                    <button
                      className={`${
                        selected ? "text-blue-500" : "text-gray-500"
                      }`}
                    >
                      Entregados
                    </button>
                  )}
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {dataOrders
                    .filter(order => order.status === 'pending')
                    .map(order => (
                      <div key={order.order_id}>
                        <h3>{order.user_name}</h3>
                        <p>{order.order_date}</p>
                        <ul>
                          {order.items.map(item => (
                            <li key={item.id}>{item.item_name} - {item.quantity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </TabPanel>
                <TabPanel>
                  {dataOrders
                    .filter(order => order.status === 'in_process')
                    .map(order => (
                      <div key={order.order_id}>
                        <h3>{order.user_name}</h3>
                        <p>{order.order_date}</p>
                        <ul>
                          {order.items.map(item => (
                            <li key={item.id}>{item.item_name} - {item.quantity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </TabPanel>
                <TabPanel>
                  {dataOrders
                    .filter(order => order.status === 'delivered')
                    .map(order => (
                      <div key={order.order_id}>
                        <h3>{order.user_name}</h3>
                        <p>{order.order_date}</p>
                        <ul>
                          {order.items.map(item => (
                            <li key={item.id}>{item.item_name} - {item.quantity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </TabPanel>
              </TabPanels>
            </TabGroup>
          )}
				</s.Body>
			</s.ContainerLeft>
		</>
	);
};
