import React from "react";
import * as s from "./styles.ts";

interface IProps {
	img: string;
	title: string;
	description: string;
	price: string;
}

export const CardMenu: React.FC<IProps> = (props) => {
	const { title, description, price, img } = props;

	return (
		<s.Card
			style={{
				position: "relative",
				borderRadius: "24px",
				backgroundColor: "${(props) => props.theme.black}",
				color: "${(props) => props.theme.white}",
				width: "400px",
				height: "250px",
			}}
		>
			<div style={{ fontSize: "32px", fontWeight: "900", textAlign: "center" }}>
				{title}
			</div>
			<p
				style={{
					fontWeight: "normal",
					fontFamily: "Poppins",
					textAlign: "center",
				}}
			>
				{description}
			</p>
			<div style={{ fontSize: "32px", fontWeight: "900", textAlign: "end" }}>
				{price}
			</div>
			<div
				style={{
					position: "absolute",
					bottom: "-40px",
					left: "-130px",
					width: "300px",
					height: "200px",
				}}
			>
				<img style={{ width: "100%", height: "100%" }} src={img} alt={img} />
			</div>
		</s.Card>
	);
};
