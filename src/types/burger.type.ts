/* eslint-disable @typescript-eslint/no-explicit-any */

export enum MenuItemType {
  Never = '',
  Beverage = 'Beverage',
  Burger = 'Burger',
  Other = 'Other'
}

export interface IPostItem {
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

export interface IItem {
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
