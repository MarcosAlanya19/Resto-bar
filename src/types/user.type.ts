export enum IUserRole {
	Customer = "customer",
	Administrator = "administrator",
}

export interface ILogin {
	email: string;
	user_password: string;
	phone_number: string;
	address: string;
	user_name: string;
}

export interface IUser {
	id: string;
	user_name: string;
	email: string;
	role: IUserRole;
	phone_number: string;
	address: string;
}
