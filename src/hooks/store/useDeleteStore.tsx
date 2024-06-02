import axios from "axios";
import React from "react";

export const useDeleteStore = () => {
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState("");

	const deleteStore = async (itemId: string) => {
		setLoading(true);
		setError("");

		try {
			await axios.delete(`http://localhost:3000/api/stores/${itemId}`);
		} catch (error) {
			setError("Error deleting item");
		} finally {
			setLoading(false);
		}
	};

	return { loading, error, deleteStore };
};
