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
			</TabPanel>

			<TabPanel>
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
			</TabPanel>

			<TabPanel>
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
			</TabPanel>
		</TabPanels>
	);
};
