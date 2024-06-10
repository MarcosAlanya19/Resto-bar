/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { apiConfig } from "../../config/axios";
import { IOrder } from "../../types/order.type";

export const useFetchOrders = () => {
	const [data, setData] = useState<IOrder[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchOrder = async () => {
		try {
			const response = await apiConfig.get("/orders");
			setData(response.data);
			setLoading(false);
		} catch (error: any) {
			console.error("Error fetching order data:", error);
			setError(error);
		}
	};

	useEffect(() => {
		fetchOrder();
	}, []);

	return { data, loading, error, fetchOrder };
};
