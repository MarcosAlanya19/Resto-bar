import { FC } from "react";
import { Navbar } from "../../components/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/footer";

export const Layout: FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};
