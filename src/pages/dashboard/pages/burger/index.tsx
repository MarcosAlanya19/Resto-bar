/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as s from "../../styles";

import { RiAddLine } from "react-icons/ri";
import { Text } from "../../../../components/atomic/text";
import { useFetchBurgers } from "../../../../hooks/burger/useFetchBurger";
import { useBoolean } from "../../../../hooks/useBoolean";
import { Header } from "../../components/header";
import { CardBurger } from "./components/card-burger";
import { ModalFormStore } from "./components/form-burger";

export const BurguerDashboard: React.FC = () => {
	const createStore = useBoolean();

	const { data: burgerData, fetchBurger } = useFetchBurgers();

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Hamburguesas"
					subtitle="Crea y configura las hamburguesas de la marca"
					actions={
						<s.Button onClick={createStore.on}>
							<Text
								text="Agregar"
								type="text"
								leftIcon={<RiAddLine size={14} />}
								weight="medium"
								style={{
									color: "#fff",
									display: "flex",
									justifyContent: "center",
								}}
							/>
						</s.Button>
					}
				/>
				<s.Body>
					<input
						type="text"
						placeholder="O  Buscar por nombre de hamburguesa"
						style={{
							width: "50%",
							marginBottom: "24px",
							border: "1px solid #bfbfbf",
							minHeight: "40px",
							padding: "4px 8px",
							fontSize: "14px",
							borderRadius: "8px",
						}}
					/>

					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							backgroundColor: "#edf3fc",
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 100px",
							marginBottom: "4px",
							padding: "8px 16px",
						}}
					>
						<Text weight="medium" text={"Nombre"} type="text" />
						<Text weight="medium" text={"Descripción"} type="text" />
						<Text weight="medium" text={"Precio"} type="text" />
						<Text weight="medium" text={"Tienda"} type="text" />
						<Text weight="medium" text={"Imagen"} type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
						}}
					>
						{burgerData?.map((burger) => (
							<CardBurger key={burger.id} refresh={fetchBurger} data={burger} />
						))}
					</div>
				</s.Body>
			</s.ContainerLeft>
			<ModalFormStore modal={createStore} refresh={fetchBurger} />
		</>
	);
};
