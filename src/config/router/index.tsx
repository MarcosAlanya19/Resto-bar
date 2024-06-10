import { Navigate, Route, Routes } from "react-router-dom";
import { useUserCartContext } from "../../context/userContext";
import { IUserRole } from "../../types/user.type";
import { routes } from "./routes";

import { Dashboard } from "../../pages/dashboard";
import { BurguerDashboard } from "../../pages/dashboard/pages/burger";
import { HistoryDashboard } from "../../pages/dashboard/pages/history";
import { Reception } from "../../pages/dashboard/pages/reception";
import { StoreDashboard } from "../../pages/dashboard/pages/store";
import { Home } from "../../pages/landingpage/home";
import { Menu } from "../../pages/landingpage/menu";
import { Layout } from "../../pages/layout";
import { Login } from "../../pages/login";

export const RoutesConfig = () => {
	const { user } = useUserCartContext();

	const adminUser = user && user.role === IUserRole.Administrator;

	return (
		<Routes>
			<Route
				path={routes.login.index}
				element={
					!adminUser ? <Login /> : <Navigate to={routes.dashboard.store} />
				}
			/>

			<Route path={routes.index} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path={routes.word.menu} element={<Menu />} />
			</Route>

			<Route
				path={routes.dashboard.index}
				element={
					adminUser ? <Dashboard /> : <Navigate to={routes.login.index} />
				}
			>
				<Route path={routes.word.reception} element={<Reception />} />
				<Route path={routes.word.orders} element={<HistoryDashboard />} />

				<Route path={routes.word.burger} element={<BurguerDashboard />} />
				<Route path={routes.word.store} element={<StoreDashboard />} />
			</Route>
		</Routes>
	);
};
