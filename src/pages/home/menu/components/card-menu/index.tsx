import React from "react";
import * as s from "./styles.ts";

import { Text } from "../../../../../components/atomic/text/index.tsx";

interface IProps {
	img: string;
	title: string;
	description: string;
	price: string;
}

export const CardMenu: React.FC<IProps> = (props) => {
	const { title, description, price, img } = props;

	return (
		<s.Card>
			<s.Image src={img} alt={"img"} />
			<div
				style={{
					borderRadius: "16px",
					padding: "16px",
					paddingLeft: "220px",
					display: "grid",
					gridAutoRows: "1fr auto",
				}}
			>
				<div>
					<Text text={title} type="title" weight="medium" />
					<Text text={description} type="text" />
				</div>
				<div style={{ display: "flex", justifyContent: "end" }}>
					<Text text={`S/ ${price}`} type="title" weight="bold" />
				</div>
			</div>
		</s.Card>
	);
};
