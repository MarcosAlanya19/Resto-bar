import { FC } from "react";
import { Text } from "../atomic/text";

export const Footer: FC = () => {
	return (
		<div
			style={{
				backgroundColor: "#0e0e0e",
				height: "40px",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text
				text="Todos los derechos reservados  © 2024"
				weight="medium"
				type="text"
				style={{ color: "#fff" }}
			/>
		</div>
	);
};
