/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as sg from "../../styles";
import * as s from "./styles";

import { RiAddLine } from "react-icons/ri";
import { Text } from "../../../../components/atomic/text";
import { useFetchItems } from "../../../../hooks/burger/useFetchBurger";
import { useBoolean } from "../../../../hooks/useBoolean";
import { Header } from "../../components/header";
import { CardItem } from "./components/card-item";
import { ModalFormItem } from "./components/form-item";

export const ItemDashboard: React.FC = () => {
	const createStore = useBoolean();

	const { data: itemData, fetchItem } = useFetchItems();

	return (
		<>
			<sg.ContainerLeft>
				<Header
					title="Productos"
					subtitle="Crea y configura las productos de la marca"
					actions={
						<sg.Button onClick={createStore.on}>
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
						</sg.Button>
					}
				/>
				<sg.Body>
					{/* <s.StyledSearch
						type="text"
						placeholder="O  Buscar por nombre de hamburguesa"
					/> */}

					<s.WrapperHeader>
						<Text weight="medium" text={"Nombre"} type="text" />
						<Text weight="medium" text={"Tipo"} type="text" />
						<Text weight="medium" text={"Descripción"} type="text" />
						<Text weight="medium" text={"Precio"} type="text" />
						<Text weight="medium" text={"Tienda"} type="text" />
						<Text weight="medium" text={"Imagen"} type="text" />
					</s.WrapperHeader>

					<s.WrapperCard>
						{itemData?.map((burger) => (
							<CardItem key={burger.id} refresh={fetchItem} data={burger} />
						))}
					</s.WrapperCard>
				</sg.Body>
			</sg.ContainerLeft>
			<ModalFormItem modal={createStore} refresh={fetchItem} />
		</>
	);
};
