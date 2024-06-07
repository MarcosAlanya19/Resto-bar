import { Route } from "react-router-dom";
import Dashboard from "../../../../pages/dashboard";
import { BurguerDashboard } from "../../../../pages/dashboard/pages/burger";
import { StoreDashboard } from "../../../../pages/dashboard/pages/store";

export const DashboardRoutes = () => {
	return (
		<>
			<Route path="/" element={<Dashboard />} />
			<Route path="burguer" element={<BurguerDashboard />} />
			<Route path="store" element={<StoreDashboard />} />
		</>
	);
};
