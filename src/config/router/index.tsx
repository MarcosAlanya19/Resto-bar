import React from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { useUserCartContext } from "../../context/userContext";
import { IUserRole } from "../../types/user.type";
import { routes } from "./routes";

const Dashboard = React.lazy(() =>
	import("../../pages/dashboard").then((module) => ({
		default: module.Dashboard,
	}))
);
const ItemDashboard = React.lazy(() =>
	import("../../pages/dashboard/pages/burger").then((module) => ({
		default: module.ItemDashboard,
	}))
);
const HistoryDashboard = React.lazy(() =>
	import("../../pages/dashboard/pages/history").then((module) => ({
		default: module.HistoryDashboard,
	}))
);
const Reception = React.lazy(() =>
	import("../../pages/dashboard/pages/reception").then((module) => ({
		default: module.Reception,
	}))
);
const StoreDashboard = React.lazy(() =>
	import("../../pages/dashboard/pages/store").then((module) => ({
		default: module.StoreDashboard,
	}))
);
const Home = React.lazy(() =>
	import("../../pages/landingpage/home").then((module) => ({
		default: module.Home,
	}))
);
const Menu = React.lazy(() =>
	import("../../pages/landingpage/menu").then((module) => ({
		default: module.Menu,
	}))
);
const Blog = React.lazy(() =>
	import("../../pages/landingpage/blog").then((module) => ({
		default: module.Blog,
	}))
);
const Layout = React.lazy(() =>
	import("../../pages/layout").then((module) => ({ default: module.Layout }))
);
const Login = React.lazy(() =>
	import("../../pages/login").then((module) => ({ default: module.Login }))
);

export const RoutesConfig = () => {
	const { user } = useUserCartContext();

	const adminUser = user && user.role === IUserRole.Administrator;

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
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
					<Route path={routes.word.blog} element={<Blog />} />
				</Route>

				<Route
					path={routes.dashboard.index}
					element={
						adminUser ? <Dashboard /> : <Navigate to={routes.login.index} />
					}
				>
					<Route path={routes.word.reception} element={<Reception />} />
					<Route path={routes.word.orders} element={<HistoryDashboard />} />

					<Route path={routes.word.item} element={<ItemDashboard />} />
					<Route path={routes.word.store} element={<StoreDashboard />} />
				</Route>
			</Routes>
		</React.Suspense>
	);
};
