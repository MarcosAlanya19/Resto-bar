/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";
import { IBurger, IPostBurger } from "../../types/burger.type";

const createFormData = (data: IPostBurger) => {
  const formData = new FormData();
  formData.append("burger_name", data.burger_name);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("store_ids", data.store_ids);
  formData.append("image", data.image[0]);
  return formData;
};

export const usePetitionBurger = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [success, setSuccess] = React.useState(false);
	const [response, setResponse] = React.useState<IBurger>({} as IBurger);

	const postBurger = async (data: IPostBurger) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.post(
				"http://localhost:3000/api/burgers",
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

	const updateBurger = async (id: string, data: IPostBurger) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.put(
				`http://localhost:3000/api/burgers/${id}`,
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

	return {
		postBurger,
		updateBurger,
		loading,
		error,
		success,
		response,
	};
};
