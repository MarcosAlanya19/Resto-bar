/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";
import { IOrder } from "../../types/order.type";

export const useFetchOrders = () => {
	const [data, setData] = useState<IOrder[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchOrder = async () => {
		try {
			const response = await axios.get("http://localhost:3000/api/orders");
			response.data;
			setData(response.data);
			setLoading(false);
		} catch (error: any) {
			console.error("Error fetching order data:", error);
			setError(error);
			return;
		}
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	return { data, loading, error, fetchOrder };
};
