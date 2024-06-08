/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { IBurger } from "../../types/burger.type";

export const useFetchBurgers = () => {
	const [data, setData] = useState<IBurger[]>([]);
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
