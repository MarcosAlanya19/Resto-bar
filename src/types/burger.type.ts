/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPostBurger {
	burger_name: string;
	description: string;
	price: string;
	store_ids: string[];
	image: string;
}

interface Store {
	id: number;
	name: string;
}

export interface IBurger {
	id: string;
	burger_name: string;
	description: string;
	price: string;
	image: any;
	public_id: string;
	secure_url: string;
	stores: Store[];
}
