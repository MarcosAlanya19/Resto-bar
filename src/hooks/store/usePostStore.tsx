/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { IPostStore, Store } from "../../types/store.type";

const createFormData = (data: IPostStore) => {
	const formData = new FormData();
	formData.append("store_name", data.store_name);
	formData.append("address", data.address);
	formData.append("phone", data.phone);
	formData.append("opening_hour", data.opening_hour);
	formData.append("closing_hour", data.closing_hour);
	formData.append("image", data.image[0]);
	return formData;
};

export const usePostStore = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [success, setSuccess] = React.useState(false);
	const [response, setResponse] = React.useState<Store>({} as Store);

	const postStore = async (data: IPostStore) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.post(
				"http://localhost:3000/api/stores",
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
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

	return { postStore, loading, error, success, response };
};
