/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import axios from "axios";
import { IPostStore, IStore } from "../../types/store.type";

const createFormData = (data: IPostStore) => {
	const formData = new FormData();
	formData.append("store_name", data.store_name);
	formData.append("description", data.description);
	formData.append("address", data.address);
	formData.append("phone", data.phone);
	formData.append("opening_hour", data.opening_hour);
	formData.append("closing_hour", data.closing_hour);
	formData.append("image", data.image[0]);
	return formData;
};

export const usePetitionStore = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [success, setSuccess] = React.useState(false);
	const [response, setResponse] = React.useState<IStore>({} as IStore);

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

	const updateStore = async (id: string, data: IPostStore) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.put(
				`http://localhost:3000/api/stores/${id}`,
				formData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);

			if (response.status === 204) {
				setSuccess(true);
			} else {
				throw new Error("Error updating store");
			}

			setResponse(response.data);
		} catch (error: any) {
			setError(error.response?.data?.message || error.message);
		} finally {
			setLoading(false);
		}
	};

	return { postStore, updateStore, loading, error, success, response };
};
