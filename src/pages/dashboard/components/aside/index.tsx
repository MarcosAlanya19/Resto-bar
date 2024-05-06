import { RiBuilding4Line, RiBubbleChartLine } from "react-icons/ri";
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

			<div
				style={{
					backgroundColor: "#edf3fc",
					padding: "13px 12px",
					borderRadius: "8px",
				}}
			>
				<Text
					leftIcon={<RiBubbleChartLine />}
					text="Hamburguesas"
					type="textDefault"
					weight="bold"
				/>
			</div>

			<div
				style={{
					// backgroundColor: "#edf3fc",
					padding: "13px 12px",
					borderRadius: "8px",
				}}
			>
				<Text
					leftIcon={<RiBuilding4Line />}
					text="Sucursales"
					type="textDefault"
					weight="medium"
				/>
			</div>
		</s.Sidebar>
	);
};
