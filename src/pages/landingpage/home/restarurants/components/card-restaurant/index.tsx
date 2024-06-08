import React from "react";
import * as s from "./styles.ts";

import dayjs from "dayjs";
import { Text } from "../../../../../../components/atomic/text/index.tsx";
import { IStore } from "../../../../../../types/store.type.ts";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

interface IProps {
	data: IStore;
}

export const CardRestaurant: React.FC<IProps> = (props) => {
	const { data } = props;
	const formattedClosingHour = dayjs(data?.closing_hour, "HH:mm:ss").format(
		"hh:mm A"
	);
	const formattedOpeningHour = dayjs(data.opening_hour, "HH:mm:ss").format(
		"hh:mm A"
	);

	return (
		<s.Card>
			<div style={{ height: "200px" }}>
				<img
					src={data.secure_url}
					alt={"img-item"}
					style={{
						height: "100%",
						width: "100%",
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</div>
			<div style={{ display: "grid", padding: "16px", gap: "8px" }}>
				<div>
					<Text text={data.store_name} type="title" />
					<div style={{ display: "flex", gap: "4px" }}>
						<Text text={"Horario:"} type="text" weight="medium" />
						<div style={{ display: "flex", gap: "4px" }}>
							<Text text={formattedOpeningHour} type="text" />
							<Text text={"-"} type="text" />
							<Text text={formattedClosingHour} type="text" />
						</div>
					</div>
					<div style={{ display: "flex", gap: "4px" }}>
						<Text text={"Telefono:"} type="text" weight="medium" />
						<Text text={data.phone} type="text" />
					</div>
					<div style={{ display: "flex", gap: "4px" }}>
						<Text text={"Dirección:"} type="text" weight="medium" />
						<Text text={data.address} type="text" />
					</div>
				</div>
				<Text text={data.description} type="text" />
			</div>
		</s.Card>
	);
};
