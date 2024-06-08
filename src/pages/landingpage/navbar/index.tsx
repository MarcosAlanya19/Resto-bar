import { FC } from "react";
import { Text } from "../../../components/atomic/text";
import { Link } from "react-router-dom";

export const Navbar: FC = () => {
	return (
		<div
			style={{
				height: "64px",
				backgroundColor: "#0e0e0e",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				paddingInline: "40px",
				color: "#fff",
			}}
		>
			<div style={{ display: "grid", justifyItems: "center", lineHeight: "1" }}>
				<Text text="TOSTADO" type="textDefault" weight="bold" />
				<Text text="restobar." type="textDefault" />
			</div>

			<div style={{ display: "flex", gap: "40px" }}>
				<Link to={"/"}>
					<Text text="Inicio" type="textDefault" />
				</Link>

				<Link to={"menu"}>
					<Text text="Menú" type="textDefault" />
				</Link>
				<Text text="Blog" type="textDefault" />
			</div>
		</div>
	);
};
