/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchStores = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchStore = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/stores");
			return response.data;
		} catch (error: any) {
			console.error("Error fetching store data:", error);
			setError(error);
			return;
		}
	};

	useEffect(() => {
		const getStoreData = async () => {
			const data = await fetchStore();
			setData(data);
			setLoading(false);
		};

		getStoreData();
	}, []);

	return { data, loading, error };
};
