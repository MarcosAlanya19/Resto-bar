/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";
import { IItem } from "../../types/burger.type";
import { ILogin } from "../../types/user.type";

const createFormData = (data: ILogin) => {
	const formData = new FormData();
	formData.append("address", data.address);
	formData.append("email", data.email);
	formData.append("phone_number", data.phone_number);
	formData.append("user_name", data.user_name);
	formData.append("user_password", data.user_password);
	return formData;
};

export const usePostUser = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [success, setSuccess] = React.useState(false);
	const [response, setResponse] = React.useState<IItem>({} as IItem);

	const postBurger = async (data: ILogin) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.post(
				"http://localhost:3000/api/users",
				formData
			);

			if (response.status === 201) {
				setSuccess(true);
			} else {
				throw new Error("Error creating store");
			}

			setResponse(response.data);
		} catch (error: any) {
			setError(error.response?.data?.message || error.message);
		} finally {
			setLoading(false);
		}
	};

	return {
		postBurger,
		loading,
		error,
		success,
		response,
	};
};
