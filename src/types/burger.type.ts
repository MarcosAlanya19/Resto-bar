/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPostBurger {
	burger_name: string;
	description: string;
	price: string;
	store_id: string;
	image: string;
}

export interface IBurger {
	id: string;
	burger_name: string;
	description: string;
	price: string;
	store_id: string;
	image: any;
	public_id: string;
	secure_url: string;
}
