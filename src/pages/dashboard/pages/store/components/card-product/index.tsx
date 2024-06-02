import React from "react";
import * as s from "./styles";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Text } from "../../../../../../components/atomic/text";
import { Store } from "../../../../../../types/store.type";

interface IProps {
	data: Store;
}

export const CardProduct: React.FC<IProps> = (props) => {
	const { data } = props;

	return (
		<>
			<div
				style={{
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					backgroundColor: "#fff",
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 100px",
					padding: "8px 16px",
				}}
			>
				<Text text={data.store_name} type="text" />
				<Text text={data.opening_hour} type="text" />
				<Text text={data.closing_hour} type="text" />
				<Text text={data.address} type="text" />
				<div style={{ width: 50, height: 50, overflow: "hidden" }}>
					<img
						src={data.secure_url}
						alt="img-store"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "8px",
					}}
				>
					<s.WrapperIcon alert>
						<RiDeleteBinLine size={16} />
					</s.WrapperIcon>
					<s.WrapperIcon alert={false}>
						<PiPencilSimpleLineDuotone size={16} />
					</s.WrapperIcon>
				</div>
			</div>
		</>
	);
};
