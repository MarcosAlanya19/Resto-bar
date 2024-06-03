/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPostStore {
	store_name: string;
	address: string;
	phone: string;
	opening_hour: string;
	closing_hour: string;
	image: any;
}

export interface IStore {
	id: string;
	store_name: string;
	public_id: string;
	secure_url: string;
	address: string;
	phone: string;
	opening_hour: string;
	closing_hour: string;
}
