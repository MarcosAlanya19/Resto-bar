import React from "react";
import * as s from "./styles.ts";

import { Text } from "../../../../components/atomic/text/index.tsx";
import { useUserCartContext } from "../../../../context/userContext.tsx";
import { IBurger } from "../../../../types/burger.type.ts";

interface IProps {
	data: IBurger
}

export const CardMenuComplete: React.FC<IProps> = (props) => {
	const { data } = props;
	const { addToCart } = useUserCartContext();

	return (
		<s.Card>
			<s.Image src={data.secure_url} alt={"img"} />
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
					<Text text={data.item_name} type="title" weight="medium" />
					<Text text={data.description} type="text" />
				</div>
				<div style={{ display: "flex", justifyContent: "end" }}>
					<Text text={`S/ ${data.price}`} type="title" weight="bold" />
				</div>
				<button onClick={() => addToCart(data)}>Añadir al Carrito</button>

			</div>
		</s.Card>
	);
};
