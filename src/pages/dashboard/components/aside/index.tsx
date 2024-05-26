import { RiBubbleChartLine, RiBuilding4Line } from "react-icons/ri";
import { Text } from "../../../../components/atomic/text";
import * as s from "./styles";

export const AsideModal = () => {
	return (
		<s.Sidebar>
			<div
				style={{
					display: "grid",
					alignItems: "center",
					justifyItems: "center",
					margin: "80px 0",
				}}
			>
				<Text
					text="EL TOSTADO."
					type="title"
					weight="medium"
					style={{ fontSize: "32px" }}
				/>
				<Text
					style={{ textAlign: "center" }}
					text="Restobar"
					type="text"
					weight="medium"
				/>
			</div>

			<s.StyledNavLink to={"/dashboard/store"}>
				<Text
					leftIcon={<RiBuilding4Line />}
					text="Sucursales"
					type="textDefault"
				/>
			</s.StyledNavLink>
			<s.StyledNavLink to={"/dashboard/burguer"}>
				<Text
					leftIcon={<RiBubbleChartLine />}
					text="Hamburguesas"
					type="textDefault"
				/>
			</s.StyledNavLink>
		</s.Sidebar>
	);
};
