import React from "react";
import * as s from "./styles"

import { Tab, TabList } from "@headlessui/react";
import { Text } from "../../../../../../../components/atomic/text";

export const TabHeader: React.FC = () => {
	return (
		<TabList
			style={{
				display: "grid",
				gridTemplateColumns: "repeat(3, 1fr)",
				gap: "8px",
				background: "#edf3fc",
				padding: "8px",
				borderRadius: "8px",
			}}
		>
			<Tab as={React.Fragment}>
				{({ selected }) => (
					<s.BtnTab selected={selected}>
						<Text
							text="Pendientes"
							weight={selected ? "semiBold" : "medium"}
							type="textDefault"
						/>
					</s.BtnTab>
				)}
			</Tab>

			<Tab as={React.Fragment}>
				{({ selected }) => (
					<s.BtnTab selected={selected}>
						<Text
							text="En proceso"
							weight={selected ? "semiBold" : "medium"}
							type="textDefault"
						/>
					</s.BtnTab>
				)}
			</Tab>

			<Tab as={React.Fragment}>
				{({ selected }) => (
					<s.BtnTab selected={selected}>
						<Text
							text="Entregados"
							weight={selected ? "semiBold" : "medium"}
							type="textDefault"
						/>
					</s.BtnTab>
				)}
			</Tab>
		</TabList>
	);
};
