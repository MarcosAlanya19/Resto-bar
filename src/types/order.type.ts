interface OrderItem {
	id: number;
	item_name: string;
	description: string;
	price: number;
	quantity: number;
}

export enum IOrderStatus {
	pending = "pending",
	process = "in_process",
  delivered = "delivered",
  canceled = "canceled",
  rejected = "rejected",
}

export interface IOrder {
	order_id: number;
	status: IOrderStatus;
	assigned_store_id: number | null;
	order_date: string;
	user_name: string;
	items: OrderItem[];
}
