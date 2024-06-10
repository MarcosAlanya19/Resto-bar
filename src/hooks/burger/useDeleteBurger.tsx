import React from "react";
import { apiConfig } from "../../config/axios";

export const useDeleteItem = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const deleteItem = async (itemId: string) => {
		setLoading(true);
		setError("");

		try {
			await apiConfig.delete(`/burgers/${itemId}`);
		} catch (error) {
			setError("Error deleting item");
		} finally {
			setLoading(false);
		}
	};

	return { loading, error, deleteItem };
};
