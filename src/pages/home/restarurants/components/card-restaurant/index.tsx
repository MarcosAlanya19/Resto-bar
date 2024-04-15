import React from "react";
import * as s from "./styles.ts";

interface IProps {
	img: string;
	title: string;
	subtitle: string;
	description: string;
}

export const CardRestaurant: React.FC<IProps> = (props) => {
	const { img, title, description, subtitle } = props;

	return (
		<s.Card>
			<img src={img} alt={img} />
			<div style={{ padding: "24px 24px 24px 16px" }}>
				<div style={{ fontSize: "32px", fontWeight: "900" }}>{title}</div>
				<div style={{ fontSize: "24px", fontWeight: "900" }}>{subtitle}</div>
				<p style={{ fontWeight: "normal", fontFamily: "Poppins" }}>
					{description}
				</p>
			</div>
		</s.Card>
	);
};
