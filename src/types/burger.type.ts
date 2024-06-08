/* eslint-disable @typescript-eslint/no-explicit-any */

export enum MenuItemType {
  Beverage = 'Beverage',
  Burger = 'Burger',
  Other = 'Other'
}

export interface IPostBurger {
	item_name: string;
	description: string;
	price: string;
	store_ids: string[];
	image: string;
	type: MenuItemType
}

interface Store {
	id: number;
	name: string;
}

export interface IBurger {
	id: string;
	item_name: string;
	description: string;
	price: string;
	image: any;
	public_id: string;
	secure_url: string;
	stores: Store[];
	type: MenuItemType
}
