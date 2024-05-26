import * as s from "./styles";

import { Outlet } from "react-router-dom";
import { AsideModal } from "./components/aside";

const Dashboard = () => {
	return (
		<>
			<s.WrapperDashboard>
				<AsideModal />
				<Outlet />
			</s.WrapperDashboard>
		</>
	);
};

export default Dashboard;
