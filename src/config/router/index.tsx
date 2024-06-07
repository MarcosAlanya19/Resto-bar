import { Navigate, Route, Routes } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Dashboard from "../../pages/dashboard";
import { BurguerDashboard } from "../../pages/dashboard/pages/burger";
import { StoreDashboard } from "../../pages/dashboard/pages/store";
import Home from "../../pages/home";
import Login from "../../pages/login";

export const RoutesConfig = () => {
	const { user } = useUserContext();

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route
				path="/dashboard"
				element={user ? <Dashboard /> : <Navigate to={"/login"} />}
			>
				<Route path="burguer" element={<BurguerDashboard />} />
				<Route path="store" element={<StoreDashboard />} />
			</Route>
		</Routes>
	);
};
