import { IStore } from "./store.type";

export interface IUser {
	user_name: string;
	email: string;
	phone_number: string;
	address: string;
}

export enum IOrderStatus {
	pending = "pending",
	process = "in_process",
	delivered = "delivered",
	canceled = "canceled",
	rejected = "rejected",
}

export interface IOrderItem {
	id: number;
	item_name: string;
	description: string;
	price: number;
	quantity: number;
}

export interface IOrder {
	order_id: number;
	status: IOrderStatus;
	assigned_store_id: number | null;
	order_date: string;
	user: IUser;
	store: IStore;
	items: IOrderItem[];
}
