/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { IItem } from "../../types/burger.type";

export const useFetchItems = () => {
	const [data, setData] = useState<IItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchItem = async () => {
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
		fetchItem();
	}, []);

	return { data, loading, error, fetchItem };
};
