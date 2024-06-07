import { Navigate, Route } from "react-router-dom";
import { useUserContext } from "../../../../context/userContext";
import React from "react";

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
	children,
	...rest
}) => {
	const { user } = useUserContext();

	return (
		<Route
			{...rest}
			element={user ? children : <Navigate to="/login" replace />}
		/>
	);
};
