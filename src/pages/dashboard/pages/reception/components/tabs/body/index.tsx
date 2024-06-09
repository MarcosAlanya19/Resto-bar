import React from "react";
import * as s from "./styles";

import { TabPanel, TabPanels } from "@headlessui/react";
import { IOrder, IOrderStatus } from "../../../../../../../types/order.type";
import { CardOrderDelivered } from "../../cards/card-order-delivered";
import { CardOrderPeding } from "../../cards/card-order-peding";
import { CardOrderProcess } from "../../cards/card-order-process";

interface IProps {
	data: IOrder[];
	refresh: () => void;
}

export const TabBody: React.FC<IProps> = (props) => {
	const { data: dataOrders, refresh: fetchOrder } = props;

	return (
		<TabPanels>
			<TabPanel>
				{dataOrders.filter((order) => order.status === IOrderStatus.pending)
					.length === 0 ? (
					<s.NoDataWrapper>
						<s.NoDataText>
							No hay pedidos pendientes en este momento.
						</s.NoDataText>
					</s.NoDataWrapper>
				) : (
					<s.WrapperCard>
						{dataOrders
							.filter((order) => order.status === IOrderStatus.pending)
							.map((order) => (
								<CardOrderPeding
									key={order.order_id}
									data={order}
									refresh={fetchOrder}
								/>
							))}
					</s.WrapperCard>
				)}
			</TabPanel>

			<TabPanel>
				{dataOrders.filter((order) => order.status === IOrderStatus.process)
					.length === 0 ? (
					<s.NoDataWrapper>
						<s.NoDataText>
							No hay pedidos en proceso por este momento.
						</s.NoDataText>
					</s.NoDataWrapper>
				) : (
					<s.WrapperCard>
						{dataOrders
							.filter((order) => order.status === IOrderStatus.process)
							.map((order) => (
								<CardOrderProcess
									key={order.order_id}
									data={order}
									refresh={fetchOrder}
								/>
							))}
					</s.WrapperCard>
				)}
			</TabPanel>

			<TabPanel>
				{dataOrders.filter((order) => order.status === IOrderStatus.delivered)
					.length === 0 ? (
					<s.NoDataWrapper>
						<s.NoDataText>
							No hay pedidos entregados en este momento.
						</s.NoDataText>
					</s.NoDataWrapper>
				) : (
					<s.WrapperCard>
						{dataOrders
							.filter((order) => order.status === IOrderStatus.delivered)
							.map((order) => (
								<CardOrderDelivered
									key={order.order_id}
									data={order}
									refresh={fetchOrder}
								/>
							))}
					</s.WrapperCard>
				)}
			</TabPanel>
		</TabPanels>
	);
};
