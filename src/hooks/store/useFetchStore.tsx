/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { Store } from "../../types/store.type";

export const useFetchStores = () => {
	const [data, setData] = useState<Store[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchStore = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/stores");
			response.data;
			setData(response.data);
			setLoading(false);
		} catch (error: any) {
			console.error("Error fetching store data:", error);
			setError(error);
			return;
		}
	};

	useEffect(() => {
		fetchStore();
	}, []);

	return { data, loading, error, fetchStore };
};
