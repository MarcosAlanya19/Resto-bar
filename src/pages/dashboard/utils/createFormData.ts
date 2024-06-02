import { IFormInput } from "../types";

export const createFormData = (data: IFormInput): FormData => {
	const formData = new FormData();
	formData.append("store_name", data.store_name);
	formData.append("address", data.address);
	formData.append("phone", data.phone);
	formData.append("opening_hour", data.opening_hour);
	formData.append("closing_hour", data.closing_hour);
	formData.append("image", data.image[0]);
	return formData;
};
