/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";
import { IStore } from "../../types/store.type";

export const useFetchBurgers = () => {
	const [data, setData] = useState<IStore[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchBurger = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/burgers");
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
		fetchBurger();
	}, []);

	return { data, loading, error, fetchBurger };
};
