import { Navigate, Route, Routes } from "react-router-dom";
import { useUserCartContext } from "../../context/userContext";
import Dashboard from "../../pages/dashboard";
import { BurguerDashboard } from "../../pages/dashboard/pages/burger";
import { StoreDashboard } from "../../pages/dashboard/pages/store";
import { Reception } from "../../pages/dashboard/pages/reception";
import Home from "../../pages/landingpage/home";
import Menu from "../../pages/landingpage/menu";
import { Layout } from "../../pages/layout";
import Login from "../../pages/login";

export const RoutesConfig = () => {
	const { user } = useUserCartContext();

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
				<Route path="reception" element={<Reception />} />
				<Route path="orders" element={<BurguerDashboard />} />

				<Route path="burguer" element={<BurguerDashboard />} />
				<Route path="store" element={<StoreDashboard />} />
			</Route>
		</Routes>
	);
};
