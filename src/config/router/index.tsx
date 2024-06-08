import { Navigate, Route, Routes } from "react-router-dom";
import { useUserContext } from "../../context/userContext";
import Dashboard from "../../pages/dashboard";
import { BurguerDashboard } from "../../pages/dashboard/pages/burger";
import { StoreDashboard } from "../../pages/dashboard/pages/store";
import Home from "../../pages/landingpage/home";
import { Layout } from "../../pages/layout";
import Login from "../../pages/login";
import Menu from "../../pages/landingpage/menu";

export const RoutesConfig = () => {
	const { user } = useUserContext();

	return (
		<Routes>
			<Route
				path="/login"
				element={!user ? <Login /> : <Navigate to={"/dashboard/store"} />}
			/>

			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="menu" element={<Menu />} />
			</Route>

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
