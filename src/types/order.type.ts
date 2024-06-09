interface OrderItem {
	id: number;
	item_name: string;
	description: string;
	price: number;
	quantity: number;
}

export interface IOrder {
	order_id: number;
	status: string;
	assigned_store_id: number | null;
	order_date: string;
	user_name: string;
	items: OrderItem[];
}
