/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import React from "react";
import { useUserContext } from "../../context/userContext";
import { ILogin } from "../../types/user.type";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const createFormData = (data: ILogin) => {
	const formData = new FormData();
	formData.append("email", data.email);
	formData.append("user_password", data.user_password);
	return formData;
};

export const useLoginUser = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState(null);
	const [success, setSuccess] = React.useState(false);
	const [response, setResponse] = React.useState();
	const { setUser } = useUserContext();
	const navigate = useNavigate();

	const loginUser = async (data: ILogin) => {
		setLoading(true);
		setError(null);
		setSuccess(false);

		const formData = createFormData(data);

		try {
			const response = await axios.post(
				"http://localhost:3000/api/users/login",
				formData
			);

			setResponse(response.data);
			setUser(response.data.user);
			toast.success(`Bienvenido ${response.data?.user.user_name}`);
			navigate("/dashboard/store");
			if (response.status === 201) {
				setSuccess(true);
			} else {
				throw new Error("Error creating store");
			}
		} catch (error: any) {
			setError(error.response.data.error);
		} finally {
			setLoading(false);
		}
	};

	return { loginUser, loading, error, success, response };
};
