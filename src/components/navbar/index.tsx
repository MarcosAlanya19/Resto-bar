import { FC } from "react";
import * as s from "./styles"

import { Text } from "../atomic/text";

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
				<s.StyledNavLink to={"/"}>
					<Text text="Inicio" type="textDefault" />
				</s.StyledNavLink>

				<s.StyledNavLink to={"menu"}>
					<Text text="Menú" type="textDefault" />
				</s.StyledNavLink>
				<Text text="Blog" type="textDefault" />
			</div>
		</div>
	);
};
